// pages/api/subscribe.js (Server-Side)
import connectToMongo from '@/db/dbConnect'; // Your MongoDB connection code


export default async function POST(req, res) {
  
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const { db } = await connectToMongo();

    try {
      await db.collection('subscriptions').insertOne({ email });
      return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      return res.status(500).json({ error: 'Database error' });
    }
 

  return res.status(405).end();
}
