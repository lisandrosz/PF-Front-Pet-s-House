import React, { useState, useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createPet } from 'helpers';
import SelectImage from './Cloudinary/selectImage';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import imagencita from '../../Assets/image/imagen1.png';
import './stylePublicar.css';

const Container = styled('div')({
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '400px',
  alignContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  // borderRadius: '10px',
  boxShadow: '0 5px 10px #dddddd',
  marginTop: '10%',
  marginLeft: '55%',
  marginBottom: '8%',
  padding: '2%'
});

const ContainerInputs = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center'
  justifyContent: 'space-around'
});

const Fotito = styled('img')({
  width: '40%',
  marginTop: '-55%',
  position: 'absolute',
  marginLeft: '5%'
});

const CorTitle = styled('h1')({
  color: '#b03537'
});

const HacheTres = styled('h3')({
  color: '#e05f64',
  marginTop: '2%'
});

const ButtonTodos = styled(Button)({
  background: '#fff',
  width: '20%',
  [`&.MuiButton-text`]: {
    color: '#7d8bcc',
    marginLeft: '35%'
  }
});

const Selectito = styled('select')({
  borderRadius: '10px',
  height: '30px',
  marginTop: '5px',
  marginBottom: '10px'
});

const Inputi = styled('input')({
  borderRadius: '10px',
  height: '30px',
  marginTop: '5px',
  marginBottom: '10px'
});

