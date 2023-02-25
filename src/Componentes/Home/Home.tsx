import React, { useEffect } from 'react';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import './Home.css';
import { traerPets } from 'helpers';
const Home: React.FC = () => {
  useEffect((): void => {
    traerPets();
  });

  return (
    <div>
      Home
      <div className="container">
        <div className="filtros">
          <hr />
          <Filtrado />
        </div>
        <div className="cartas">
          <hr />
          <CardsContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
