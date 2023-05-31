import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ILogin } from '../types';
import { RootState } from './store';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userToken.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user: IUser) => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: (login: ILogin) => ({
        url: 'users/login',
        method: 'POST',
        body: login,
      }),
      invalidatesTags: ['User'],
    }),
    logoutUseer: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUseer: builder.query<void, void>({
      query: () => ({
        url: 'users/current',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUseerMutation,
  useGetCurrentUseerQuery,
} = authApi;
