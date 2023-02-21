import React from 'react';
import SearchBar from 'Componentes/SearchBar';
import { Link } from 'react-router-dom';
import { setHome } from 'redux/slices/mascotas';
import { useCustomDispatch } from 'hooks/redux';
import './styleNavbar.css';

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
        <button>Home</button>
      </Link>
      <Link to={'/donacion'} style={{ textDecoration: 'none' }}>
        <button>Donacion</button>
      </Link>
      <Link to={'/favoritos'} style={{ textDecoration: 'none' }}>
        <button>Favoritos</button>
      </Link>
      <Link to={'/publicar'} style={{ textDecoration: 'none' }}>
        <button>Publicar Mascota</button>
      </Link>
      <Link to={'/misPublicaciones'} style={{ textDecoration: 'none' }}>
        <button>Mis Publicaciones</button>
      </Link>

      <SearchBar />
    </div>
  );
};

export default NavBar;
