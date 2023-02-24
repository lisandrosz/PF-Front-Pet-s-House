import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, Draft } from '@reduxjs/toolkit';

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
    createPet: (state, action: PayloadAction<Draft<Pet>>) => {
      state.pets.push(action.payload);
      state.allPets.push(action.payload);
    }
  }
});

export const {
  setAllPets,
  setFiltros,
  setPets,
  setBuscado,
  setHome,
  createPet
} = PetsSlice.actions;

export default PetsSlice.reducer;
