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
          value: 'demo@domain.com',
          placeholder: 'email@domain.com',
        },
        password: { id: 'password', label: 'Password', type: 'password', value: '123456' },
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
  ],
  secret: process.env.RANDOM_JWT_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: THIRTY_DAYS,
    updateAge: THIRTY_MINUTES,
  },
});
