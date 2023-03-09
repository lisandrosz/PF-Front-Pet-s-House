import React, { useEffect } from 'react';
import Filtrado from 'Componentes/Filtrado';
import Paginado from 'Componentes/Paginado';

import './Home.css';
import { traerPets } from 'helpers';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { getLogged } from '../../helpers';
import '../Footer/styleFooter.css';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();
  useEffect((): void => {
    traerPets();
    const id = localStorage.getItem('id');
    if (id !== null) getLogged(true);
  }, []);
  useEffect((): void => {
    if (Boolean(isAuthenticated) && user != null) {
      const { name, email, image } = user;
      auth0Logica(name, image, email);
    }
  }, [isAuthenticated, user]);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function auth0Logica(
    name: string | undefined,
    image: any,
    email: string | undefined
  ) {
    try {
      await axios
        .post(`/users/userAuth0`, { name, image, email })
        .then((res: { data: any }) => {
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('name', res.data.name);
          localStorage.setItem('image', res.data.image);
          localStorage.setItem('rol', res.data.rol);
          getLogged(true);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="filtros">
          <Filtrado />
        </div>
        <div className="cont">
          <Paginado />
        </div>
      </div>
      <div>
        <div className="footer-container">
          <p className="p8">Todos los derechos reservados © 2023 Pets House</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
