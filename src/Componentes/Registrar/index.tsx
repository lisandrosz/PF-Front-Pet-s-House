import React, { useState } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import { useNavigate } from 'react-router-dom';
import { crearUser } from 'helpers';
import SelectImage from './Cloudinary/selectImageUser';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import validateUser from '../Registrar/validacionUsuario';
// import hash from '../Login/hashFunction';

const ButtonTodos = styled(Button)({
  background: '#fff',
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
    password2: '',
    image: ''
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    image: ''
  });

  // const imagen = useCustomSelector((s) => s.users.userImage);

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
      user.password2.length === 0 ||
      user.image.length === 0
    ) {
      <p className="danger">Falta completar campos</p>;
    } else {
      dispatch(crearUser(user));
    }
  };

  return (
    <div>
      <h1>Crea tu usuario</h1>
      <h3>Por favor, completa tus datos</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo</label>
          <input
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
        <div>
          <SelectImage />
        </div>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
            type="text"
            name="email"
            placeholder="tucorreo@mail.com"
            value={user.email}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          <p
            style={{ visibility: error.email !== null ? 'visible' : 'hidden' }}
            className="danger"
          >
            {error.email}
          </p>
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
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
          <label htmlFor="password">Contraseña</label>
          <input
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
        <input
          className="botonSubmit"
          type="submit"
          value="Create"
          disabled={Object.keys(error).length !== 0}
        />
      </form>
      <ButtonTodos
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </ButtonTodos>
    </div>
  );
};

export default Registrar;

export interface formUser {
  name: string;
  image: string;
  email: string;
  password: string;
}
