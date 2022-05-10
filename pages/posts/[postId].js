import React from 'react';

function PostDetail({ post }) {
  return (
    <>
      <div>PostDetail</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
}

export default PostDetail;

export const getStaticPaths = async () => {
  let data = {};
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  data = await response.json();

  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  let data = {};

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );

    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      post: data,
    },
  };
};
