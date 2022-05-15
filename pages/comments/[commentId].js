import React from 'react';
import { comments } from '../../data/comments';

function CommentPage({ comment }) {
  return (
    <div>
      <h2>
        {comment.id} {comment.text}
      </h2>
    </div>
  );
}

export default CommentPage;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
};
