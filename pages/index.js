import React from 'react';
import Link from 'next/link';

import Head from 'next/head';
import { useSession } from 'next-auth/react';

function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      {
        <h1>{`${
          session ? session.user.name + ',' : ''
        } Welcome, please sgn in`}</h1>
      }
      {/* //- use head for every page, or once in _app.js if they dont have individual head tag in place or is missing cenrtain meta tags, it will pick it up from _app's head tag. */}
      <Head>
        <title>Main Product Nav Page</title>
        <meta name='description' content='MAIN next page demo app' />
      </Head>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
