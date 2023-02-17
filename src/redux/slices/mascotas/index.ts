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

interface Zona {
  provincia: string;
  localidad: string;
  zona: string;
}

interface Filtros {
  tamaño: string;
  especie: string;
  edad: number;
  zona: Zona;
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
    tamaño: 'todos',
    especie: 'todas',
    edad: 0,
    zona: { provincia: 'todas', localidad: 'todas', zona: 'todas ' }
  }
};

const PetsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setAllPets: (state, action: PayloadAction<Pet[]>) => {
      state.allPets = action.payload;
      state.pets = action.payload;
    }
  }
});

export const { setAllPets } = PetsSlice.actions;

export default PetsSlice.reducer;
