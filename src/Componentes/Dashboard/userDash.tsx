/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Button,
  Dialog,
  type SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import axios from 'axios';
import { getUsers } from 'helpers';
import { useCustomSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { type User } from 'redux/slices/users';

const UserDash: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect((): void => {
    getUsers();
  }, [open]);
  const users = useCustomSelector((state) => state.users.users);
  const [userInfo, setUserInfo] = useState<User>({
    id: 0,
    name: '',
    image: '',
    email: '',
    loggedIn: false,
    password: '',
    rol: ''
  });

  function onClose(): void {
    setOpen(false);
  }

  function editHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    const button: HTMLButtonElement = e.currentTarget;
    const currentUser: User = users.filter(
      (user) => user.id === Number(button.value)
    )[0];
    setUserInfo(currentUser);
    setOpen(true);
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const property = e.target.name;
    // eslint-disable-next-line no-useless-computed-key
    setUserInfo({ ...userInfo, [property]: e.target.value });
  }

  const selectHandler = (e: SelectChangeEvent): void => {
    let activo = false;
    const property = e.target.name;
    if (e.target.value === 'true') {
      activo = true;
      setUserInfo({ ...userInfo, [property]: activo });
    }
    if (e.target.value === 'administrador') {
      setUserInfo({ ...userInfo, [property]: 'administrador' });
    }
    if (e.target.value === 'usuario') {
      setUserInfo({ ...userInfo, [property]: 'usuario' });
    }
  };

  async function submitEdit(): Promise<any> {
    try {
      const toSend = { ...userInfo, ...{ idUser: userInfo.id } };
      await axios.put('/users', toSend);
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
          value={userInfo.name}
          label="Nombre"
        />
        <TextField
          fullWidth
          name="password"
          onChange={changeHandler}
          value={userInfo.password}
          label="Contraseña"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rol</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userInfo.rol}
            label="Rol"
            onChange={selectHandler}
            name="rol"
          >
            <MenuItem value="usuario">Usuario</MenuItem>
            <MenuItem value="administrador">Adminstrador</MenuItem>
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
              <TableCell align="center" colSpan={5}>
                <h2>Listado de Usuarios</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Rol</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">ID</TableCell>
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
                  <TableCell align="center">
                    <Button
                      size="small"
                      value={user.id}
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

export default UserDash;
