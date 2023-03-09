/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCustomSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleDetalle.css';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { contactarse } from 'helpers';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonAca = styled(Button)({
  background: '#fff',
  marginLeft: '30%',
  [`&.MuiButton-text`]: {
    color: '#efa02a'
  }
});

const Detalle: React.FC = (): any => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const pet = useCustomSelector((state) => state.pets.petDetalle);
  const navigate = useNavigate();
  const idUser = Number(localStorage.getItem('id'));

  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const handleClickOpen2 = (): void => {
    setOpen2(true);
  };
  const handleClose2 = (): void => {
    setOpen2(false);
  };

  const inicio = (): void => {
    setOpen2(false);
    navigate('/');
  };

  const contacto = (): void => {
    const id = Number(localStorage.getItem('id'));
    contactarse(id);
    handleClickOpen2();
    setOpen(false);
  };

  const modalWindow1 = (
    <Box>
      <DialogTitle id="alert-dialog-title">
        {'Esta seguro/a de que desea adoptar esta mascota?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Si es asi, le enviaremos un email con toda la informacion necesaria
          para que pueda contactarse con la persona a cargo de la misma.
        </DialogContentText>
        <DialogContentText variant="subtitle2">
          {'(Debe estar Logueado para continuar)'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disabled={idUser < 1 && true} onClick={contacto}>
          Contactar
        </Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Box>
  );

  const modalWindow2 = (
    <Box>
      <DialogTitle id="alert-dialog-title">
        {'Muchas gracias por iniciar el proceso de adopcion!'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          A la brevedad nos contactaremos contigo por email.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={inicio}>Volver al inicio</Button>
      </DialogActions>
    </Box>
  );
  return (
    <>
      {/* <div>CARD DE MATERIAL</div> */}
      <div className="detailContainer">
        <div className="textDetailContainer">
          <Typography variant="h2">
            <b>{pet.Pet.name}</b>
          </Typography>
          <Typography variant="h5">
            <b>Animal: </b>
            {pet.Pet.animal}
          </Typography>
          <Typography variant="h5">
            <b>Edad: </b> {pet.Pet.age} Años
          </Typography>
          <Typography variant="h5">
            <b>Tamaño: </b> {pet.Pet.size}
          </Typography>
          <Typography variant="h5">
            <b>Sexo: </b> {pet.Pet.sex}
          </Typography>
          <div id="descriptionText">
            <Typography variant="h5">
              <b>Descripción: </b>
            </Typography>
            <Typography variant="h5" fontSize={20}>
              {pet.Pet.description}
            </Typography>
          </div>
          <div id="descriptionText">
            <Typography variant="h5">
              <b>Provincia: </b> {pet.Pet.province}
            </Typography>
            <Typography variant="h5">
              <b>Localidad: </b> {pet.Pet.location}
            </Typography>
          </div>
          <Typography variant="h5">
            <b>Encargado Actual: </b> {pet.User.name}
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: '#e05f64' }}
            onClick={handleClickOpen}
          >
            Contactarse
          </Button>
        </div>
        <div className="divImagenDetail">
          <img id="detailImg" src={pet.Pet.image} alt="petDetailImage" />
        </div>
      </div>
      {/* <Card className="over" sx={{ maxWidth: 345 }}>
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
              {pet.Pet.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonAca size="small" color="primary" onClick={handleClickOpen}>
            Contactarse
          </ButtonAca>
        </CardActions> 
      </Card> */}
      {/*          Dialogs             */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {modalWindow1}
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {modalWindow2}
      </Dialog>
    </>
  );
};

export default Detalle;
