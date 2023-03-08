import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './dashboardUser.css';
import PublicacionesUsuario from './PublicacionesUsuario';
import FavoritosUsuario from './FavoritosUsuario';
import { Button, List, ListItem } from '@mui/material';

const UserDetail: React.FC = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const image = localStorage.getItem('image');
  useEffect((): void => {
    const email = localStorage.getItem('email');
    if (email === null) {
      alert('Debes estar logueado con tu mail!');
      navigate('/');
    }
  }, [navigate]);

  const [toShow, setToShow] = useState('publicaciones');

  function toShowHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    const button: HTMLButtonElement = e.currentTarget;
    setToShow(button.value);
  }
  if (name !== null) {
    return (
      <div className="dashContainer">
        <div className="sideBar">
          <List>
            <ListItem>
              <div>
                <img
                  className="imagenUsuario"
                  src={image?.toString()}
                  alt="imagen de usuario"
                />
              </div>
              <div className="nameUsuario">
                <h1>{name}</h1>
              </div>
            </ListItem>
            <ListItem>
              <Button sx={{ color: '#a6b2ed' }} component={Link} to="/">
                Home
              </Button>
            </ListItem>
            <ListItem>
              <Button
                sx={{ color: '#a6b2ed' }}
                onClick={toShowHandler}
                value="favoritos"
              >
                Favoritos
              </Button>
            </ListItem>
            <ListItem>
              <Button
                sx={{ color: '#a6b2ed' }}
                onClick={toShowHandler}
                value="publicaciones"
              >
                Publicaciones
              </Button>
            </ListItem>
            <ListItem>
              <Button
                sx={{ color: '#a6b2ed' }}
                component={Link}
                to="/cambiarContraseña"
              >
                Cambiar nombre
              </Button>
            </ListItem>
            <ListItem>
              <Button
                sx={{ color: '#a6b2ed' }}
                component={Link}
                to="/cambiarContraseña"
              >
                Cambiar contraseña
              </Button>
            </ListItem>
            <ListItem>
              <Button sx={{ color: '#a6b2ed' }} component={Link} to="/">
                Eliminar cuenta
              </Button>
            </ListItem>
          </List>
        </div>
        <div className="linea1"></div>
        <div className="linea2"></div>

        <div className="showPanel">
          {toShow === 'publicaciones' && <PublicacionesUsuario />}
          {toShow === 'favoritos' && <FavoritosUsuario />}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Esta funcion solo esta disponible para el admin
        <hr />
      </div>
    );
  }
};

export default UserDetail;
