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
  petDetalle: Pet;
}
const initialState: PetsState = {
  allPets: [],
  pets: [],
  filtros: {
    tamaño: 'todos',
    especie: 'todos',
    edad: 'defecto',
    provincia: 'todas',
    localidad: 'todas',
    date: 'defecto',
    sexo: 'todos'
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
  }
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
    setReset: (state) => {
      state.filtros = initialState.filtros;
    },
  }
});

export const {
  setAllPets,
  setFiltros,
  setPets,
  setBuscado,
  setHome,
  setPetDetalle,
  setReset
} = PetsSlice.actions;

export default PetsSlice.reducer;
