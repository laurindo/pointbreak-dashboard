import NextAuth from 'next-auth';
// import log from 'logging-service';
import EmailProvider from 'next-auth/providers/email';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
import { compare } from 'bcryptjs';
import clientPromise from '@/lib/mongodb-adapter';

const THIRTY_DAYS = 30 * 24 * 60 * 60;
const THIRTY_MINUTES = 30 * 60;

const callbacks = {
  async session({ session, token }) {
    try {
      // console.log('>> SESSION <<<', JSON.stringify(session));
      // console.log('>> TOKEN <<<', JSON.stringify(token));
      return session;
    } catch (err) {
      console.log('>>> ERROR callbacks <<<', err);
      throw new Error('Not found ');
    }
  },
};

export default NextAuth({
  debug: true,
  adapter: MongoDBAdapter(clientPromise),
  callbacks,
  pages: {
    error: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'email@domain.com',
        },
        password: { id: 'password', label: 'Password', type: 'password' },
      },
      async authorize({ email, password }) {
        try {
          const client = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

          console.log('Client: ', client);

          const users = await client.db().collection('users');
          const result = await users.findOne({ email: email });

          console.log('result: ', result);
          if (!result) {
            client.close();
            throw new Error('No user found with the email');
          }

          const checkPassword = await compare(password, result.password);
          console.log('checkPassword: ', checkPassword);
          if (!checkPassword) {
            client.close();
            throw new Error('Password doesnt match');
          }

          //Else send success response
          client.close();
          return { email: result.email };
        } catch (err) {
          console.log(err);
          throw new Error(err);
        }
      },
    }),
    EmailProvider({
      server: {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apikey',
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: 'support@pointbreak.com',
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        try {
          const { host } = new URL(url);
          const transport = nodemailer.createTransport(server);
          await transport.sendMail({
            to: email,
            from,
            subject: `Sign in to ${host}`,
            text: text({ url, host }),
            html: html({ url, host: `${host}`, email }),
          });
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  secret: process.env.RANDOM_JWT_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: THIRTY_DAYS,
    updateAge: THIRTY_MINUTES,
  },
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '#63c', // Hex color code
    logo: 'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_127/v1642213583/cripto-app/public/Logo_CriptoApp_2.png', // Absolute URL to image
  } /*,
  logger: {
    error(code, metadata) {
      log.error(code, metadata);
    },
    warn(code) {
      log.warn(code);
    },
    debug(code, metadata) {
      log.debug(code, metadata);
    }
  }*/,
});

function html({ url, host, email }) {
  const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`;
  const escapedHost = `${host.replace(/\./g, '&#8203;.')}`;
  // Your email template here
  return `
      <body>
        <h1>Your magic link! 🪄</h1>
        <h3>Your email is ${escapedEmail}</h3>
        <p>
          <a href="${url}">Sign in to ${escapedHost}</a>
      </body>
  `;
}

// Fallback for non-HTML email clients
function text({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
