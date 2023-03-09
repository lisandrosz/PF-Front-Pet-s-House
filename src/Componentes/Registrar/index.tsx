import React, { useState } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import { useNavigate } from 'react-router-dom';
import { crearUser } from 'helpers';
import './styleRegistrar.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import validateUser from '../Registrar/validacionUsuario';
import { getLogged } from '../../helpers';
import registrar from '../../Assets/image/imagen2.png';
// import hash from '../Login/hashFunction';

const ButtonTodos = styled(Button)({
  background: '#fff',
  // marginLeft: '100px',
  [`&.MuiButton-text`]: {
    color: '#b03537'
  }
});

const CreateButton = styled(Button)({
  background: '#fff',
  marginRight: '20px',
  [`&.MuiButton-text`]: {
    color: '#b03537'
  }
});

const Registrar: React.FC = () => {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOnBlur = () => {
    const objError = validateUser(user);
    setError(objError);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      user.name.length === 0 ||
      user.email.length === 0 ||
      user.password.length === 0 ||
      user.password2.length === 0
    ) {
      <p className="danger">Falta completar campos</p>;
    } else {
      getLogged(true);
      dispatch(crearUser(user));
      navigate('/');
    }
  };

  return (
    <div>
      <div className="form">
        <div>
          <h1 className="crea-usuario">Crea tu usuario</h1>
          <h3 className="datos">Por favor, completa tus datos</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="contra" htmlFor="name">
              Nombre completo
            </label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              value={user.name}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <p
              style={{ visibility: error.name !== null ? 'visible' : 'hidden' }}
              className="danger"
            >
              {error.name}
            </p>
          </div>
          {/* <div>
          <SelectImage />
        </div> */}
          <div>
            <label className="contra" htmlFor="email">
              Correo electronico
            </label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="tucorreo@mail.com"
              value={user.email}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <p
              style={{
                visibility: error.email !== null ? 'visible' : 'hidden'
              }}
              className="danger"
            >
              {error.email}
            </p>
          </div>
          <div>
            <label className="contra" htmlFor="password">
              Contraseña
            </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="contraseña"
              value={user.password}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <p
              style={{
                visibility: error.password !== null ? 'visible' : 'hidden'
              }}
              className="danger"
            >
              {error.password}
            </p>
          </div>
          <div>
            <label className="contra" htmlFor="password">
              Contraseña
            </label>
            <input
              className="input"
              type="password"
              name="password2"
              placeholder="Repita contraseña"
              value={user.password2}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <p
              style={{
                visibility: error.password2 !== null ? 'visible' : 'hidden'
              }}
              className="danger"
            >
              {error.password2}
            </p>
          </div>
          <div className="botoncito">
            <CreateButton type="submit">
              <input
                className="botonSubmit"
                type="submit"
                value="Create"
                disabled={Object.values(error).join('').length !== 0}
              />
            </CreateButton>
            <ButtonTodos
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </ButtonTodos>
          </div>
        </form>
        <img className="registrar" src={registrar} alt="reg"></img>
      </div>
    </div>
  );
};

export default Registrar;

export interface formUser {
  name: string;
  email: string;
  password: string;
  password2: string;
}
