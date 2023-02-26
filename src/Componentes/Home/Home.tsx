import React, { useEffect } from 'react';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import './Home.css';
import { traerPets } from 'helpers';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
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
      <button
        onClick={() => {
          localStorage.clear();
          navigate('/home');
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
