import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { register, Userlogin, logOut, getCurrent } from './authOps';

const initialState = '';
// const errorHandler = (state: string, action: PayloadAction<string, string>) => {
//   state = payload;
// };

const errorSlice = createSlice({
  name: 'Error',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(register.rejected, (state, { payload }) => payload);

    builder.addCase(Userlogin.rejected, (_, action) => {
      return action.payload;
    });
    // builder.addCase(logOut.rejected, (state, { payload }) => payload);
    // builder.addCase(getCurrent.rejected, (state, { payload }) => payload);
  },
});

export const errorReducer = errorSlice.reducer;
