import type { ChangeEvent } from 'react';
import store from 'redux/store';
import { setFiltros, setPets } from 'redux/slices/mascotas';
import type { Pet } from 'redux/slices/mascotas';

export const filtrado = ({ target }: ChangeEvent<HTMLSelectElement>): any => {
  const { name, value } = target;

  store.dispatch(setFiltros({ nombre: name, valor: value }));

  const estado = store.getState().pets.allPets;
  const { tamaño, especie, provincia } = store.getState().pets.filtros;
  let filtrados: Pet[] = [];

  // Filtrado por tamaño
  if (tamaño === 'todos') {
    filtrados = [...estado];
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

  console.log(filtrados);

  store.dispatch(setPets(filtrados));
};
export {};
