import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { setBuscado } from 'redux/slices/mascotas';

const SearchBar: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useCustomDispatch();
  const allPets = useCustomSelector((state) => state.pets.allPets);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const resultado = allPets.filter((p) => p.name === name);
    dispatch(setBuscado(resultado));
    setName('');
  };
  return (
    <div>
      <input
        type="text"
        value={name}
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
