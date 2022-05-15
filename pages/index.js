import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  //- Navigate to another page on click. You can use router.replace to re-direct to the root directory.
  const handleClick = () => {
    console.log('placing order');
    router.push('/product');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/product'>
        <a>Products</a>
      </Link>
      <Link href='/product'>
        <a>Products</a>
      </Link>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      <Link href='/news'>
        <a>News</a>
      </Link>
      {/* //-about has no header, has its own layout */}
      <Link href='/about'>
        <a>About</a>
      </Link>
      <button type='button' onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
}

export default Home;
