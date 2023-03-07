import { useCustomSelector } from 'hooks/redux';
import React from 'react';
import './styleDetalle.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonAca = styled(Button)({
  background: '#fff',
  marginLeft: '30%',
  [`&.MuiButton-text`]: {
    color: '#efa02a'
  }
});

const Detalle: React.FC = (): any => {
  const pet = useCustomSelector((state) => state.pets.petDetalle);

  // {
  /* <div className="detalle">
<h1 className="tituloCarta">{pet.Pet.name}</h1>
<div className="contenedor_imagen">
<img
height={'100px'}
width={'100px'}
className="imagenDetalle"
src={pet.Pet.image}
alt="pet"
/>
<p>Tamaño: {pet.Pet.size}</p>
<p>Tipo de Animal: {pet.Pet.animal}</p>
<p>Edad: {pet.Pet.age}</p>
<p>Ubicacion: {pet.Pet.location}</p>
{pet.User !== null && <h5>Publicante : {pet.User.name}</h5>}
<button>Contactarse</button>
</div>
</div> */
  // }

  // {
  /* <div>Card siguiendo estilo de la Home:</div>

      <div className="card">
        {/* Imagen */
  // }
  // <img src={pet.Pet.image} alt="img not found" />
  // {
  /* Boton de favoritos */
  // }
  // <button className="favorite-btn">♥️</button>
  // <div className="card-text">
  //   <h4>{pet.Pet.name}</h4>
  //   <ul>
  //     <li>
  //       <b>Edad: </b>
  //       <p>{pet.Pet.age}</p>
  //     </li>
  //     <li>
  //       <b>Tamaño: </b>
  //       <p>{pet.Pet.size}</p>
  //     </li>
  //     <li>
  //       <b>Publicante:</b>
  //       <p>{pet.User.name}</p>
  //     </li>
  //   </ul>
  //   <button className="btn">Contactarse</button>
  // </div>
  // </div> */}
  return (
    <>
      {/* <div>CARD DE MATERIAL</div> */}
      <Card className="over" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={pet.Pet.image}
            alt="cualquier imagen"
          />
          <CardContent>
            <Typography
              className="colorcete"
              gutterBottom
              variant="h6"
              component="div"
            >
              Nombre: {pet.Pet.name}
            </Typography>
            <Typography
              className="colorcete"
              gutterBottom
              variant="h6"
              component="div"
            >
              Tamaño: {pet.Pet.size}
            </Typography>
            <Typography
              className="colorcete"
              gutterBottom
              variant="h6"
              component="div"
            >
              Tipo de animal: {pet.Pet.animal}
            </Typography>
            <Typography
              className="colorcete"
              gutterBottom
              variant="h6"
              component="div"
            >
              Localización: {pet.Pet.location}
            </Typography>
            <Typography
              className="otro-colorcete"
              variant="body2"
              color="text.secondary"
            >
              Mi nombre es buggs bunny, soy un amor, me encanta dormir en las
              sillas y comer lechuguita.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonAca size="small" color="primary">
            Contactarse
          </ButtonAca>
        </CardActions>
      </Card>
    </>
  );
};

export default Detalle;
