import React, { useEffect } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import NavBar from 'Componentes/NavBar';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import { setAllPets } from 'redux/slices/mascotas';

const petsArray = [
  {
    id: 1,
    name: 'fido',
    image:
      'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
    age: 2,
    description: 'muy tranquilo fido. Es un perro muy grande pero re cariñoso',
    size: 'grande',
    animal: 'perro',
    healthBook: true,
    provincia: 'Buenos Aires',
    localidad: 'San Fernando',
    zona: '',
    active: true
  },
  {
    id: 2,
    name: 'bugs bunny',
    image:
      'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
    age: 11,
    description: 're divertido',
    size: 'chico',
    animal: 'conejo',
    healthBook: false,
    provincia: 'Cordoba',
    localidad: 'Villa Warcalde',
    zona: '',
    active: true
  },
  {
    id: 3,
    name: 'manuelita',
    image:
      'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
    age: 20,
    description: 'como come!! lenta la pobre pero se la aguanta',
    size: 'chico',
    animal: 'conejo',
    healthBook: false,
    provincia: 'Mendoza',
    localidad: 'La Cieneguita',
    zona: '',
    active: true
  },
  {
    id: 4,
    name: 'pepito',
    image:
      'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
    age: 8,
    description: 'el mejor amigo del solitario',
    size: 'chico',
    animal: 'loro',
    healthBook: false,
    provincia: 'San Luis',
    localidad: 'Cerro de la Cruz',
    zona: '',
    active: true
  },
  {
    id: 4,
    name: 'Zamba',
    image:
      'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
    age: 8,
    description: 'perra pitbul re buenita',
    size: 'mediano',
    animal: 'perro',
    healthBook: true,
    provincia: 'Buenos Aires',
    localidad: 'Vicente Lopez',
    zona: '',
    active: true
  }
];

const Home: React.FC = () => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(setAllPets(petsArray));
  });

  return (
    <div>
      Home
      <hr />
      <NavBar />
      <hr />
      <Filtrado />
      <hr />
      <CardsContainer />
    </div>
  );
};

export default Home;
