import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'types';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user: IUser) => ({
        url: `/users/signup`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
      //   transformResponse: (response: { data }, meta, arg) => response.data,
    }),
  }),
});
