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

interface UsersState {
  allUsers: User[];
  users: User[];
}

const initialState: UsersState = {
  allUsers: [],
  users: []
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
    }
  }
});

export const { setAllUsers, setUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
