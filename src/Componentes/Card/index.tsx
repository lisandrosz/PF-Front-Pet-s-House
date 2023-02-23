import React from 'react';
import './styleCard.css';
import { Link } from 'react-router-dom';
import { useCustomDispatch } from 'hooks/redux';
import { setPetDetalle } from 'redux/slices/mascotas';

interface Props {
  id: number;
  image: string;
  name: string;
  age: number;
  size: string;
  animal: string;
}

const Card: React.FC<Props> = ({ id, image, name, age, size, animal }) => {
  const dispatch = useCustomDispatch();

  function goToDetail(): void {
    dispatch(
      setPetDetalle({
        id: -1,
        name,
        image,
        age,
        description: 'descripcion de prueba',
        size,
        healthBook: false,
        animal,
        active: false,
        provincia: '',
        localidad: '',
        zona: ''
      })
    );
  }

  return (
    <Link
      onClick={goToDetail}
      to={'/detalle'}
      style={{ textDecoration: 'none' }}
    >
      <div className="card">
        <img src={image} alt="img not found" />
        <p>Nombre: {name} </p>
        <p>Edad: {age} </p>
        <p>Tamaño: {size} </p>
        <p>Especie: {animal} </p>
        <button>Añadir a Favoritos</button>
      </div>
    </Link>
  );
};

export default Card;
