import React from 'react';
import SearchBar from 'Componentes/SearchBar';
import { Link } from 'react-router-dom';
import { setHome } from 'redux/slices/mascotas';
import { useCustomDispatch } from 'hooks/redux';
import Button from '@mui/material/Button';
import './styleNavbar.css';
// import { Home } from '@mui/icons-material';

const NavBar: React.FC = () => {
  const dispatch = useCustomDispatch();
  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    dispatch(setHome());
  };

  return (
    <div className="navbar">
      <Link
        to={'/home'}
        style={{ textDecoration: 'none' }}
        onClick={handleSubmit}
      >
        <Button>Home</Button>
      </Link>
      <Link to={'/donacion'} style={{ textDecoration: 'none' }}>
        <Button>Donacion</Button>
      </Link>
      <Link to={'/favoritos'} style={{ textDecoration: 'none' }}>
        <Button>Favoritos</Button>
      </Link>
      <Link to={'/publicar'} style={{ textDecoration: 'none' }}>
        <Button>Publicar Mascota</Button>
      </Link>
      <Link to={'/misPublicaciones'} style={{ textDecoration: 'none' }}>
        <Button>Mis Publicaciones</Button>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
