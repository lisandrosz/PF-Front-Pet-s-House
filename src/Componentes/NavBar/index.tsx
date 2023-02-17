import React from 'react';
import SearchBar from 'Componentes/SearchBar';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <>
      <div>
        NavBar
        <Link to=""></Link>
        <SearchBar />
      </div>
    </>
  );
};

export default NavBar;
