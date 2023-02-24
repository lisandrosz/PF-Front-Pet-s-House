import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login: React.FC = () => {
  const users = [
    {
      email: 'juan@mail.com',
      password: 'juan1234'
    },
    { email: 'camila@mail.com', password: 'camila1234' },
    {
      email: 'jose@mail.com',
      password: 'jose1234'
    },
    {
      email: 'mara@mail.com',
      password: 'mara1234'
    },
    {
      email: 'pepe@mail.com',
      password: 'pepe1234'
    },
    {
      email: 'luz@mail.com',
      password: 'luz1234'
    }
  ];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const login = users.filter(
      (u) => u.email === email && u.password === password
    );
    setPassword('');
    login.length > 0
      ? navigate('/home')
      : Swal.fire({
          title: '¡Error!',
          text: 'Datos incorrectos',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
  }

  return (
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
          onChange={(e) => {
            handleChangeEmail(e);
          }}
          required
          value={email}
        />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            handleChangePassword(e);
          }}
          required
          value={password}
        />
      </div>
      <div>
        <button type="submit">Ingresar</button>
      </div>
    </form>
  );
};

export default Login;
