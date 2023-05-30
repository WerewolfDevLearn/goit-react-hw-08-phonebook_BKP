import { configureStore } from '@reduxjs/toolkit';
import { contactReduser } from './contactsSlices';
import { filterReducer } from './filterSlices';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
