import React from 'react';
import './styleCard.css';
import { Link } from 'react-router-dom';
import { setPetDetail, addPetFavorite, deletePetFavorite } from 'helpers';
import { useCustomSelector } from 'hooks/redux';

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
  const idUser = Number(localStorage.getItem('id'));
  const petsFavoritos = useCustomSelector((state) => state.pets.favPets);
  console.log(petsFavoritos);
  function goToDetail(): void {
    setPetDetail(id);
  }

  function addToFavorite(): void {
    addPetFavorite(id, idUser);
  }

  function deleteFromFavorite(): void {
    deletePetFavorite(id, idUser);
  }

  return (
    <div className="card">
      {/* Imagen */}
      <img src={image} alt="img not found" />
      {/* Boton de favoritos */}
      {type === 'fav' && (
        <button className="favorite-btn-delet" onClick={deleteFromFavorite}>
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
        <Link onClick={goToDetail} to={'/detalle'}>
          <button className="btn">ADOPTAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
