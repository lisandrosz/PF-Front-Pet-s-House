import { getUsers } from 'helpers';
import { useCustomSelector } from 'hooks/redux';
import React, { useEffect } from 'react';

const UserDash: React.FC = () => {
  useEffect((): void => {
    getUsers();
  }, []);
  const users = useCustomSelector((state) => state.users.users);
  return (
    <div>
      <h1>Listado de Mascotas Publicadas</h1>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>Rol: {user.rol}</p>
            <p>email: {user.email}</p>
            <p>ID: {user.id}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default UserDash;
