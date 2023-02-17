import type { ChangeEvent } from 'react';
import store from 'redux/store';
import { setFiltros } from 'redux/slices/mascotas';

export const filtrado = ({ target }: ChangeEvent<HTMLSelectElement>): any => {
  const { name, value } = target;
  const estado = store.getState();

  store.dispatch(setFiltros({ nombre: name, valor: value }));
  console.log(estado.pets.filtros);
};
export {};
