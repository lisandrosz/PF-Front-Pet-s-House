import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PublicarMascota: React.FC = () => {
  //= ====================== VALIDACION LOGIN LOCALSTORAGE
  const navigate = useNavigate();
  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
  }, []);
  //= ======================
  return <div>PublicarMascota</div>;
};

export default PublicarMascota;
