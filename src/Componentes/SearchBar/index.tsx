import Pets from '../../EJEMPLOBDD.json';
// import { useCustomDispatch } from 'hooks/redux';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [name, setName] = useState('');
  const [pets, setPets] = useState({
    id: '',
    name: '',
    image: '',
    age: '',
    size: '',
    animal: '',
    provincia: ''
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
    console.log(name);
  }

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): unknown => {
    e.preventDefault();
    // const resultado = Pets.filter((p) => p.name === name);
    // useCustomDispatch(name);
    const resultado = Pets.filter((p) => p.name === name);
    setPets({
      id: resultado[0].id,
      name: resultado[0].name,
      image: resultado[0].image,
      age: resultado[0].age,
      size: resultado[0].size,
      animal: resultado[0].animal,
      provincia: resultado[0].provincia
    });
    console.log(pets);
    // setName('');
    return pets;
  };
  return (
    <div>
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
      <span>
        {pets.name +
          ' ' +
          pets.id +
          ' ' +
          pets.age +
          ' ' +
          pets.image +
          ' ' +
          pets.animal}
      </span>
    </div>
  );
};

export default SearchBar;
