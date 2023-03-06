import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './styleLogin.css';
import login from '../../Assets/image/imagen4.png';
import logo from '../../Assets/image/LOGO.jpg';
import Swal from 'sweetalert2';
// import hash from '../Login/hashFunction';

const ButtonTodos = styled(Button)({
  background: '#fff',
  [`&.MuiButton-text`]: {
    color: '#b03537'
  }
});

const Container = styled('div')({
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  // height: '400px',
  width: '400px',
  alignContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  boxShadow: '0 5px 10px #dddddd',
  marginTop: '6%',
  marginLeft: '5%',
  marginBottom: '8%'
});

const CambioContraseña: React.FC = () => {
  const [passwordActual, setPasswordActual] = useState('');
  const [passwordNueva, setPasswordNueva] = useState('');
  const [repitaContraseña, setRepitaContraseña] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const email = localStorage.getItem('email');
    const idusuario = localStorage.getItem('id');
    // const hashPassword = hash(passwordActual);
    if (passwordNueva === repitaContraseña) {
      try {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        await axios.get(`/users/${email}`).then(async (res: { data: any }) => {
          if (res.data === passwordActual) {
            await axios.put('/users', {
              idUser: idusuario,
              password: passwordNueva
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Contraseña invalida',
              text: 'Tu contraseña no es la correcta'
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al repetir la contraseña'
      });
    }
  }

  return (
    <div className="content">
      <Container>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label className="contra" htmlFor="email">
              Contraseña actual
            </label>
            <input
              className="input"
              type="text"
              name="passwordActual"
              placeholder="password"
              autoComplete="off"
              onChange={({ target }) => {
                setPasswordActual(target.value);
              }}
              required
              value={passwordActual}
            />
            <br />
            <label className="contra" htmlFor="password">
              Nueva contraseña
            </label>
            <input
              className="input"
              type="password"
              name="passwordNueva"
              onChange={({ target }) => {
                setPasswordNueva(target.value);
              }}
              required
              value={passwordNueva}
            />
            <br />
            <label className="contra" htmlFor="password">
              Repita contraseña
            </label>
            <input
              className="input"
              type="password"
              name="repitaContraseña"
              onChange={({ target }) => {
                setRepitaContraseña(target.value);
              }}
              required
              value={repitaContraseña}
            />
          </div>
          <div className="botoncito">
            <ButtonTodos type="submit">Cambiar contraseña</ButtonTodos>
          </div>
        </form>
        <ButtonTodos
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </ButtonTodos>
      </Container>
      <img className="logo" src={logo} alt="logo"></img>
      <img className="img" src={login} alt="imagenn"></img>
    </div>
  );
};

export default CambioContraseña;
