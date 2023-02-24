import React, { useEffect } from 'react';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import { getPetsApi} from 'redux/slices/mascotas/mascotasActions';

const Home: React.FC = () => {

  useEffect(() => {
   getPetsApi();
  }, [ ]);

  return (
    <div>
      Home
      <hr />
      <Filtrado />
      <hr />
      <CardsContainer />
    </div>
   );
};

export default Home;
