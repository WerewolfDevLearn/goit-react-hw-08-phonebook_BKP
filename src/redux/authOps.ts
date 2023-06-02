import { createAsyncThunk } from '@reduxjs/toolkit';
import { userRegister, userLogin, userLogOut, getCurrentUser, token } from '../services/authAxApi';
import { ILogin, IUser, Icredentials, IOUser } from '../types';
import axios from 'axios';

export const register = createAsyncThunk(
  'user/Register',
  async (user: IUser, { rejectWithValue }) => {
    try {
      const credentials = await userRegister(user);
      const response = {
        email: credentials.user.email,
        name: credentials.user.name,
        token: credentials.token,
      };
      token.set(credentials.token);
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        return rejectWithValue(error.message);
      }
      console.error(error);
    }
  },
);
export const Userlogin = createAsyncThunk(
  'user/Login',
  async (loginU: ILogin, { rejectWithValue }) => {
    try {
      const credentials = await userLogin(loginU);
      const response = {
        email: credentials.user.email,
        name: credentials.user.name,
        token: credentials.token,
      };
      token.set(credentials.token);
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        return rejectWithValue(error.message);
      }
      console.error(error);
    }
  },
);
export const logOut = createAsyncThunk('user/LogOut', async (_, { rejectWithValue }) => {
  try {
    const credentials = await userLogOut();
    token.unset();
    return credentials;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const getCurrent = createAsyncThunk(
  'user/GetCurrent',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token: persistedToken },
      } = getState();

      if (!persistedToken) {
        return;
      }
      token.set(persistedToken);
      const credentials = await getCurrentUser();

      return credentials;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        return rejectWithValue(error.message);
      }
      console.error(error);
    }
  },
);
