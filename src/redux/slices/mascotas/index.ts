import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
  provincia: string;
  localidad: string;
  zona: string;
}

// interface Zona {
//   provincia: string;
//   localidad: string;
//   zona: string;
// }

export interface Filtros {
  tamaño: string;
  especie: string;
  edad: string;
  provincia: string;
  tiempo: string;
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
  petDetalle: Pet;
  favPets: Pet[];
}

const initialState: PetsState = {
  allPets: [],
  pets: [],
  filtros: {
    tamaño: 'todos',
    especie: 'todos',
    edad: 'defecto',
    // zona: { provincia: 'todas', localidad: 'todas', zona: 'todas ' },
    provincia: 'todas',
    tiempo: 'defecto'
  },
  buscado: {
    condicion: false,
    petsBuscados: []
  },
  petDetalle: {
    id: -1,
    name: '',
    image: '',
    age: 0,
    description: '',
    size: '',
    healthBook: false,
    animal: '',
    active: false,
    provincia: '',
    localidad: '',
    zona: ''
  },
  favPets: []
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
    setPetDetalle: (state, action: PayloadAction<Pet>) => {
      state.petDetalle = action.payload;
    },
    setFavortie: (state, action: PayloadAction<Pet>) => {
      state.favPets.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      state.favPets = state.favPets.filter((pet) => pet.id !== action.payload);
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
  setFavortie,
  deleteFavorite
} = PetsSlice.actions;

export default PetsSlice.reducer;
