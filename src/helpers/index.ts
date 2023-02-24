import store from 'redux/store';
import { setFiltros, setPets } from 'redux/slices/mascotas';
import type { Pet } from 'redux/slices/mascotas';

export const filtrado = (name: string, value: string): void => {
  let estado = store.getState().pets.allPets;
  const buscado = store.getState().pets.buscado.condicion;

  // Para combinar la busqueda con el filtrado
  if (buscado) {
    estado = [...store.getState().pets.buscado.petsBuscados];
  }
  store.dispatch(setFiltros({ nombre: name, valor: value }));
  const { tamaño, especie, provincia, edad, localidad } =
    store.getState().pets.filtros;
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
      return pet.province === provincia;
    });
  }

  // Filtrado por localidad
  if (localidad === 'todas') {
    // nada
  } else {
    filtrados = filtrados.filter((pet) => {
      return pet.location === localidad;
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
