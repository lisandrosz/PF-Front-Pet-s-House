import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styleFailure.css';

const Failure: React.FC = () => {
  const navigate = useNavigate();

  const handler = (): void => {
    navigate('/');
  };

  return (
    <div>
      <h1>¡Lo sentimos, ocurrio un problema!</h1>
      <p>
        Por favor, inténtalo de nuevo más tarde o contáctanos para obtener
        ayuda.
      </p>
      <button onClick={handler} className="btn">
        Regresar al inicio
      </button>
    </div>
  );
};

export default Failure;
