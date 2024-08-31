import type { NextApiRequest, NextApiResponse } from 'next';
import { properties } from '../../data/properties';
import { users } from '../../data/users';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { type } = req.query;
    if (type === 'properties') {
      res.status(200).json(properties);
    } else if (type === 'users') {
      res.status(200).json(users);
    } else {
      res.status(400).json({ message: 'Invalid query' });
    }
  } else if (req.method === 'POST') {
    // Handle POST requests to update or create properties/users
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
