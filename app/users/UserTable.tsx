import Link from "next/link";
import React, { cache } from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  let sortedUsers: { id: number; name: string; email: string }[] = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    const users: User[] = await res.json();

    sortedUsers = sort(users).asc(
      sortOrder === "email" ? (user) => user.email : (user) => user.name
    );
  } catch (error) {}

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href={"/users/?sortOrder=name"}>Name</Link>
            </th>
            <th>
              <Link href={"/users/?sortOrder=email"}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user: User) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
