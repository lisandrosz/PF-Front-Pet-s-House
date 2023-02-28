import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  image: string;
  email: string;
  loggedIn: boolean;
  password: string;
  rol: string;
}

interface Donations {
  monto: string;
  date: string;
}

interface UsersState {
  allUsers: User[];
  users: User[];
  donations: Donations;
}

const initialState: UsersState = {
  allUsers: [],
  users: [],
  donations: {
    monto: '',
    date: ''
  }
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAllUsers: (state, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
      state.users = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setDonation: (state, action: PayloadAction<Donations>) => {
      console.log(action.payload);
      state.donations.date = action.payload.date;
      state.donations.monto = action.payload.monto;
    }
  }
});

export const { setAllUsers, setUsers, setDonation } = UsersSlice.actions;

export default UsersSlice.reducer;
