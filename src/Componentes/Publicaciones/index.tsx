import React, { useState } from 'react';

const Publicaciones: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  function logIn(): void {
    setIsLogin(true);
  }

  function logOut(): void {
    setIsLogin(false);
  }

  if (isLogin) {
    return (
      <div>
        Estas Logueado
        <hr />
        <button onClick={logOut}> Desloguearse </button>
      </div>
    );
  } else {
    return (
      <div>
        Para acceder a tus Publicaciones tienes que loguearte primero!
        <hr />
        <button onClick={logIn}> Loguearse </button>
      </div>
    );
  }
};

export default Publicaciones;
