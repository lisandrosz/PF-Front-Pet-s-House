import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Pet {
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

interface Filtros {
  tamaño: string;
  especie: string;
  edad: string;
  zona: string;
}

interface PetsState {
  allPets: Pet[];
  pets: Pet[];
  filtros: Filtros;
}

const initialState: PetsState = {
  allPets: [],
  pets: [],
  filtros: {
    tamaño: 'defecto',
    especie: 'defecto',
    edad: 'defecto',
    // zona: { provincia: 'todas', localidad: 'todas', zona: 'todas ' },
    zona: 'todas'
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
      // const { nombre, valor } = action.payload;
      // state.filtros[nombre] = valor;
      console.log('hola');
    }
  }
});

export const { setAllPets, setFiltros } = PetsSlice.actions;

export default PetsSlice.reducer;
