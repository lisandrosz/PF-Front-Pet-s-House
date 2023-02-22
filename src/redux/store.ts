import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import PetsSlice from './slices/mascotas';
import UsersSlice from './slices/users';

const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: PetsSlice,
    users: UsersSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
