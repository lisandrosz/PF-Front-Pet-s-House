/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  Dialog,
  Select,
  MenuItem,
  type SelectChangeEvent,
  FormControl,
  InputLabel
} from '@mui/material';
import axios from 'axios';
import { traerPets } from 'helpers';
import { useCustomSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Pet } from 'redux/slices/mascotas';
import './dashboard.css';

const PetDash: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect((): void => {
    traerPets();
  }, [open]);
  const pets = useCustomSelector((state) => state.pets.allPets);
  const [petInfo, setPetInfo] = useState<Pet>({
    id: -1,
    name: '',
    image: '',
    age: 0,
    description: '',
    size: '',
    healthBook: false,
    animal: '',
    active: false,
    province: '',
    location: '',
    sex: '',
    createdAt: '',
    UserId: 0
  });

  function editHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    const button: HTMLButtonElement = e.currentTarget;
    const currentPet: Pet = pets.filter(
      (pet) => pet.id === Number(button.value)
    )[0];
    setPetInfo(currentPet);
    setOpen(true);
  }

  function onClose(): void {
    setOpen(false);
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const property = e.target.name;
    // eslint-disable-next-line no-useless-computed-key
    setPetInfo({ ...petInfo, [property]: e.target.value });
  }

  const selectHandler = (e: SelectChangeEvent): void => {
    let activo = false;
    const property = e.target.name;
    if (e.target.value === 'true') activo = true;
    setPetInfo({ ...petInfo, [property]: activo });
  };

  async function submitEdit(): Promise<any> {
    try {
      const toSend = { ...petInfo, ...{ idPet: petInfo.id } };
      await axios.put('/pets', toSend);
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  const modalWindow = (
    <Box p={2}>
      <div className="editContainer">
        <TextField
          fullWidth
          name="name"
          onChange={changeHandler}
          value={petInfo.name}
          label="Nombre"
        />
        <TextField
          fullWidth
          name="age"
          type="number"
          onChange={changeHandler}
          value={petInfo.age}
          label="Edad"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Activo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={String(petInfo.active)}
            label="Estado"
            onChange={selectHandler}
            name="active"
          >
            <MenuItem value="true">Si</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Libreta Sanitaria
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={String(petInfo.healthBook)}
            label="Libreta Sanitaria"
            onChange={selectHandler}
            name="healthBook"
          >
            <MenuItem value="true">Disponible</MenuItem>
            <MenuItem value="false">No Disponible</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button color="error" onClick={onClose}>
        Cerrar Ventana
      </Button>
      <Button onClick={submitEdit}>Guardar</Button>
    </Box>
  );

  return (
    <div className="showContainer">
      <TableContainer className="tableContainer">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
                <h2>Listado de Mascotas</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Activo</TableCell>
              <TableCell align="center">Provincia</TableCell>
              <TableCell align="center">Usuario</TableCell>
              <TableCell align="center">Fecha de Publicaion</TableCell>
              <TableCell align="center">
                <Link to={'/publicar'}>
                  <Button color="primary" size="small" variant="contained">
                    A??adir Mascota
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{pet.name}</TableCell>
                  <TableCell align="center">
                    {pet.active && <>Si</>}
                    {!pet.active && <>No</>}
                  </TableCell>
                  <TableCell align="center">{pet.province}</TableCell>
                  <TableCell align="center">{pet.UserId}</TableCell>
                  <TableCell align="center">{pet.createdAt}</TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      value={pet.id}
                      variant="outlined"
                      onClick={editHandler}
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open}>{modalWindow}</Dialog>
    </div>
  );
};

export default PetDash;
