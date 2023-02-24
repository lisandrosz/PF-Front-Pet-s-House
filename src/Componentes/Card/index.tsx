import React from 'react';
import './styleCard.css';
import { Link } from 'react-router-dom';
import { useCustomDispatch } from 'hooks/redux';
import {
  setPetDetalle,
  setFavortie,
  deleteFavorite
} from 'redux/slices/mascotas';

interface Props {
  id: number;
  image: string;
  name: string;
  age: number;
  size: string;
  animal: string;
  isFav: boolean;
}

const Card: React.FC<Props> = ({
  id,
  image,
  name,
  age,
  size,
  animal,
  isFav
}) => {
  const dispatch = useCustomDispatch();

  const currentPet = {
    id,
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
  };

  function goToDetail(): void {
    dispatch(setPetDetalle(currentPet));
  }

  function addToFavorite(): void {
    dispatch(setFavortie(currentPet));
  }

  function deleteFromFavorite(): void {
    dispatch(deleteFavorite(id));
  }

  return (
    <div className="card">
      <Link
        onClick={goToDetail}
        to={'/detalle'}
        style={{ textDecoration: 'none' }}
      >
        <img src={image} alt="img not found" />
      </Link>
      <p>Nombre: {name} </p>
      <p>Edad: {age} </p>
      <p>Tamaño: {size} </p>
      <p>Especie: {animal} </p>
      {isFav && (
        <button onClick={deleteFromFavorite}>Quitar de Favoritos</button>
      )}
      {!isFav && <button onClick={addToFavorite}>Añadir a Favoritos</button>}
    </div>
  );
};

export default Card;
