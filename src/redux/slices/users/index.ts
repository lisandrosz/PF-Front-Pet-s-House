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
  userImage: string;
  logged: boolean;
  userDetail: User;
}

const initialState: UsersState = {
  allUsers: [],
  users: [],
  userImage: '',
  logged: false,
  userDetail: {
    id: -1,
    name: '',
    email: '',
    password: '',
    image: '',
    loggedIn: false,
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
    setImageUser: (state, action: PayloadAction<string>) => {
      state.userImage = action.payload;
    },
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.logged = action.payload;
    },
    setUserDetail: (state, action: PayloadAction<User>) => {
      state.userDetail = action.payload;
    },
    putUserDetail: (state, action: PayloadAction<User>) => {
      state.userDetail = action.payload;
    }
  }
});

export const {
  setAllUsers,
  setUsers,
  setImageUser,
  setLogged,
  setUserDetail,
  putUserDetail
} = UsersSlice.actions;

export default UsersSlice.reducer;
