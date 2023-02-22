import React, { useState } from 'react';

const Registrar: React.FC = () => {
    const interface User = {
kkk,
    }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const [errors, setErrors] = useState({
    empty: true
  });
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
    console.log(name);
  }
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
    console.log(email);
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
    console.log(password);
  }
  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>): void {
    setImage(e.target.value);
    console.log(image);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setRegistro(registro);
  }
  return (
    <div>
      <h1>Registrarse</h1>
      <h3>Por favor, completa tus datos</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="fullname">Nombre completo</label>
          <input
            name="fullname"
            placeholder="Nombre y Apellido"
            onChange={(e) => {
              handleChangeName(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input name="email" placeholder="tucorreo@mail.com" />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" placeholder="**********" />
        </div>
        <div>
          <label htmlFor="passwordRepit">
            Introduzca contraseña nuevamente
          </label>
          <input
            type="password"
            name="passwordRepit"
            placeholder="**********"
          />
        </div>
        <div>
          <label htmlFor="image">Imagen</label>
          <input type="image" name="image" alt="imagen de usuario" />
        </div>
      </form>
    </div>
  );
};

export default Registrar;
