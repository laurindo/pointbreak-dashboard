import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';
import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);
// secret key generate 32 bytes of random data
const Securitykey = process.env.SECRET_CRYPTO_KEY;

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return {
    iv: initVector.toString('hex'),
    content: encrypted.toString('hex'),
  };
};

const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Securitykey,
    Buffer.from(hash.iv, 'hex'),
  );
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, 'hex')),
    decipher.final(),
  ]);
  return decrpyted.toString();
};

async function handler(req, res) {
  if (req.method === 'POST') {
    const { publicKey, secretKey, email } = req.body;
    const message = JSON.stringify({ publicKey, secretKey });
    const encryptedData = encrypt(message);

    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    const status = await db
      .collection('binance_keys')
      .insertOne({ data: encryptedData, email: email });
    if (status.insertedId) {
      res.status(201).json({});
    } else {
      res.status(400).json({ message: 'Error to insert' });
    }
  } else {
    //Response for other than POST method
    res.status(500).json({ message: 'Route not valid' });
  }
}

export default handler;
