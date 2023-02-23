import React, { useState } from 'react';

const Registrar: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    image: '',
    email: '',
    password: ''
  });
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [image, setImage] = useState('');

  //   const [errors, setErrors] = useState({
  //     empty: true
  //   });
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
    setUser({
      ...user,
      name: e.target.value
    });
    console.log(user);
  }
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setUser({
      ...user,
      email: e.target.value
    });
    console.log(user);
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setUser({
      ...user,
      password: e.target.value
    });
    console.log(user);
  }
  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>): void {
    setUser({
      ...user,
      image: e.target.value
    });
    console.log(user);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Crea tu usuario</h1>
      <h3>Por favor, completa tus datos</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="name">Nombre completo</label>
          <input
            name="name"
            placeholder="Nombre y Apellido"
            value={user.name}
            onChange={(e) => {
              handleChangeName(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
            name="email"
            placeholder="tucorreo@mail.com"
            value={user.email}
            onChange={(e) => {
              handleChangeEmail(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            value={user.password}
            onChange={(e) => {
              handleChangePassword(e);
            }}
          />
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
          <input
            type="text"
            name="image"
            value={user.image}
            onChange={(e) => {
              handleChangeImage(e);
            }}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registrar;
