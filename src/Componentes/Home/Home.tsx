import React, { useEffect } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import CardsContainer from 'Componentes/CardsContainer';
import Filtrado from 'Componentes/Filtrado';
import { setAllPets } from 'redux/slices/mascotas';
import './Home.css';

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
    province: 'Buenos Aires',
    location: 'San Fernando',
    active: true,
    sex: 'male',
    createdAt: '2023',
    UserId: 1
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
    province: 'Cordoba',
    location: 'Villa Warcalde',
    sex: 'male',
    createdAt: '2023',
    UserId: 1,
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
    province: 'Mendoza',
    location: 'La Cieneguita',
    sex: 'male',
    createdAt: '2023',
    UserId: 1,
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
    province: 'San Luis',
    location: 'Cerro de la Cruz',
    sex: 'male',
    createdAt: '2023',
    UserId: 1,
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
    province: 'Buenos Aires',
    location: 'Vicente Lopez',
    active: true,
    sex: 'male',
    createdAt: '2023',
    UserId: 1
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
      <div className="container">
        <div className="filtros">
          <hr />
          <Filtrado />
        </div>
        <div className="cartas">
          <hr />
          <CardsContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
