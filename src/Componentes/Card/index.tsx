import React from 'react';
import './styleCard.css';
import { Link } from 'react-router-dom';
import { useCustomDispatch } from 'hooks/redux';
import { deleteFavorite } from 'redux/slices/mascotas';
import { setPetDetail, addPetFavorite } from 'helpers';

interface Props {
  id: number;
  image: string;
  name: string;
  age: number;
  size: string;
  animal: string;
  type: string;
}

const Card: React.FC<Props> = ({
  id,
  image,
  name,
  age,
  size,
  animal,
  type
}) => {
  const dispatch = useCustomDispatch();

  function goToDetail(): void {
    setPetDetail(id);
  }

  function addToFavorite(): void {
    addPetFavorite(id, 1);
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
      {type === 'fav' && (
        <button onClick={deleteFromFavorite}>Quitar de Favoritos</button>
      )}
      {type === 'nofav' && (
        <button onClick={addToFavorite}>Añadir a Favoritos</button>
      )}
    </div>
  );
};

export default Card;
