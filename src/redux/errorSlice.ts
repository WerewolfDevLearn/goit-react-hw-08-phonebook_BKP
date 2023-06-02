import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logOut, getCurrent } from './authOps';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

// const errorHandler = (state: string, action: PayloadAction<string, string>) => {
//   state = action.payload;
// };

const errorSlice = createSlice({
  name: 'Error',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.rejected, (_, action) => action.payload);
  },
});

export const errorReducer = errorSlice.reducer;
