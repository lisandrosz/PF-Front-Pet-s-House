import { useCustomSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleDetalle.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { contactarse } from 'helpers';

const Detalle: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const pet = useCustomSelector((state) => state.pets.petDetalle);
  const navigate = useNavigate();

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

  return (
    <div className="detalle">
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
        <button onClick={handleClickOpen}>Contactarse</button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Esta seguro/a de que desea adoptar esta mascota?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Si es asi, le enviaremos un email con toda la informacion
              necesaria para que pueda contactarse con la persona a cargo de la
              misma.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={contacto}>Contactar</Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
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
        </Dialog>
      </div>
    </div>
  );
};

export default Detalle;
