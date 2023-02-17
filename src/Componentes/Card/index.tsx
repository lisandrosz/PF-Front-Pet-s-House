import React from 'react';
import './styleCard.css';

interface Props {
  image: string;
  name: string;
  age: number;
  size: string;
  animal: string;
}

const Card: React.FC<Props> = ({ image, name, age, size, animal }) => {
  return (
    <div className="card">
      <img src={image} alt="img not found" />
      <p>Nombre: {name} </p>
      <p>Edad: {age} </p>
      <p>Tamaño: {size} </p>
      <p>Especie: {animal} </p>
      <button>Añadir a Favoritos</button>
    </div>
  );
};

export default Card;
