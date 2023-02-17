import type { ChangeEvent } from 'react';
import store from 'redux/store';
import { setFiltros, setPets } from 'redux/slices/mascotas';
import type { Pet } from 'redux/slices/mascotas';

export const filtrado = ({ target }: ChangeEvent<HTMLSelectElement>): any => {
  const { name, value } = target;

  store.dispatch(setFiltros({ nombre: name, valor: value }));

  const estado = store.getState().pets.allPets;
  //   const { tamaño, provincia, especie, tiempo, edad } =
  //     store.getState().pets.filtros;
  let filtrados: Pet[] = [];

  // Filtrado por tamaño
  if (name === 'tamaño') {
    if (value === 'todos') {
      filtrados = [...estado];
    } else {
      filtrados = estado.filter((pet) => {
        return pet.size === value;
      });
    }
  }
  console.log(filtrados);

  store.dispatch(setPets(filtrados));
};
export {};
