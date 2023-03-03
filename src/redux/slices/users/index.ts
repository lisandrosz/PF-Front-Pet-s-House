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

export interface UsersState {
  allUsers: User[];
  users: User[];
  userDetail: User;
}

const initialState: UsersState = {
  allUsers: [],
  users: [],
  userDetail: {
    id: -1,
    name: '',
    image: '',
    email: '',
    loggedIn: false,
    password: '',
    rol: ''
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
    setUserDetail: (state, action: PayloadAction<User>) => {
      state.userDetail = action.payload;
    },
    putUserDetail: (state, action: PayloadAction<User>) => {
      state.userDetail = action.payload;
    }
  }
});

export const { setAllUsers, setUsers, setUserDetail, putUserDetail } =
  UsersSlice.actions;

export default UsersSlice.reducer;
