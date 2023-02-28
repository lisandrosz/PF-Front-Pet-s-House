import React from 'react';
import { Link } from 'react-router-dom';

const Failure: React.FC = () => {
  return (
    <>
      <h2>Algo fallo!</h2>
      <Link to={'/donacion'}>Haz click aqui para volver a intentarlo!</Link>
    </>
  );
};

export default Failure;
