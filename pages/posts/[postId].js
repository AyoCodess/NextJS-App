import React from 'react';
import { useRouter } from 'next/router';

function PostDetail({ post }) {
  const router = useRouter();

  // - if post does not exist
  if (router.isFallback) {
    return <h1>Loading Post...</h1>;
  }

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
    fallback: true,
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

    if (!data.id) {
      return {
        notFound: true,
      };
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      post: data,
    },
  };
};
