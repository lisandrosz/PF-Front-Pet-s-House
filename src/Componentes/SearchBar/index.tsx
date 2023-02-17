// import React from 'react';
// import { useCustomDispatch } from 'hooks/redux';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [name, setName] = useState('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(name);
    setName(e.target.value);
  }

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    // useCustomDispatch(name);
    setName('');
  };
  return (
    <div>
      SearchBar
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
