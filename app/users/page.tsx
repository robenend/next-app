import React, { cache } from 'react'
import UserTable from './UserTable';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <UserTable/>
    </>
  )
}

export default UsersPage
