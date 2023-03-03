import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomSelector } from 'hooks/redux';
import { getUserDetail, changeUserDetail } from 'helpers';
import Swal from 'sweetalert2';

const UserDetail: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch = useCustomDispatch();
  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
    const email = localStorage.getItem('email');
    if (email === null) {
      alert('Debes estar logueado con tu mail!');
    } else {
      getUserDetail(email);
    }
  }, [navigate]);
  const { name, email, image, password } = useCustomSelector(
    (s) => s.users.userDetail
  );
  const [infoUser, setInfoUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [changeData, setChangeData] = useState(false);

  function handleClick(): void {
    setChangeData(true);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...infoUser, [property]: value });
    setInfoUser({ ...infoUser, [property]: value });
    console.log({ ...infoUser, [property]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (
      infoUser.name !== '' &&
      infoUser.email !== '' &&
      infoUser.password !== ''
    ) {
      changeUserDetail(email, infoUser);
      setInfoUser({
        name: '',
        email: '',
        password: ''
      });
      setChangeData(false);
    } else {
      Swal.fire({
        title: '¡Error!',
        text: 'No se pudo completar el registro',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  }
  // const name = localStorage.getItem('name');
  // const image = localStorage.getItem('image');
  function validate(user: typeof infoUser): void {
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
  if (!changeData) {
    return (
      <div>
        <div>
          <button onClick={handleClick}>Cambiar imagen</button>
          <img src={image} alt="imagen de usuario" />
        </div>
        <div>
          <button onClick={handleClick}>Editar</button>
          <div>
            <label htmlFor="name">Nombre Completo</label>
            <input name="name" value={name} readOnly />
          </div>
          <div>
            <label htmlFor="email">Correo electronico</label>
            <input name="email" value={email} readOnly />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input name="password" value={password} readOnly />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <img src={image} alt="imagen de usuario" />
          <button onClick={handleClick}>Cambiar imagen</button>
        </div>
        <div>
          <label htmlFor="name">Nombre completo</label>
          <input
            name="name"
            value={infoUser.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {errors.name !== '' && <p>{errors.name}</p>}
        <div>
          <label htmlFor="email">Correo Electronico</label>
          <input
            name="email"
            value={infoUser.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {errors.email !== '' && <p>{errors.email}</p>}
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            value={infoUser.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {errors.password !== '' && <p>{errors.password}</p>}
        {errors.name !== '' || errors.email !== '' || errors.password !== '' ? (
          <button disabled>Confirmar Cambios</button>
        ) : (
          <button type="submit">Confirmar Cambios</button>
        )}
      </form>
    );
  }
};
export default UserDetail;
