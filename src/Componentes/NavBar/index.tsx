import React from 'react';
import SearchBar from 'Componentes/SearchBar';

const NavBar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/home">Home</a>
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
      </ul>
      <SearchBar />
    </div>
  );
};

export default NavBar;
