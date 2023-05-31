import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = { token: '' };
const tokenSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = '';
    },
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const tokenReducer = tokenSlice.reducer;
export const persistedtokenReducer = persistReducer(persistConfig, tokenReducer);
export const { addToken, deleteToken } = tokenSlice.actions;
