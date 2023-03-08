import React, { useState } from 'react';
import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
import { useNavigate } from 'react-router-dom';
import { crearUser } from 'helpers';
import Swal from 'sweetalert2';
import SelectImage from '../UserDetail/Cloudinary/selectImageUser';
import hash from '../Login/hashFunction';

const Registrar: React.FC = () => {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    image: ''
  });

  const [errors, setErrors] = useState({
    empty: true,
    name: '',
    image: '',
    email: '',
    password: '',
    repeatPswrd: ''
  });

  const imagen = useCustomSelector((s) => s.users.userImage);
  // const [sndPassword, setSndPassword] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...user, [property]: value });
    setUser({
      ...user,
      [property]: value,
      image: imagen
    });
  }
  // function handleChangeSndPassword(
  //   e: React.ChangeEvent<HTMLInputElement>
  // ): void {
  //   setSndPassword(e.target.value);
  // }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (
      user.name !== '' &&
      user.email !== '' &&
      user.password !== '' &&
      user.image !== ''
    ) {
      user.password = hash(user.password);
      dispatch(crearUser(user));
      Swal.fire({
        title: '¡Usuario creado con exito!',
        icon: 'success',
        confirmButtonText: 'Ir a pagina principal'
      });
      setUser({
        name: '',
        email: '',
        password: '',
        image: ''
      });
      navigate('/');
    } else {
      Swal.fire({
        title: '¡Error!',
        text: 'No se pudo completar el registro',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  }

  function validate(user: formUser): void {
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
      // if (sndPassword !== '') {
      //   if (sndPassword === user.password) {
      //     setErrors({ ...errors, repeatPswrd: '' });
      //   } else {
      //     setErrors({ ...errors, repeatPswrd: 'Las contraseñas no coinciden' });
      //   }
      // }
      if (user.image !== '') {
        if (/([a-z\-_0-9/:.]*\.(jpg|jpeg|png))/i.test(user.image)) {
          setErrors({ ...errors, image: '' });
        } else {
          setErrors({
            ...errors,
            image: 'La imagen debe tener formato .jpg o .png'
          });
        }
      }
    }
  }

  return (
    <div>
      <h1>Crea tu usuario</h1>
      <h3>Por favor, completa tus datos</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="name">Nombre completo</label>
          <input
            name="name"
            placeholder="Nombre y Apellido"
            value={user.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {errors.name !== '' && <p>{errors.name}</p>}
        <div>
          <SelectImage />
        </div>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
            name="email"
            placeholder="tucorreo@mail.com"
            value={user.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {errors.email !== '' && <p>{errors.email}</p>}

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            value={user.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {errors.password !== '' ? <p>{errors.password}</p> : null}
        {/* <div>
          <label htmlFor="passwordRepit">
            Introduzca contraseña nuevamente
          </label>
          <input
            type="password"
            name="passwordRepit"
            placeholder="**********"
            value={sndPassword}
            onChange={(e) => {
              handleChangeSndPassword(e);
            }}
          />
        </div>
        {errors.repeatPswrd !== '' && <p>{errors.repeatPswrd}</p>} */}

        {errors.image !== '' ? <p>{errors.image}</p> : null}

        {errors.name !== '' ||
        errors.email !== '' ||
        errors.password !== '' ||
        // errors.repeatPswrd !== '' ||
        errors.image !== '' ? (
          <h3>Completa todos los campos</h3>
        ) : (
          <button type="submit">Registrarse</button>
        )}
      </form>
    </div>
  );
};

export default Registrar;

export interface formUser {
  name: string;
  image: string;
  email: string;
  password: string;
}
