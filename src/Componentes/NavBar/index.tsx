import React from 'react';
import SearchBar from 'Componentes/SearchBar';
import { Link } from 'react-router-dom';
import './styleNavbar.css';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <p>Home</p>
      </Link>
      <Link to={'/donacion'}>
        <p>Donacion</p>
      </Link>
      <Link to={'/favoritos'}>
        <p>Favoritos</p>
      </Link>
      <Link to={'/publicar'}>
        <p>Publicar Mascota</p>
      </Link>
      <Link to={'/misPublicaciones'}>
        <p>Mi Publicaciones</p>
      </Link>
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/donacion">Donacion</a>
        </li>
        <li>
          <a href="/favoritos">Favoritos</a>
        </li>
        <li>
          <a href="/publicar">Publicar Mascota</a>
        </li>
        <li>
          <a href="/misPublicaciones">Mis Publicaciones</a>
        </li>
      </ul> */}
      <SearchBar />
    </div>
  );
};

export default NavBar;
