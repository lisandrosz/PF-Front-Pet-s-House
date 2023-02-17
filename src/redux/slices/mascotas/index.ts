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

interface PetsState {
  allPets: Pet[];
  pets: Pet[];
}

const initialState: PetsState = {
  allPets: [],
  pets: []
};

const PetsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setAllPets: (state, action: PayloadAction<[]>) => {
      state.allPets = action.payload;
      state.pets = action.payload;
    }
  }
});

export const { setAllPets } = PetsSlice.actions;

export default PetsSlice.reducer;
