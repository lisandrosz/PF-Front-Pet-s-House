import React, { useEffect } from 'react';
import Filtrado from 'Componentes/Filtrado';
import Paginado from 'Componentes/Paginado';
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
      <div className="container">
        <div className="filtros">
          <hr />
          <Filtrado />
        </div>
        <div className="cartas">
          <hr />
          <Paginado />
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
