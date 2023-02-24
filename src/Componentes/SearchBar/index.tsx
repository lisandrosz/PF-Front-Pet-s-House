import React, { useState } from 'react';
import { searchPet } from 'helpers';

const SearchBar: React.FC = () => {
  const [name, setName] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    if (name.length > 0) {
      searchPet(name);
      setName('');
    }
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Buscar..."
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
