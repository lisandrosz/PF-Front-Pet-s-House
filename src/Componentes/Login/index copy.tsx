import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Pet } from 'redux/slices/mascotas';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      await axios
        .get<Pet[]>(`http://localhost:3001/users/login/${email}/${password}`)
        .then((res: { data: any }) => {
          if (typeof res.data === 'string') {
            Swal.fire({
              title: '¡Error!',
              text: res.data,
              icon: 'error',
              confirmButtonText: 'Intentar de nuevo'
            });
          } else {
            const { id, name, image, rol } = res.data;
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('image', image);
            localStorage.setItem('rol', rol);
            navigate('/home');
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
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
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            required
            value={password}
          />
        </div>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        Home
      </button>
    </>
  );
};

export default Login;
