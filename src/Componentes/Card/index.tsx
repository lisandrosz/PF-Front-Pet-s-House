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
    province: '',
    location: '',
    sex: '',
    createdAt: '',
    UserId: 0
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
        // style={{ textDecoration: 'none' }}
      >
        {/* Imagen */}
        <img src={image} alt="img not found" />
      </Link>
      {/* Boton de favoritos */}
      {isFav && (
        <button className="favorite-btn" onClick={deleteFromFavorite}>
          ♥️
        </button>
      )}
      {!isFav && (
        <button className="favorite-btn" onClick={addToFavorite}>
          ♡
        </button>
      )}
      <div className="card-text">
        <h4>{name}</h4>
        <ul>
          <li>
            <b>Edad: </b>
            <p>{age}</p>
          </li>
          <li>
            <b>Tamaño: </b>
            <p>{size}</p>
          </li>
          <li>
            <b>Especie:</b>
            <p>{animal}</p>
          </li>
        </ul>
        <button className="btn">ADOPTAR</button>
      </div>
    </div>
  );
};

export default Card;
