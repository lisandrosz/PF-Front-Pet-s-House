import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  acessToken: string | null;
}

const initialState: AuthState = {
  acessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccesToken: (state, action: PayloadAction<string | null>) => {
      state.acessToken = action.payload;
    }
  }
});

export default authSlice.reducer;
