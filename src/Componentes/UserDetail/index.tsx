import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetail: React.FC = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const name = localStorage.getItem('name');
  const image = localStorage.getItem('image');
  useEffect((): void => {
    if (email === null) {
      alert('Debes estar logueado con tu mail!');
      navigate('/');
    }
  }, []);
  // const [nameUser, setNameUser] = useState({
  //   idUser: id,
  //   name: ''
  // });

  // const [emailUser, setEmailUser] = useState({
  //   idUser: id,
  //   email: ''
  // });
  return (
    <div>
      <div>
        <img src={image?.toString()} alt="imagen de usuario" />
        <button>Cambiar imagen</button>
      </div>
      <div>
        <button>{name}</button>
        <button
          onClick={() => {
            navigate('/cambiarContraseña');
          }}
        >
          Cambiar contraseña
        </button>
      </div>
    </div>
  );
};
export default UserDetail;
