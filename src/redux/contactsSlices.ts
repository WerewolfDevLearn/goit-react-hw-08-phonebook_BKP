import { createSlice } from '@reduxjs/toolkit';
import { IContactsState } from '../types';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const initialState: IContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = [...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => action.payload.id !== item.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addMatcher;
  },
});

export const contactReduser = contactsSlice.reducer;

// export const { Add, Remove } = contactsSlice.actions;
//  reducer(state, action: PayloadAction<IContact>) {
//       state.items.push(action.payload);
//     },
//     prepare({ person, number }) {
//       return {
//         payload: {
//           // id: nanoid(),
//           name: person,
//           number,
//         },
//       };
//     },
// Remove(state, action) {
//       return state.filter(({ id }) => id !== action.payload);
//     },
