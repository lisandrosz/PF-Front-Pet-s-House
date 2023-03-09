import React, { useEffect } from 'react';
import { useCustomSelector } from 'hooks/redux';
import Card from 'Componentes/Card';
import { getAllFavorites } from 'helpers';
import { Typography } from '@mui/material';

const Favoritos: React.FC = () => {
  const idUser = Number(localStorage.getItem('id'));

  useEffect((): void => {
    getAllFavorites(idUser);
  });

  const favorites = useCustomSelector((state) => state.pets.favPets);

  if (idUser > 0) {
    return (
      <div className="contenedorCartas1">
        {favorites.length === 0 && (
          <Typography align="center" p={5} variant="h4" color="secondary">
            No tienes ningun favorito
          </Typography>
        )}
        {favorites.map((pet, index) => {
          return (
            <Card
              id={pet.id}
              key={index}
              image={pet.image}
              name={pet.name}
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
