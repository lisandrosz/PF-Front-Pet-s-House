import {
  Box,
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
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                <h2>Listado de Usuarios</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Rol</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">ID</TableCell>
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserDash;
