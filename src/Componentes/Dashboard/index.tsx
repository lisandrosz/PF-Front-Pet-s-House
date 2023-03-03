import React, { useState } from 'react';
import PetDash from './petDash';
import UserDash from './userDash';

const Dashboard: React.FC = () => {
  const rol = localStorage.getItem('rol');
  const [toShow, setToShow] = useState('pets');

  function changeHandler(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    setToShow(value);
  }

  if (rol === 'administrador') {
    return (
      <div>
        <select
          onChange={(e) => {
            changeHandler(e);
          }}
        >
          <option value="pets">Mascotas</option>
          <option value="users">Usuarios</option>
        </select>
        {toShow === 'pets' && <PetDash></PetDash>}
        {toShow === 'users' && <UserDash></UserDash>}
      </div>
    );
  } else {
    return (
      <div>
        Esta funcion solo esta disponible para el admin
        <hr />
      </div>
    );
  }
};

export default Dashboard;
