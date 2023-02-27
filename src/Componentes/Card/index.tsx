import React from 'react';
import './styleCard.css';
import { Link } from 'react-router-dom';
import { setPetDetail, addPetFavorite, deletePetFavorite } from 'helpers';

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
  function goToDetail(): void {
    setPetDetail(id);
  }

  function addToFavorite(): void {
    addPetFavorite(id, 1);
  }

  function deleteFromFavorite(): void {
    deletePetFavorite(id, 1);
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
      {type === 'fav' && (
        <button className="favorite-btn" onClick={deleteFromFavorite}>
          ♥️
        </button>
      )}
      {type === 'nofav' && (
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
