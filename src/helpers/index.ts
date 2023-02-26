import type { ChangeEvent } from 'react';
import store from 'redux/store';
import { setFiltros, setPets } from 'redux/slices/mascotas';
import type { Pet } from 'redux/slices/mascotas';
// import { createUser } from 'redux/slices/users';
import type { formUser } from 'Componentes/Registrar';
import type { formPet } from 'Componentes/PublicarMascota';
import axios from 'axios';

export const filtrado = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
  let estado = store.getState().pets.allPets;
  const buscado = store.getState().pets.buscado.condicion;

  // Para combinar la busqueda con el filtrado
  if (buscado) {
    estado = [...store.getState().pets.buscado.petsBuscados];
  }

  const { name, value } = target;
  store.dispatch(setFiltros({ nombre: name, valor: value }));
  const { tamaño, especie, provincia, edad } = store.getState().pets.filtros;
  let filtrados: Pet[] = [...estado];

  // Filtrado por tamaño
  if (tamaño === 'todos') {
    //  nada
  } else {
    filtrados = estado.filter((pet) => {
      return pet.size === tamaño;
    });
  }

  // Filtrado por especie
  if (especie === 'todos') {
    // nada
  } else {
    filtrados = filtrados.filter((pet) => {
      return pet.animal === especie;
    });
  }

  // Filtrado por provincia
  if (provincia === 'todas') {
    // nada
  } else {
    filtrados = filtrados.filter((pet) => {
      return pet.provincia === provincia;
    });
  }

  // Ordenamiento por edad
  if (edad === 'defecto') {
    // nada
  } else if (edad === 'menor-mayor') {
    filtrados = filtrados.sort((a, b) => a.age - b.age);
  } else if (edad === 'mayor-menor') {
    filtrados = filtrados.sort((a, b) => b.age - a.age);
  }

  store.dispatch(setPets(filtrados));
};

export const createPet = (payload: formPet) => async () => {
  try {
    const response = await axios.post('http://localhost:3001/pets', payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const crearUser = (payload: formUser) => async () => {
  try {
    const response = await axios.post('http://localhost:3001/users', payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
