import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type Pet } from 'redux/slices/mascotas';
import Swal from 'sweetalert2';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './styleLogin.css';
import login from '../../Assets/image/imagen4.png';
import logo from '../../Assets/image/LOGO.jpg';

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

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      await axios
        .get<Pet[]>(`/users/login/${email}/${password}`)
        .then((res: { data: any }) => {
          if (typeof res.data === 'string') {
            Swal.fire({
              title: '¡Error!',
              text: res.data,
              icon: 'error',
              confirmButtonText: 'Intentar de nuevo'
            });
          } else {
            const { id, name, image, rol, email } = res.data;
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('image', image);
            localStorage.setItem('rol', rol);
            localStorage.setItem('email', email);
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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label className="contra" htmlFor="email">
              Correo electronico
            </label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="yourmail@email.com"
              autoComplete="off"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              required
              value={email}
            />
            <br />
            <label className="contra" htmlFor="password">
              Contraseña
            </label>
            <input
              className="input"
              type="password"
              name="password"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              required
              value={password}
            />
          </div>
          <div className="botoncito">
            <ButtonTodos type="submit">Ingresar</ButtonTodos>
          </div>
        </form>
        <p className="cuenta">
          ¿No tienes una cuenta? <Link to="/registrar">Registrate</Link>
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
