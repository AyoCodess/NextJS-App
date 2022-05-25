import React from 'react';
import { useSession } from 'next-auth/react';

function SignedIn() {
  const { data: session, status } = useSession();

  console.log({ session });

  return (
    <>
      {!session && <h1>You are not signed in</h1>}
      {session && <h1>You are signed in so you can view protected content</h1>}
    </>
  );
}

export default SignedIn;
