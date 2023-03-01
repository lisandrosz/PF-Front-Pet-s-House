import store from 'redux/store';
import {
  setFiltros,
  setPets,
  setReset,
  setAllPets,
  setBuscado,
  setPetDetalle,
  setAllFavorties,
  setPublications
} from 'redux/slices/mascotas';
import type { Pet } from 'redux/slices/mascotas';
import type { formUser } from 'Componentes/Registrar';
import type { formPet } from 'Componentes/PublicarMascota';
import axios from 'axios';
import type { User } from 'redux/slices/users';

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
export const createPet = (payload: formPet) => async () => {
  try {
    const response = await axios.post('/pets', payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
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
export const crearUser = (payload: formUser) => async () => {
  try {
    const response = await axios.post('/users', payload);
    console.log(response);
    return response;
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

// DONACIONES
export const generarLink = async (
  email: string,
  precio: string,
  id: number
): Promise<undefined> => {
  try {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { init_point, date_created }: any = await axios
      .post('/donaciones', {
        userID: id,
        emailUser: email,
        precio
      })
      .then((res) => {
        return res.data;
      });
    localStorage.setItem('monto', precio);
    localStorage.setItem('date', date_created);
    return init_point;
  } catch (error) {
    console.log(error);
  }
};

export const saveDonation = async (
  userID: number,
  date: string,
  precio: string
): Promise<any> => {
  try {
    await axios
      .post('/donaciones/guardar', {
        userID,
        date,
        precio
      })
      .then((res) => {
        console.log(res.data);
      });
  } catch (error) {
    console.log(error);
  }
};

// ========================
// =====Detalle de Pet=====
// ========================
export const setPetDetail = async (id: number): Promise<any> => {
  try {
    await axios.get<{ User: User; Pet: Pet }>(`/pets/${id}`).then((res) => {
      store.dispatch(setPetDetalle(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPetFavorite = async (
  idPet: number,
  idUser: number
): Promise<any> => {
  try {
    await axios
      .post(`/favorites/`, {
        idPets: idPet,
        idUser
      })
      .then((res) => {
        console.log(res.data);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getAllFavorites = async (id: number): Promise<any> => {
  try {
    await axios.get<Pet[]>(`/favorites/${id}`).then((res) => {
      store.dispatch(setAllFavorties(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPublications = async (id: number): Promise<any> => {
  try {
    await axios.get<Pet[]>(`/publications/${id}`).then((res) => {
      store.dispatch(setPublications(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePetFavorite = async (
  idPets: number,
  idUser: number
): Promise<any> => {
  try {
    await axios
      .delete(`/favorites/`, { data: { idPets, idUser } })
      .then((res) => {
        console.log(res.data);
      });
  } catch (error) {
    console.log(error);
  }
};
