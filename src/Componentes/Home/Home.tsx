import React, { useEffect } from 'react';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import './Home.css';
import { traerPets } from 'helpers';
import Login from 'Componentes/Login/Login';
import Logout from 'Componentes/Login/Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
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
      <Login />
      <Logout />
    </div>
  );
};

export default Home;
