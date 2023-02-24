import store from 'redux/store';
import {
  setFiltros,
  setPets,
  setReset,
  setAllPets,
  setBuscado
} from 'redux/slices/mascotas';
import type { Pet } from 'redux/slices/mascotas';
import axios from 'axios';

export const filtrado = (name: string, value: string): void => {
  let estado = store.getState().pets.allPets;
  const buscado = store.getState().pets.buscado.condicion;

  // Para combinar la busqueda con el filtrado
  if (buscado) {
    estado = [...store.getState().pets.buscado.petsBuscados];
  }
  store.dispatch(setFiltros({ nombre: name, valor: value }));
  const { tamaño, especie, provincia, edad, localidad, sexo, date } =
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

  // Filtro por sexo
  if (sexo === 'todos') {
    // nada
  } else {
    filtrados = filtrados.filter((pet) => {
      return pet.sex === sexo;
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
  if (provincia === 'Provincias') {
    // nada
  } else {
    filtrados = filtrados.filter((pet) => {
      return pet.province === provincia;
    });
  }

  // Filtrado por localidad
  if (localidad === 'Localidades') {
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

  // Ordenamiento por fecha
  if (date === 'defecto') {
    // nada
  } else if (date === 'nuevo') {
    filtrados = filtrados.sort(
      (a, b): number =>
        Number(new Date(b.createdAt.split('T')[0])) -
        Number(new Date(a.createdAt.split('T')[0]))
    );
  } else if (date === 'antiguo') {
    filtrados = filtrados.sort(
      (a, b): number =>
        Number(new Date(a.createdAt.split('T')[0])) -
        Number(new Date(b.createdAt.split('T')[0]))
    );
  }

  store.dispatch(setPets(filtrados));
};

export const resetFiltros = (): void => {
  const estado = store.getState().pets.allPets;
  store.dispatch(setReset());
  store.dispatch(setPets(estado));
};

export const traerPets = async (): Promise<any> => {
  try {
    await axios.get<Pet[]>('/pets').then((res) => {
      store.dispatch(setAllPets(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchPet = async (name: string): Promise<any> => {
  try {
    await axios.get<Pet[]>(`/pets?name=${name}`).then((res) => {
      store.dispatch(setBuscado(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};
