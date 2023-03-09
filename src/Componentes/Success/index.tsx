import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveDonation } from 'helpers';
import './styleSucess.css';

const Success: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
    const date = localStorage.getItem('date');
    const monto = localStorage.getItem('monto');

    console.log(id, date, monto);

    if (monto !== '' && id !== null && date !== null && monto !== null)
      saveDonation(Number(id), date, monto);
  }, [navigate]);

  const handler = (): void => {
    navigate('/');
  };

  return (
    <>
      <h1>¡Gracias por tu donación!</h1>
      <p>
        En Pets House valoramos mucho tu apoyo. Gracias a tu donación podremos
        seguir cuidando de los animales y encontrarles hogares amorosos.
      </p>
      <button onClick={handler} className="btn">
        Regresar al inicio
      </button>
    </>
  );
};

export default Success;
