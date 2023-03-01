import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveDonation } from 'helpers';

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
