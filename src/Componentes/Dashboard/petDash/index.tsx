import { traerPets } from 'helpers';
import { useCustomSelector } from 'hooks/redux';
import React, { useEffect } from 'react';

const PetDash: React.FC = () => {
  useEffect((): void => {
    traerPets();
  }, []);
  const pets = useCustomSelector((state) => state.pets.allPets);
  return (
    <div>
      <h1>Listado de Mascotas Publicadas</h1>
      {pets.map((pet, index) => {
        return (
          <div key={index}>
            <h3>{pet.name}</h3>
            <p>
              Activo: {pet.active && <>Si</>}
              {!pet.active && <>No</>}
            </p>
            <p>Provincia: {pet.province}</p>
            <p>Usuario: {pet.UserId}</p>
            <p>Fecha de Publicacion: {pet.createdAt}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PetDash;
