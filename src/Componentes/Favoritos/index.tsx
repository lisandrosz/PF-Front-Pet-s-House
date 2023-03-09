import React, { useEffect } from 'react';
import { useCustomSelector } from 'hooks/redux';
import Card from 'Componentes/Card';
import { getAllFavorites } from 'helpers';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Favoritos: React.FC = () => {
  const idUser = Number(localStorage.getItem('id'));
  const navigate = useNavigate();

  const favorites = useCustomSelector((state) => state.pets.favPets);

  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
    getAllFavorites(idUser);
  }, [idUser, navigate, favorites]);

  return (
    <div className="containerCards">
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
};

export default Favoritos;
