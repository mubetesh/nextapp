import type { NextApiRequest, NextApiResponse } from 'next';
import { properties } from '../../data/properties';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}
