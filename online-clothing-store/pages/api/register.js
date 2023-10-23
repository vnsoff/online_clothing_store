//pages/api/register.js

import dbConnect from '../utils/dbConnect';
import User from '../models/User';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect(); // Connect to your database
      const { name, login, password } = req.body;
      const user = new User({
        name,
        login,
        password,
      });
      await user.save();
      return res.status(201).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Registration failed.' });
    }
  } else {
    res.status(405).end();
  }
}