import React from 'react';
import Card from 'Componentes/Card';
import './styleContainer.css';
import type { Pet } from 'redux/slices/mascotas';

interface Props {
  pets: Pet[];
}

const CardsContainer: React.FC<Props> = ({ pets }) => {
  return (
    <div className="cardsContainer">
      {pets.map((pet, index) => {
        return (
          <Card
            id={pet.id}
            key={index}
            image={pet.image}
            name={pet.name}
            age={pet.age}
            size={pet.size}
            animal={pet.animal}
            type={'nofav'}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
