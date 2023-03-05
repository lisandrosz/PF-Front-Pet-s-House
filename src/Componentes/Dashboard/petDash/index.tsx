import {
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
              <TableCell align="center" colSpan={5}>
                <h2>Listado de Mascotas</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Provincia</TableCell>
              <TableCell align="center">Usuario</TableCell>
              <TableCell align="center">Fecha de Publicaion</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PetDash;
