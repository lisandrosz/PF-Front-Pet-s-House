import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomSelector } from 'hooks/redux';
import { getUserDetail, changeUserDetail } from 'helpers';
import Swal from 'sweetalert2';

const UserDetail: React.FC = () => {
  const navigate = useNavigate();
  const user = useCustomSelector((s) => s.users.userDetail);
  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
    const email = localStorage.getItem('email');
    if (email === null) {
      alert('Debes estar logueado con tu mail!');
    } else {
      getUserDetail(email);
    }
  }, [navigate, user]);

  // ESTADOS LOCALES Y GLOBALES

  const id = Number(localStorage.getItem('id'));
  const { name, email, image, password } = useCustomSelector(
    (s) => s.users.userDetail
  );
  const [nameUser, setNameUser] = useState({
    idUser: id,
    name: ''
  });

  const [emailUser, setEmailUser] = useState({
    idUser: id,
    email: ''
  });

  const [passwordUser, setPasswordUser] = useState({
    idUser: id,
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [changeData, setChangeData] = useState('default');

  function handleClick(change: string): void {
    switch (change) {
      case 'name':
        setChangeData('name');
        break;
      case 'email':
        setChangeData('email');
        break;
      case 'password':
        setChangeData('password');
        break;
      default:
        setChangeData('default');
    }
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    // validate({ ...infoUser, [property]: value });
    setNameUser({ ...nameUser, name: value });
    console.log({ ...nameUser, name: value });
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    // validate({ ...infoUser, [property]: value });
    setEmailUser({ ...emailUser, email: value });
    console.log({ ...emailUser, email: value });
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    // validate({ ...infoUser, [property]: value });
    setPasswordUser({ ...passwordUser, password: value });
    console.log({ ...passwordUser, password: value });
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
          setChangeData('default');
        } else {
          Swal.fire({
            title: '¡Error!',
            text: 'No se pudo completar el registro',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        }
        break;
      case 'email':
        if (emailUser.email !== '') {
          changeUserDetail(emailUser);
          setEmailUser({
            email: '',
            idUser: id
          });
          setChangeData('default');
        } else {
          Swal.fire({
            title: '¡Error!',
            text: 'No se pudo completar el registro',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        }
        break;
      case 'password':
        if (passwordUser.password !== '') {
          changeUserDetail(passwordUser);
          setPasswordUser({
            password: '',
            idUser: id
          });
          setChangeData('default');
        } else {
          Swal.fire({
            title: '¡Error!',
            text: 'No se pudo completar el registro',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        }
        break;
      default:
        alert('Oops, algo salio mal');
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
    if (user.email !== '') {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        setErrors({ ...errors, email: '' });
      } else {
        setErrors({ ...errors, email: 'Por favor, inserte un email valido' });
      }
    }
    if (user.password !== '') {
      if (
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(user.password)
      ) {
        setErrors({ ...errors, password: '' });
      } else {
        setErrors({
          ...errors,
          password:
            'La contraseña debe tener al menos 8 caracteres, una minuscula, una mayuscula y un numero'
        });
      }
    }
  }
  switch (changeData) {
    case 'name':
      return (
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
          {errors.name !== '' ? (
            <button disabled>Confirmar Cambios</button>
          ) : (
            <button type="submit">Confirmar Cambios</button>
          )}
        </form>
      );
    case 'email':
      return (
        <form
          onSubmit={(e) => {
            handleSubmit(e, 'email');
          }}
        >
          <div>
            <label htmlFor="email">Correo Electronico</label>
            <input
              name="email"
              type="text"
              value={emailUser.email}
              onChange={(e) => {
                handleChangeEmail(e);
              }}
            />
          </div>
          {errors.email !== '' && <p>{errors.email}</p>}
          {errors.email !== '' ? (
            <button disabled>Confirmar Cambios</button>
          ) : (
            <button type="submit">Confirmar Cambios</button>
          )}
        </form>
      );

    case 'password':
      return (
        <form
          onSubmit={(e) => {
            handleSubmit(e, 'password');
          }}
        >
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              name="password"
              type="text"
              value={passwordUser.password}
              onChange={(e) => {
                handleChangePassword(e);
              }}
            />
          </div>
          {errors.password !== '' && <p>{errors.password}</p>}
          {errors.password !== '' ? (
            <button disabled>Confirmar Cambios</button>
          ) : (
            <button type="submit">Confirmar Cambios</button>
          )}
        </form>
      );
    default:
      return (
        <div>
          <div>
            <img src={image} alt="imagen de usuario" />
            <button
              onClick={() => {
                handleClick('name');
              }}
            >
              Cambiar imagen
            </button>
          </div>
          <div>
            <div>
              <label htmlFor="name">Nombre Completo</label>
              <input name="name" value={name} readOnly />
              <button
                onClick={() => {
                  handleClick('name');
                }}
              >
                Editar
              </button>
            </div>
            <div>
              <label htmlFor="email">Correo electronico</label>
              <input name="email" value={email} readOnly />
              <button
                onClick={() => {
                  handleClick('email');
                }}
              >
                Editar
              </button>
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input name="password" value={password} readOnly />
              <button
                onClick={() => {
                  handleClick('password');
                }}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      );
  }
};
export default UserDetail;
