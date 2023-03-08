import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './dashboardUser.css';
import PublicacionesUsuario from './PublicacionesUsuario';
import FavoritosUsuario from './FavoritosUsuario';
import { Button, List, ListItem } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { changeUserDetail } from 'helpers';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));
const UserDetail: React.FC = () => {
  const navigate = useNavigate();

  const id = localStorage.getItem('id');
  const image = localStorage.getItem('image');
  useEffect((): void => {
    const email = localStorage.getItem('email');
    if (email === null) {
      alert('Debes estar logueado con tu mail!');
      navigate('/');
    }
  }, [navigate]);
  const [name, setName] = useState('');
  useEffect((): void => {
    const nameLocalStorage = localStorage.getItem('name');
    setName(nameLocalStorage !== null ? nameLocalStorage : '');
  }, []);

  const [toShow, setToShow] = useState('publicaciones');
  const [inputNombreEstado, setInputNombre] = useState(false);
  const [nombre, setNombre] = useState('');
  function toShowHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    const button: HTMLButtonElement = e.currentTarget;
    setToShow(button.value);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNombre(e.target.value);
  }
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    changeUserDetail({
      idUser: id,
      name: nombre
    });
    setInputNombre(false);
    localStorage.setItem('name', nombre);
    setName(nombre);
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function cambiarNombre() {
    setInputNombre(!inputNombreEstado);
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
              <Button sx={{ color: '#a6b2ed' }} onClick={cambiarNombre}>
                Cambiar nombre
              </Button>
            </ListItem>
            {inputNombreEstado ? (
              <ListItem>
                <StyledInputBase
                  onChange={handleChange}
                  placeholder="Cambiar nombre"
                  inputProps={{ 'aria-label': 'search' }}
                />
                <Button onClick={handleSubmit}>+</Button>
              </ListItem>
            ) : null}
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
