import React, { useEffect } from 'react';
import { useCustomSelector } from 'hooks/redux';
import Card from 'Componentes/Card';
import { getAllFavorites } from 'helpers';

const Favoritos: React.FC = () => {
  // const idUser = Number(localStorage.getItem('id'));
  const idUser = 1;
  useEffect((): void => {
    getAllFavorites(idUser);
  });

  const favorites = useCustomSelector((state) => state.pets.favPets);

  if (idUser > 0) {
    return (
      <div>
        {favorites.map((pet, index) => {
          return (
            <Card
              id={pet.id}
              key={index}
              image={pet.image}
              name={`${pet.id}`}
              age={pet.age}
              size={pet.size}
              animal={pet.animal}
              type={'fav'}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p>Para acceder a favortios tienes que loguearte primero!</p>
      </div>
    );
  }
};

export default Favoritos;
