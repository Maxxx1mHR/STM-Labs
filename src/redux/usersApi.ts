import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@type/interfaces/user.interface';

const _api = 'https://randomuser.me/api/';

interface IResponse {
  results: [IUser];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${_api}` }),
  endpoints: (build) => ({
    getUsers: build.query<IResponse, { page: number; count: number }>({
      query: ({ page, count }) => `?page=${page}&results=${count}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
