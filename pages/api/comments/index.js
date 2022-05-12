import { comments } from '../../../data/comments';

function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  }

  if (req.method === 'POST') {
    const comment = req.body.comment; //-comment refers to the property we set in the front-end

    const newComment = { id: Date.now().valueOf(), text: comment };

    comments.push(newComment);

    res.status(201).json(newComment);
  }
}

export default handler;
