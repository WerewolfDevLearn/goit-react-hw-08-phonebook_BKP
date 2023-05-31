import { configureStore } from '@reduxjs/toolkit';
import { contactReduser } from './contactsSlices';
import { filterReducer } from './filterSlices';
import { useDispatch } from 'react-redux';
import { authApi } from './authApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistedtokenReducer } from './authslice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    userToken: persistedtokenReducer,
    [authApi.reducerPath]: authApi.reducer,
    contacts: contactReduser,
    filter: filterReducer,
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
