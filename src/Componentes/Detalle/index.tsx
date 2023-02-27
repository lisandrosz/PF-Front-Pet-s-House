import { useCustomSelector } from 'hooks/redux';
import React from 'react';

const Detalle: React.FC = () => {
  const pet = useCustomSelector((state) => state.pets.petDetalle);

  return (
    <div>
      <h1>{pet.Pet.name}</h1>
      <img src={pet.Pet.image} alt="pet" />
      <p>{pet.Pet.size}</p>
      <p>{pet.Pet.animal}</p>
      <p>{pet.Pet.age}</p>
      {pet.User !== null && <p>Publicante : {pet.User.name}</p>}
    </div>
  );
};

export default Detalle;
