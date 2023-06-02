import { createSlice } from '@reduxjs/toolkit';
import { register, Userlogin, logOut, getCurrent } from './authOps';
import { IUserState } from '../types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: IUserState = {
  email: '',
  name: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => action.payload)
      .addCase(Userlogin.fulfilled, (state: IUserState, action) => action.payload)
      .addCase(getCurrent.fulfilled, (state: IUserState, action) => {
        return {
          ...state,
          email: action.payload!.email,
          name: action.payload!.name,
        };
      })
      .addCase(logOut.fulfilled, () => initialState);
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const userReducer = userSlice.reducer;
export const persistedUserReducer = persistReducer(persistConfig, userReducer);
