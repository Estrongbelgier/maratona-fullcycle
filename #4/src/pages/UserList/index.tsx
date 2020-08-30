/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  async function loadUsers() {
    const { data } = await api.get("users");

    setUsers(data.data);

    console.log(data.data);
    console.log(users);
  }

  useEffect(() => {
    loadUsers();
  });

  return (
    <article className="user-item">
      {users.length === 0 ? (
        <h1>Carregando</h1>
      ) : (
        users.map((user: User) => (
          <header key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <div>
              <strong>{user.first_name + " " + user.last_name}</strong>
              <span>{user.email}</span>
            </div>
          </header>
        ))
      )}
      <Link to="/">back</Link>
    </article>
  );
};

export default UserList;
