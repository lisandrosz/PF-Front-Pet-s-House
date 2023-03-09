import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './styleLogin.css';
import login from '../../Assets/image/imagen4.png';
import logo from '../../Assets/image/LOGO.jpg';
import { getLogged } from '../../helpers';
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

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // console.log(hash('12343'));
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    // const hashPassword = hash(password);
    try {
      await axios
        .post('/users/login', {
          email,
          password
        })
        .then((res: { data: any }) => {
          if (typeof res.data === 'string') {
            Swal.fire({
              title: '¡Error!',
              text: res.data,
              icon: 'error',
              confirmButtonText: 'Intentar de nuevo'
            });
          } else {
            getLogged(true);
            const { id, name, image, rol, email } = res.data;
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('image', image);
            localStorage.setItem('rol', rol);
            localStorage.setItem('email', email);
            Swal.fire({
              icon: 'success',
              title: 'Igresaste correctamente',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="content">
      <Container>
        <h2 className="titulo">Iniciar sesion</h2>
        <form
          className="formulariocontenedor"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Correo electronico"
              autoComplete="off"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              required
              value={email}
            />
            <br />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              required
              value={password}
            />
          </div>
          <ButtonTodos type="submit">Ingresar</ButtonTodos>
        </form>
        <p className="cuenta">
          <Link to="/registrar">Registrate</Link>
        </p>
        <p className="cuenta">
          <Link to="/cambiarContraseña">Cambiar contraseña</Link>
        </p>
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

export default Login;
