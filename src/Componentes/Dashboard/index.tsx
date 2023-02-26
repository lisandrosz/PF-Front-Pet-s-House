import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function logIn(): void {
    setIsLogin(true);
  }

  function getAdminPermissions(): void {
    setIsAdmin(true);
  }

  function logOut(): void {
    setIsLogin(false);
  }

  function removeAdminPermissions(): void {
    setIsAdmin(false);
  }

  if (isLogin && isAdmin) {
    return (
      <div>
        Estas Logueado y eres Admin
        <hr />
        <button onClick={logOut}> Desloguearse </button>
        <button onClick={removeAdminPermissions}> Dejar de ser Admin </button>
      </div>
    );
  } else {
    return (
      <div>
        Esta funcion solo esta disponible para el admin
        <hr />
        <button onClick={logIn}> Loguearse </button>
        <button onClick={getAdminPermissions}> Volverse Admin </button>
      </div>
    );
  }
};

export default Dashboard;
