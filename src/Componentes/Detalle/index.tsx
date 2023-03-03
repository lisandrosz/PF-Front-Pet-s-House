import { useCustomSelector } from 'hooks/redux';
import React from 'react';
import './styleDetalle.css';

const Detalle: React.FC = () => {
  const pet = useCustomSelector((state) => state.pets.petDetalle);

  return (
    <div className="detalle">
      <h1 className="tituloCarta">{pet.Pet.name}</h1>
      <div className="contenedor_imagen">
        <img
          height={'100px'}
          width={'100px'}
          className="imagenDetalle"
          src={pet.Pet.image}
          alt="pet"
        />

        <p>{pet.Pet.size}</p>
        <p>{pet.Pet.animal}</p>
        <p>{pet.Pet.age}</p>
        {pet.User !== null && <p>Publicante : {pet.User.name}</p>}
      </div>
    </div>
  );
};

export default Detalle;
