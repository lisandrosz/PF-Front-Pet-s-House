import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { traerPets } from 'helpers';
import { useCustomSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import '../dashboard.css';

const PetDash: React.FC = () => {
  useEffect((): void => {
    traerPets();
  }, []);
  const pets = useCustomSelector((state) => state.pets.allPets);

  return (
    <div className="showContainer">
      <TableContainer className="tableContainer">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={5}>
                <h2>Listado de Mascotas</h2>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Button color="primary" size="small" variant="contained">
                  Añadir Mascota
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Provincia</TableCell>
              <TableCell align="center">Usuario</TableCell>
              <TableCell align="center">Fecha de Publicaion</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet, index) => (
              <TableRow key={index}>
                <TableCell>{pet.name}</TableCell>
                <TableCell align="center">
                  {pet.active && <>Si</>}
                  {!pet.active && <>No</>}
                </TableCell>
                <TableCell align="center">{pet.province}</TableCell>
                <TableCell align="center">{pet.UserId}</TableCell>
                <TableCell align="center">{pet.createdAt}</TableCell>
                <TableCell>
                  <Button size="small" variant="outlined">
                    Editar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button size="small" color="error" variant="outlined">
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PetDash;
