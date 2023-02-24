import React, { useState } from 'react';
import type { Pet } from 'redux/slices/mascotas';
import { createPet } from 'redux/slices/mascotas';
import { useCustomDispatch } from 'hooks/redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PublicarMascota: React.FC = () => {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const [pet, setPet] = useState({
    id: 0,
    name: '',
    image: '',
    age: 0,
    description: '',
    size: '',
    healthBook: false,
    animal: '',
    active: false,
    provincia: '',
    localidad: '',
    zona: ''
  });

  const [errors, setErrors] = useState({
    empty: true,
    name: '',
    image: '',
    age: '',
    description: '',
    size: '',
    animal: '',
    provincia: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    console.log(pet);
    setPet({
      ...pet,
      [property]: value
    });
  }

  function handleChangeNumber(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    validate({ ...pet, age: +Number(value) });
    console.log(pet);
    setPet({
      ...pet,
      age: +Number(value)
    });
  }

  function handleChangeDescription(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    setPet({ ...pet, description: value });
  }

  function handleSelectSize(e: React.ChangeEvent<HTMLSelectElement>): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    setPet({ ...pet, size: value });
  }

  function handleSelectBook(e: React.ChangeEvent<HTMLSelectElement>): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    setPet({ ...pet, healthBook: e.target.value === '' ? false : true });
    console.log(pet);
  }

  function handleSelectAnimal(e: React.ChangeEvent<HTMLSelectElement>): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    setPet({ ...pet, animal: value });
  }

  function handleSelectProvincia(
    e: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    setPet({ ...pet, provincia: value });
  }

  function handleSelectSex(e: React.ChangeEvent<HTMLSelectElement>): void {
    // setPet({ ...pet, sex: e.target.value });
  }

  function handleSelectLocalidad(
    e: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    setPet({ ...pet, localidad: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (
      pet.name !== '' &&
      pet.size !== '' &&
      pet.description !== '' &&
      pet.image !== '' &&
      pet.animal !== '' &&
      pet.provincia !== ''
    ) {
      dispatch(createPet(pet));
      Swal.fire({
        title: '¡Tu mascota fue publicada con exito!',
        icon: 'success',
        confirmButtonText: 'Ir a pagina principal'
      });
      setPet({
        id: 0,
        name: '',
        image: '',
        age: 0,
        description: '',
        size: '',
        healthBook: false,
        animal: '',
        active: false,
        provincia: '',
        localidad: '',
        zona: ''
      });
      navigate('/home');
    } else {
      Swal.fire({
        title: '¡Error!',
        text: 'No se pudo completar la publicacion',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  }

  function validate(pet: Pet): void {
    if (pet.name !== '') {
      if (/^[a-zA-Z-]+$/.test(pet.name)) {
        setErrors({ ...errors, name: '' });
      } else {
        setErrors({
          ...errors,
          name: 'El nombre debe contener letras unicamente'
        });
      }
    }
    if (!isNaN(pet.age)) {
      if (pet.age >= 0 && pet.age < 100) {
        setErrors({ ...errors, age: '' });
      } else {
        setErrors({ ...errors, age: 'La edad debe ser entre 0 y 100 años' });
      }
    }
    if (pet.description !== '') {
      if (pet.description.length > 25) {
        setErrors({ ...errors, description: '' });
      } else {
        setErrors({
          ...errors,
          description: 'La descripcion debe contener 25 caracteres como minimo'
        });
      }
    }
    if (pet.image !== '') {
      if (/([a-z\-_0-9/:.]*\.(jpg|jpeg|png))/i.test(pet.image)) {
        setErrors({ ...errors, image: '' });
      } else {
        setErrors({
          ...errors,
          image: 'La imagen debe tener formato .jpg o .png'
        });
      }
    }
    console.log(errors);
  }

  return (
    <div>
      <h1>Publica tu mascota</h1>
      <h3>Por favor, completa tus datos</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            placeholder="Nombre"
            value={pet.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {errors.name !== '' && <p>{errors.name}</p>}

        <div>
          <label htmlFor="image">Imagen</label>
          <input
            type="text"
            name="image"
            value={pet.image}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        {errors.image !== '' ? <p>{errors.image}</p> : null}
        <div>
          <label htmlFor="age">Edad</label>
          <input
            name="age"
            type="text"
            value={pet.age}
            onChange={(e) => {
              handleChangeNumber(e);
            }}
          />
        </div>
        {errors.age !== '' && <p>{errors.age}</p>}

        <div>
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            placeholder="Escribe aqui..."
            value={pet.description}
            onChange={(e) => {
              handleChangeDescription(e);
            }}
          />
        </div>
        {errors.description !== '' ? <p>{errors.description}</p> : null}

        <h4>Tamaño:</h4>
        <div>
          <select
            onChange={(e) => {
              handleSelectSize(e);
            }}
          >
            <option value="">Selecciona...</option>
            <option value="grande">Grande </option>
            <option value="mediano">Mediano </option>
            <option value="chico">Pequeño </option>
          </select>
        </div>

        <h4>¿Tiene libreta sanitaria actualizada?</h4>
        <div>
          <select
            onChange={(e) => {
              handleSelectBook(e);
            }}
          >
            <option value="">Selecciona...</option>
            <option value="true">Si </option>
            <option value="">No </option>
          </select>
        </div>

        <h4>Especie:</h4>
        <div>
          <select
            onChange={(e) => {
              handleSelectAnimal(e);
            }}
          >
            <option value="">Selecciona...</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="conejo">Roedor</option>
            <option value="loro">Otro</option>
          </select>
        </div>

        <h4>Provincia:</h4>
        <div>
          <select
            onChange={(e) => {
              handleSelectProvincia(e);
            }}
          >
            <option value="">Selecciona...</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Cordoba">Cordoba</option>
            <option value="Mendoza">Mendoza</option>
            <option value="San Luis">San Luis</option>
          </select>
        </div>

        <h4>Localidad:</h4>
        <div>
          <select
            onChange={(e) => {
              handleSelectLocalidad(e);
            }}
          >
            <option value="">Selecciona...</option>
            <option value="Localidad 1">Localidad 1</option>
            <option value="Localidad 2">Localidad 2</option>
            <option value="Localidad 3">Localidad 3</option>
            <option value="Localidad 4">Localidad 4</option>
          </select>
        </div>

        <h4>Sexo:</h4>
        <div>
          <select
            onChange={(e) => {
              handleSelectSex(e);
            }}
          >
            <option value="">Selecciona...</option>
            <option value="masculine">Masculino</option>
            <option value="femenine">Femenino</option>
          </select>
        </div>

        {errors.name !== '' ||
        errors.description !== '' ||
        errors.age !== '' ||
        errors.image !== '' ||
        errors.size !== '' ||
        errors.animal !== '' ||
        errors.provincia !== '' ? (
          <h3>Completa todos los campos</h3>
        ) : (
          <button type="submit">Publicar</button>
        )}
      </form>
    </div>
  );
};

export default PublicarMascota;
