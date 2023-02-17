import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import PetsSlice from './slices/mascotas';

const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: PetsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
