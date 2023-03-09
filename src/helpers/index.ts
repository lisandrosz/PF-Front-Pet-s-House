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
import type { Option } from 'Componentes/Select';
import {
  setUsers,
  setLogged,
  setUserDetail,
  type User
} from 'redux/slices/users';
import { type Donation } from 'Componentes/Dashboard/donationDash';
import { type revs } from 'Componentes/Reviews/Reviews';

export const filtrado = (name: string, value: string): void => {
  let estado = store.getState().pets.allPets;
  const buscado = store.getState().pets.buscado.condicion;

  // Para combinar la busqueda con el filtrado
  if (buscado) {
    estado = [...store.getState().pets.buscado.petsBuscados];
  }
  store.dispatch(setFiltros({ nombre: name, valor: value }));
  const { tamaño, especie, edad, sexo, date, provincia, localidad } =
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
  if (provincia === 'Todas las provincias') {
    // nada
  } else {
    filtrados = filtrados.filter((pet) => {
      return pet.province === provincia;
    });
  }

  // Filtrado por localidad
  if (localidad === 'Todas las localidades') {
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
    await traerPets();
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
    const { id, name, image, rol, email } = response.data;
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('image', image);
    localStorage.setItem('rol', rol);
    localStorage.setItem('email', email);
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
      .then((res) => {});
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
      .then((res) => {});
  } catch (error) {
    console.log(error);
  }
};

interface FavoritesUser extends User {
  Pets: Pet[];
}

export const getAllFavorites = async (id: number): Promise<any> => {
  try {
    await axios.get<FavoritesUser>(`/favorites/${id}`).then((res) => {
      store.dispatch(setAllFavorties(res.data.Pets));
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
      .then((res) => {});
  } catch (error) {
    console.log(error);
  }
};
export const deleteUsuario = async (idUser: number): Promise<any> => {
  try {
    await axios.put(`/users`, { idUser, active: false });
  } catch (error) {
    console.log(error);
  }
};
export const traerProvincias = async (): Promise<Option[]> => {
  try {
    const provOption = [{ value: 'Provincias', label: 'Todas las provincias' }];
    const { data }: any = await axios.get('/provincias');
    data.map((prov: { id: any; name: any }) =>
      provOption.push({ value: prov.id, label: prov.name })
    );
    return provOption;
  } catch (error) {
    return [{ value: 'hola', label: 'hola' }];
  }
};

export const traerLocalidades = async (id: string): Promise<Option[]> => {
  if (id !== 'Provincias') {
    const locOption = [
      { value: 'Todas las localidades', label: 'Todas las localidades' }
    ];
    const { data }: any = await axios.get(`/provincias?localidad=${id}`);
    data.map((loc: { id: any; name: any }) =>
      locOption.push({ value: loc.name, label: loc.name })
    );

    return locOption;
  } else {
    return [{ value: 'Todas las localidades', label: 'Todas las localidades' }];
  }
};

export const getUsers = async (): Promise<any> => {
  try {
    await axios.get<User[]>('/users').then((res) => {
      store.dispatch(setUsers(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getLogged = (log: boolean) => {
  store.dispatch(setLogged(log));
};

export const contactarse = async (id: number): Promise<void> => {
  try {
    const infoPublicador = store.getState().pets.petDetalle.User;
    await axios.post('/contacto', {
      UserId: id,
      infoPublicador
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetail = async (email: string): Promise<any> => {
  try {
    await axios(`/users/${email}`).then((res) => {
      store.dispatch(setUserDetail(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeUserDetail = async (user: any): Promise<any> => {
  try {
    const response = await axios.put('/users', user);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getDonations = async (): Promise<Donation[]> => {
  try {
    const { data } = await axios.get('/donaciones');
    return data;
  } catch (error) {
    return [];
  }
};

export const getReviews = async (): Promise<revs[]> => {
  try {
    const { data } = await axios.get('/reviews');
    return data;
  } catch (error) {
    return [];
  }
};
