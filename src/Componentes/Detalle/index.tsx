import { useCustomSelector } from 'hooks/redux';
import React from 'react';

const Detalle: React.FC = () => {
  const pet = useCustomSelector((state) => state.pets.petDetalle);

  return (
    <div>
      <h1>Nombre: {pet.Pet.name}</h1>
      <img src={pet.Pet.image} alt="pet" />
      <p>Tamaño: {pet.Pet.size}</p>
      <p>Tipo de Animal: {pet.Pet.animal}</p>
      <p>Edad: {pet.Pet.age}</p>
      <p>Ubicacion: {pet.Pet.location}</p>
      {pet.User !== null && <h5>Publicante : {pet.User.name}</h5>}
      <button>Contactarse</button>
    </div>
  );
};

export default Detalle;
