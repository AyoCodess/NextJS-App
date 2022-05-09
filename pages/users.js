import React from 'react';
import Users from './components/user';
import Link from 'next/link';

function UsersList({ users }) {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h1>List of Users</h1>
      <Users users={users} />
    </>
  );
}

export default UsersList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
  return {
    props: { users: data },
  };
}
