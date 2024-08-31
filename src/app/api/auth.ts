import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jwt-simple';

const SECRET_KEY = 'your_secret_key'; // Replace with an environment variable

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (email === 'admin@example.com' && password === 'password') {
      const token = jwt.encode({ email }, SECRET_KEY, 'HS256');
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
