import React, { useEffect } from 'react';
import Card from 'Componentes/Card';
import './styleContainer.css';
import type { Pet } from 'redux/slices/mascotas';
import { useCustomSelector } from 'hooks/redux';
import { getAllFavorites } from 'helpers';

interface Props {
  pets: Pet[];
}

const CardsContainer: React.FC<Props> = ({ pets }) => {
  const idUser = Number(localStorage.getItem('id'));

  useEffect((): void => {
    getAllFavorites(idUser);
  }, []);

  const favorites = useCustomSelector((state) =>
    state.pets.favPets.map((fav) => fav.id)
  );

  return (
    <div className="cardsContainer">
      {pets.map((pet, index) => {
        let type = 'nofav';
        if (favorites.includes(pet.id)) type = 'fav';
        return (
          <Card
            id={pet.id}
            key={index}
            image={pet.image}
            name={pet.name}
            age={pet.age}
            size={pet.size}
            animal={pet.animal}
            type={type}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
