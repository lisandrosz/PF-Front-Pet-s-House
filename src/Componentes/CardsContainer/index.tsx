import React from 'react';
import Card from 'Componentes/Card';
import './styleContainer.css';
import { useCustomSelector } from 'hooks/redux';

const CardsContainer: React.FC = () => {
  const pets = useCustomSelector((state) => state.pets.pets);

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
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
