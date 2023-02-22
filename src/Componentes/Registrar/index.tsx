import React from 'react';

const Registrar: React.FC = () => {
  return (
    <div>
      <h1>Registrarse</h1>
      <h3>Por favor, completa tus datos</h3>
      <form>
        <div>
          <label htmlFor="fullname">Nombre completo</label>
          <input name="fullname" placeholder="Nombre y Apellido" />
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
