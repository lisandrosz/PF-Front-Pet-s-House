import { useCustomSelector } from 'hooks/redux';
import React from 'react';

const Detalle: React.FC = () => {
  const pet = useCustomSelector((state) => state.pets.petDetalle);

  return (
    <div>
      <img
        src="https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg"
        alt="pet"
      />
      <h1>{pet.name}</h1>
      <p>{pet.size}</p>
      <p>tiempo de publicacion</p>
      <p>{pet.animal}</p>
      <p>{pet.age}</p>
      <p>{pet.description}</p>
    </div>
  );
};

export default Detalle;
