import React from 'react';
import { useCustomSelector } from 'hooks/redux';
import NavBar from 'Componentes/NavBar';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state: any) => state);

  console.log(auth.acessToken);

  return (
    <div>
      Home
      <hr />
      <NavBar />
      <hr />
      <Filtrado />
      <hr />
      <CardsContainer />
    </div>
  );
};

export default Home;
