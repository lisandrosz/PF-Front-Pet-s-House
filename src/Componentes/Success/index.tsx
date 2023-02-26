import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <>
      <h2>Gracias por tu donacion!</h2>
      <Link to={'/home'} style={{ textDecoration: 'none' }}>
        <p>Haz click aqui para voler a la pagina principal</p>
      </Link>
    </>
  );
};

export default Success;
