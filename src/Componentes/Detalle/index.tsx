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
        <p>Tamaño: {pet.Pet.size}</p>
        <p>Tipo de Animal: {pet.Pet.animal}</p>
        <p>Edad: {pet.Pet.age}</p>
        <p>Ubicacion: {pet.Pet.location}</p>
        {pet.User !== null && <h5>Publicante : {pet.User.name}</h5>}
        <button>Contactarse</button>
      </div>
    </div>
  );
};

export default Detalle;