const PublicarMascota: React.FC = () => {
  const navigate = useNavigate();
  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
  }, [navigate]);
  const id = Number(localStorage.getItem('id'));
  const imagen = useCustomSelector((s) => s.pets.petsImage);

  const dispatch = useCustomDispatch();
  const [pet, setPet] = useState({
    name: '',
    image: '',
    age: 0,
    description: '',
    size: '',
    healthBook: false,
    animal: '',
    province: '',
    location: '',
    sex: '',
    idUser: id
  });

  const [errors, setErrors] = useState({
    name: '',
    image: '',
    age: '',
    description: ''
  });

  // const cloudName = 'dhragsmmq';
  // const cloudKey = 278336359546981;

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
    setPet({ ...pet, size: value, image: imagen });
    console.log(pet);
  }

  function handleSelectBook(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    if (value === '') {
      setPet({ ...pet, healthBook: false });
    } else {
      setPet({ ...pet, healthBook: true });
    }

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
    setPet({ ...pet, province: value });
  }

  function handleSelectSex(e: React.ChangeEvent<HTMLSelectElement>): void {
    setPet({ ...pet, sex: e.target.value });
    console.log(pet);
  }

  function handleSelectLocalidad(
    e: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const property = e.target.name;
    const value = e.target.value;
    validate({ ...pet, [property]: value });
    setPet({ ...pet, location: value });
    console.log(pet);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // const response = axios.post(
    //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    //   {
    //     file: pet.image,
    //     api_key: cloudKey
    //   }
    // );
    // console.log(response);
    if (
      pet.name !== '' &&
      pet.size !== '' &&
      pet.description !== '' &&
      pet.image !== '' &&
      pet.animal !== '' &&
      pet.province !== '' &&
      pet.sex !== '' &&
      pet.location !== ''
    ) {
      dispatch(createPet(pet));
      Swal.fire({
        title: '¡Tu mascota fue publicada con exito!',
        icon: 'success',
        confirmButtonText: 'Continuar'
      });
      setPet({
        name: '',
        image: '',
        age: 0,
        description: '',
        size: '',
        healthBook: false,
        animal: '',
        sex: '',
        province: '',
        location: '',
        idUser: 0
      });
      navigate('/');
    } else {
      Swal.fire({
        title: '¡Error!',
        text: 'No se pudo completar la publicacion',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  }

  function validate(pet: formPet): void {
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
    // if (pet.image !== '') {
    //   if (/([a-z\-_0-9/:.]*\.(jpg|jpeg|png))/i.test(pet.image)) {
    //     setErrors({ ...errors, image: '' });
    //   } else {
    //     setErrors({
    //       ...errors,
    //       image: 'La imagen debe tener formato .jpg o .png'
    //     });
    //   }
    // }
    if (pet.age !== undefined) {
      if (!Number.isNaN(pet.age)) {
        if (pet.age >= 0 && pet.age < 100) {
          setErrors({ ...errors, age: '' });
        } else {
          setErrors({ ...errors, age: 'La edad debe ser entre 0 y 100 años' });
        }
      } else {
        setErrors({ ...errors, age: 'Por favor, ingrese valores numericos' });
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
    console.log(errors);
  }

  // useEffect({

  // })

  return (
    <div className="modif">
      <Container>
        <CorTitle className="public">Publica tu mascota</CorTitle>
        <HacheTres>Por favor, completa tus datos</HacheTres>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center'
              justifyContent: 'space-around'
            }}
          >
            <ContainerInputs>
              <label htmlFor="name">Nombre</label>
              <Inputi
                name="name"
                placeholder="Nombre"
                value={pet.name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </ContainerInputs>
            {errors.name !== '' && <p>{errors.name}</p>}

            <ContainerInputs>
              <label htmlFor="age">Edad</label>
              <Inputi
                name="age"
                type="number"
                value={pet.age}
                onChange={(e) => {
                  handleChangeNumber(e);
                }}
              />
            </ContainerInputs>
            {errors.age !== '' && <p>{errors.age}</p>}

            <SelectImage />

            <ContainerInputs>
              <label htmlFor="description">Descripcion</label>
              <textarea
                name="description"
                placeholder="Escribe aqui..."
                value={pet.description}
                onChange={(e) => {
                  handleChangeDescription(e);
                }}
              />
            </ContainerInputs>
            {errors.description !== '' ? <p>{errors.description}</p> : null}

            <h4>Tamaño:</h4>
            <ContainerInputs>
              <Selectito
                onChange={(e) => {
                  handleSelectSize(e);
                }}
              >
                <option value="">Selecciona...</option>
                <option value="grande">Grande </option>
                <option value="mediano">Mediano </option>
                <option value="pequeño">Pequeño </option>
              </Selectito>
            </ContainerInputs>

            <h4>¿Tiene libreta sanitaria actualizada?</h4>
            <ContainerInputs>
              <Selectito
                onChange={(e) => {
                  handleSelectBook(e);
                }}
              >
                <option value="">Selecciona...</option>
                <option value="true">Si </option>
                <option value="">No </option>
              </Selectito>
            </ContainerInputs>

            <h4>Especie:</h4>
            <ContainerInputs>
              <Selectito
                onChange={(e) => {
                  handleSelectAnimal(e);
                }}
              >
                <option value="">Selecciona...</option>
                <option value="perros">Perro</option>
                <option value="gatos">Gato</option>
                <option value="roedores">Roedor</option>
                <option value="aves">Ave</option>
                <option value="otros">Otro</option>
              </Selectito>
            </ContainerInputs>

            <h4>Sexo:</h4>
            <ContainerInputs>
              <Selectito
                onChange={(e) => {
                  handleSelectSex(e);
                }}
              >
                <option value="">Selecciona...</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </Selectito>
            </ContainerInputs>

            <h4>Provincia:</h4>
            <ContainerInputs>
              <Selectito
                onChange={(e) => {
                  handleSelectProvincia(e);
                }}
              >
                <option value="">Selecciona...</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Cordoba">Cordoba</option>
                <option value="Mendoza">Mendoza</option>
                <option value="San Luis">San Luis</option>
              </Selectito>
            </ContainerInputs>

            <h4>Localidad:</h4>
            <ContainerInputs>
              <Selectito
                onChange={(e) => {
                  handleSelectLocalidad(e);
                }}
              >
                <option value="">Selecciona...</option>
                <option value="Localidad 1">Localidad 1</option>
                <option value="Localidad 2">Localidad 2</option>
                <option value="Localidad 3">Localidad 3</option>
                <option value="Localidad 4">Localidad 4</option>
              </Selectito>
            </ContainerInputs>

            {errors.name !== '' ||
            errors.description !== '' ||
            errors.age !== '' ||
            errors.image !== '' ? (
              <h3>Completa todos los campos</h3>
            ) : (
              <ButtonTodos type="submit">Publicar</ButtonTodos>
            )}
          </div>
        </form>
      </Container>
      <Fotito src={imagencita} alt="publ"></Fotito>
    </div>
  );
};
export default PublicarMascota;
export interface formPet {
  name: string;
  image: string;
  age: number;
  description: string;
  size: string;
  healthBook: boolean;
  animal: string;
  province: string;
  location: string;
  sex: string;
  idUser: number;
}
