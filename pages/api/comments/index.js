import React from 'react';
import { comments } from '../../../data/comments';

function handler(req, res) {
  res.status(200).json(comments);
}

export default handler;
