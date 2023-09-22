// pages/api/subscribe.js (Server-Side)
import connectToDatabase from '../../utils/mongodb'; // Your MongoDB connection code
import { validateEmail } from '../../utils/validation'; // Your validation functions

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const { db } = await connectToDatabase();

    try {
      await db.collection('subscriptions').insertOne({ email });
      return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      return res.status(500).json({ error: 'Database error' });
    }
  }

  return res.status(405).end();
}
