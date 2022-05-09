import React from 'react';
import { useRouter } from 'next/router';

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 0) return <h1>viewing Docs Home Page</h1>;
  if (params.length === 1) return <h1>viewing Docs for {params[0]}</h1>;
  if (params.length === 2)
    return (
      <h1>
        viewing Docs for {params[0]} and {params[1]}
      </h1>
    );
  if (params.length > 2)
    return (
      <h1>
        viewing Docs for {params[0]}, {params[1]}, {params.slice(2).join(', ')}
      </h1>
    );
}

export default Doc;
