import React from 'react';
import SearchBar from 'Componentes/SearchBar';
import { Link } from 'react-router-dom';
import { setHome } from 'redux/slices/mascotas';
import { useCustomDispatch } from 'hooks/redux';

const NavBar: React.FC = () => {
  const dispatch = useCustomDispatch();
  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    dispatch(setHome());
  };

  return (
    <div>
      <Link
        to={'/home'}
        style={{ textDecoration: 'none' }}
        onClick={handleSubmit}
      >
        <p>Home</p>
      </Link>
      <Link to={'/donacion'} style={{ textDecoration: 'none' }}>
        <p>Donacion</p>
      </Link>
      <Link to={'/favoritos'} style={{ textDecoration: 'none' }}>
        <p>Favoritos</p>
      </Link>
      <Link to={'/publicar'} style={{ textDecoration: 'none' }}>
        <p>Publicar Mascota</p>
      </Link>
      <Link to={'/misPublicaciones'} style={{ textDecoration: 'none' }}>
        <p>Mi Publicaciones</p>
      </Link>

      <SearchBar />
    </div>
  );
};

export default NavBar;
