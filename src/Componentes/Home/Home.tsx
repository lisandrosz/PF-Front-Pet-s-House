import React from 'react';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
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
