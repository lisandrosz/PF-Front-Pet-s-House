import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomSelector } from 'hooks/redux';
import { getUserDetail, changeUserDetail } from 'helpers';
import Swal from 'sweetalert2';
import SelectImage from 'Componentes/UserDetail/Cloudinary/selectImageUser';

const UserDetail: React.FC = () => {
  const navigate = useNavigate();
  const { name, email, image, password } = useCustomSelector(
    (s) => s.users.userDetail
  );
  const imageURL = useCustomSelector((state) => state.users.userImage);
  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
    const email = localStorage.getItem('email');
    if (email === null) {
      alert('Debes estar logueado con tu mail!');
    } else {
      getUserDetail(email);
    }
  }, [navigate, name, email, image, imageURL]);

  // ESTADOS LOCALES Y GLOBALES

  const id = Number(localStorage.getItem('id'));
  const [nameUser, setNameUser] = useState({
    idUser: id,
    name: ''
  });

  const [imageUser, setImageUser] = useState({
    idUser: id,
    image: ''
  });

  const [errors, setErrors] = useState({
    name: ''
  });

  const [changeData, setChangeData] = useState(false);

  function handleClick(): void {
    setChangeData(true);
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    // validate({ ...infoUser, [property]: value });
    validate({ ...nameUser, name: value });
    setNameUser({ ...nameUser, name: value });
    console.log({ ...nameUser, name: value });
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    change: string
  ): void {
    e.preventDefault();
    switch (change) {
      case 'name':
        if (nameUser.name !== '') {
          changeUserDetail(nameUser);
          setNameUser({
            name: '',
            idUser: id
          });
          Swal.fire({
            title: 'Nombre actualizado correctamente',
            text: 'Refrezca la pagina para ver los cambios',
            icon: 'success',
            confirmButtonText: 'Entendido'
          });
          setChangeData(false);
        } else {
          Swal.fire({
            title: '¡Error!',
            text: 'El nombre puede estar vacio',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        }
        break;
      default:
        alert('Oops, algo salio mal');
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleSubmitImage(e: any) {
    e.preventDefault();
    setImageUser({ ...imageUser, image: imageURL });
    if (imageURL !== '') {
      changeUserDetail(imageUser);
      Swal.fire({
        title: 'Imagen actualizada correctamente',
        text: 'Refrezca la pagina para ver los cambios',
        icon: 'success',
        confirmButtonText: 'Entendido'
      });
    } else {
      alert('Debes seleccionar al menos una  imagen');
    }
  }

  // FUNCION VALIDAR

  function validate(user: any): void {
    if (user.name !== '') {
      if (/^([\w]{2,})+\s+([\w\s]{2,})+$/i.test(user.name)) {
        setErrors({ ...errors, name: '' });
      } else {
        setErrors({
          ...errors,
          name: 'El nombre debe contar al menos con 2 caracteres y un espacio'
        });
      }
    }
  }
  return (
    <div>
      <div>
        <img src={image} alt="imagen de usuario" />
        <span>Cambiar imagen</span>
        <SelectImage />;
        {imageURL !== '' ? (
          <button onClick={handleSubmitImage}>Confirmar cambios</button>
        ) : null}
      </div>
      <div>
        {!changeData ? (
          <div>
            <label htmlFor="name">Nombre Completo</label>
            <input name="name" value={name} readOnly />
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Editar
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              handleSubmit(e, 'name');
            }}
          >
            <div>
              <label htmlFor="name">Nombre completo</label>
              <input
                name="name"
                type="text"
                value={nameUser.name}
                onChange={(e) => {
                  handleChangeName(e);
                }}
              />
            </div>
            {errors.name !== '' && <p>{errors.name}</p>}
            <button
              onClick={() => {
                setChangeData(false);
              }}
            >
              Descartar
            </button>
            {errors.name !== '' ? (
              <button disabled>Confirmar Cambios</button>
            ) : (
              <button type="submit">Confirmar Cambios</button>
            )}
          </form>
        )}
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" value={password} readOnly />
          <button>Editar</button>
        </div>
      </div>
    </div>
  );
};
export default UserDetail;
