import React, { useState, useEffect } from 'react';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import './Home.css';
import { traerPets } from 'helpers';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [logged, setLogged] = useState(false);
  useEffect((): void => {
    traerPets();
  });
  useEffect((): void => {
    if (Boolean(isAuthenticated) && user != null) {
      const { name, email, image } = user;
      auth0Logica(name, image, email);
    }
  }, [isAuthenticated, user]);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const login = () => {
    Swal.fire({
      title: 'Tienes cuenta en PetsHouse?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Login',
      denyButtonText: `Ingresa con gmail`
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/loginAPI');
      } else if (result.isDenied) {
        loginWithRedirect();
      }
    });
  };
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
          setLogged(true);
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('name', res.data.name);
          localStorage.setItem('image', res.data.image);
          localStorage.setItem('rol', res.data.rol);
        });
    } catch (error) {
      console.log(error);
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const logoutApp = () => {
    setLogged(false);
    localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

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
      {logged ? (
        <button onClick={logoutApp}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Home;
