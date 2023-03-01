import React from 'react';
import { useCustomSelector } from 'hooks/redux';

const Dashboard: React.FC = () => {
  // const rol = localStorage.getItem('rol');
  const rol = 'administrador';
  const pets = useCustomSelector((state) => state.pets.allPets);

  if (rol === 'administrador') {
    return (
      <div>
        Estas Logueado y eres Admin
        {pets.map((pet, index) => {
          return (
            <div key={index}>
              <p>{pet.name}</p>
            </div>
          );
        })}
        <hr />
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
