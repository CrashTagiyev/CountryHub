import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CountryAPI = createApi({
  reducerPath: `countries`,
  baseQuery: fetchBaseQuery({ baseUrl: `https://restcountries.com/v3.1` }),
  endpoints: (build: {query: (arg0: { query: (limit: number) => { url: string; params: { _limit: number; }; }; providesTags: (result: any) => string[]; }) => any; }) => ({
    fetchAllCountries: build.query({
      query: (limit:number) => ({
        url: "/all",
        params: {
          _limit:limit,
        },
      }),
      providesTags: (result: any) => ["Countries"],
    }),
  }),
});
