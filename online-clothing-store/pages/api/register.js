// pages/api/register.js

import dbConnect from '../utils/dbConnect';
import User from '../models/User';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect(); // Connect to your database
      const { username, email, password } = req.body; // Updated field names
      const user = await User.create({
        name: username, // Map 'username' to 'name'
        login: email, // Map 'email' to 'login'
        password,
      });
      return res.status(201).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Registration failed.' });
    }
  } else {
    res.status(405).end();
  }
}
