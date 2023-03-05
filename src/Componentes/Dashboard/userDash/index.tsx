import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { getUsers } from 'helpers';
import { useCustomSelector } from 'hooks/redux';
import React, { useEffect } from 'react';

const UserDash: React.FC = () => {
  useEffect((): void => {
    getUsers();
  }, []);
  const users = useCustomSelector((state) => state.users.users);
  return (
    <div>
      <TableContainer className="tableContainer">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={4}>
                <h2>Listado de Usuarios</h2>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Button color="primary" size="small" variant="contained">
                  Añadir Usuario
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Rol</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell align="center">{user.rol}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.id}</TableCell>
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserDash;
