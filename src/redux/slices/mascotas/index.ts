import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../users';

export interface Pet {
  id: number;
  name: string;
  image: string;
  age: number;
  description: string;
  size: string;
  healthBook: boolean;
  animal: string;
  active: boolean;
  province: string;
  location: string;
  sex: string;
  createdAt: string;
  UserId: number;
}
export interface Filtros {
  tamaño: string;
  especie: string;
  edad: string;
  provincia: string;
  localidad: string;
  date: string;
  sexo: string;
}
interface Buscado {
  condicion: boolean;
  petsBuscados: Pet[];
}
interface PetsState {
  allPets: Pet[];
  pets: Pet[];
  filtros: Filtros;
  buscado: Buscado;
  petDetalle: {
    User: User;
    Pet: Pet;
  };
  favPets: Pet[];
  petsImage: string;
  publications: Pet[];
}
const initialState: PetsState = {
  allPets: [],
  pets: [],
  filtros: {
    tamaño: 'todos',
    especie: 'todos',
    edad: 'defecto',
    provincia: 'Provincias',
    localidad: 'Localidades',
    date: 'defecto',
    sexo: 'todos'
  },
  buscado: {
    condicion: false,
    petsBuscados: []
  },
  petDetalle: {
    User: {
      id: -2,
      name: '',
      image: '',
      email: '',
      loggedIn: false,
      password: '',
      rol: ''
    },
    Pet: {
      id: -1,
      name: '',
      image: '',
      age: 0,
      description: '',
      size: '',
      healthBook: false,
      animal: '',
      active: false,
      province: '',
      location: '',
      sex: '',
      createdAt: '',
      UserId: 0
    }
  },
  favPets: [],
  petsImage: '',
  publications: []
};
interface tipoFiltro {
  nombre: string;
  valor: string;
}

const PetsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setAllPets: (state, action: PayloadAction<Pet[]>) => {
      state.allPets = action.payload;
      state.pets = action.payload;
    },
    setFiltros: (state, action: PayloadAction<tipoFiltro>) => {
      const { nombre, valor } = action.payload;
      state.filtros[nombre as keyof Filtros] = valor;
    },
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.pets = action.payload;
    },
    setBuscado: (state, action: PayloadAction<Pet[]>) => {
      state.buscado.condicion = true;
      state.pets = action.payload;
      state.buscado.petsBuscados = action.payload;
    },
    setHome: (state) => {
      state.buscado.condicion = false;
      state.buscado.petsBuscados = [];
      state.pets = [...state.allPets];
    },
    setPetDetalle: (state, action: PayloadAction<{ User: User; Pet: Pet }>) => {
      state.petDetalle = action.payload;
    },

    setAllFavorties: (state, action: PayloadAction<Pet[]>) => {
      state.favPets = action.payload;
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      state.favPets = state.favPets.filter((pet) => pet.id !== action.payload);
    },
    setReset: (state) => {
      state.filtros = initialState.filtros;
    },
    setImagePet: (state, action: PayloadAction<string>) => {
      state.petsImage = action.payload;
    },
    setPublications: (state, action: PayloadAction<Pet[]>) => {
      state.publications = action.payload;
    }
  }
});

export const {
  setAllPets,
  setFiltros,
  setPets,
  setBuscado,
  setHome,
  setPetDetalle,
  setAllFavorties,
  deleteFavorite,
  setReset,
  setImagePet,
  setPublications
} = PetsSlice.actions;

export default PetsSlice.reducer;
