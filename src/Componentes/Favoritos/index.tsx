import React, { useState } from 'react';
import { useCustomSelector } from 'hooks/redux';
import Card from 'Componentes/Card';

const Favoritos: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const favorites = useCustomSelector((state) => state.pets.favPets);

  function logIn(): void {
    setIsLogin(true);
  }

  function logOut(): void {
    setIsLogin(false);
  }

  if (isLogin) {
    return (
      <div>
        Estas Logueado
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
              isFav={true}
            />
          );
        })}
        <button onClick={logOut}> Desloguearse </button>
      </div>
    );
  } else {
    return (
      <div>
        Para acceder a favortios tienes que loguearte primero!
        <hr />
        <button onClick={logIn}> Loguearse </button>
      </div>
    );
  }
};

export default Favoritos;
