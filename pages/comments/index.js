import React, { useState } from 'react';

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/Json' },
    });

    const data = await response.json();
    console.log(data);
  };

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>submit comments</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.text}</h2>
        </div>
      ))}
    </>
  );
}

export default CommentsPage;
