import React from 'react';

function Users({ users }) {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default Users;
