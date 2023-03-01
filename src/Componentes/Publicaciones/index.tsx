import Card from 'Componentes/Card';
import { getUserPublications } from 'helpers';
import { useCustomSelector } from 'hooks/redux';
import React, { useEffect } from 'react';

const Publicaciones: React.FC = () => {
  // const idUser = Number(localStorage.getItem('id'));
  const idUser = 1;
  useEffect((): void => {
    getUserPublications(idUser);
  });

  const publications = useCustomSelector((state) => state.pets.publications);

  if (idUser > 0) {
    return (
      <div>
        {publications.map((pet, index) => {
          return (
            <Card
              id={pet.id}
              key={index}
              image={pet.image}
              name={pet.name}
              age={pet.age}
              size={pet.size}
              animal={pet.animal}
              type={''}
            />
          );
        })}
        <p></p>
      </div>
    );
  } else {
    return (
      <div>
        Para acceder a tus Publicaciones tienes que loguearte primero!
        <p></p>
      </div>
    );
  }
};

export default Publicaciones;
