import React from 'react';
import Link from 'next/link';

function PostList({ posts }) {
  return (
    <>
      <h1>PostList</h1>;
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  let data = {};
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      posts: data,
    },
  };
}
