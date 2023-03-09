/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Card, Dialog, Rating, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { getReviews } from 'helpers';
import React, { useEffect, useState } from 'react';
import { type User } from 'redux/slices/users';
import './Reviews.css';

export interface revs {
  id: number;
  comentario: string;
  estrellas: number;
  UserId: number;
  User: User;
}

const Reviews: React.FC = () => {
  const [open, setOpen] = useState(false);
  const idUser = Number(localStorage.getItem('id'));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rev, setRev] = useState({
    comentario: '',
    estrellas: 0,
    idUser
  });

  const [revs, setRevs] = useState([
    {
      id: 0,
      comentario: '',
      estrellas: 0,
      UserId: 0,
      User: {
        name: ''
      }
    }
  ]);

  useEffect((): void => {
    getReviews().then((res) => {
      setRevs(res);
    });
  }, [rev]);

  function onClose(): void {
    setOpen(false);
  }

  function onOpen(): void {
    setOpen(true);
  }

  async function submitEdit(): Promise<any> {
    try {
      await axios.post('/reviews', rev);
      setRev({
        comentario: '',
        estrellas: 0,
        idUser
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const property = e.target.name;
    setRev({ ...rev, [property]: e.target.value });
  }

  console.log('revs: ', rev);

  const modalWindow = (
    <Box p={2}>
      <div>
        <Typography variant="h4">Deja tu Reseña</Typography>
        <Rating
          name="estrellas"
          value={rev.estrellas}
          size="large"
          onChange={(event, newValue) => {
            setRev({ ...rev, estrellas: Number(newValue) });
          }}
        ></Rating>
        <TextField
          multiline
          name="comentario"
          sx={{ width: 500 }}
          value={rev.comentario}
          onChange={changeHandler}
          label="Deja tu comentario"
          inputProps={{ maxLength: 255 }}
        ></TextField>
      </div>
      <Button color="error" onClick={onClose}>
        Cerrar Ventana
      </Button>
      <Button onClick={submitEdit}>Enviar</Button>
    </Box>
  );
  return (
    <div className="reviewContainer">
      <div className="headerContainer">
        <Typography variant="h3">Reseñas</Typography>
        <Button
          disabled={idUser < 1 && true}
          size="large"
          variant="contained"
          onClick={onOpen}
        >
          Añadir Review
        </Button>
      </div>
      <hr />
      <div className="reviewsCardContainer">
        {revs.map((rev, index) => {
          return (
            <Card key={index} className="reviewCard">
              <Typography fontWeight="bold" variant="h5">
                {rev.User.name}
              </Typography>
              <Typography>{rev.comentario}</Typography>
              <Rating readOnly value={rev.estrellas}></Rating>
            </Card>
          );
        })}
      </div>
      <Dialog open={open}>{modalWindow}</Dialog>
    </div>
  );
};

export default Reviews;
