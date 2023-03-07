import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleDetail.css';
import Favoritos from 'Componentes/Favoritos';
import Publicaciones from 'Componentes/Publicaciones';

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
  }, [email, navigate]);
  // const [nameUser, setNameUser] = useState({
  //   idUser: id,
  //   name: ''
  // });

  // const [emailUser, setEmailUser] = useState({
  //   idUser: id,
  //   email: ''
  // });
  return (
    <div className="contenedorDetalle">
      <div className="contenedorUsuario">
        <div className="imagen">
          <img
            className="imagenUsuario"
            src={image?.toString()}
            alt="imagen de usuario"
          />
          <button className="botonCambioNombre">{name}</button>
        </div>
        <div className="botones">
          <button
            className="botonCambio"
            onClick={() => {
              navigate('/cambiarContraseña');
            }}
          >
            Cambiar contraseña
          </button>
          <button className="botonCambio">Cambiar imagen</button>
          <button className="botonCambio">Eliminar Cuenta</button>
          <button
            className="botonCambio"
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </button>
        </div>

        <div className="contenedorRelleno">
          <h1>Favoritos</h1>
          <div className="contenedorImagenes">
            <Favoritos />
          </div>
          <h1>Publicaciones</h1>
          <div className="contenedorImagenes">
            <Publicaciones />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetail;
