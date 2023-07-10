import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rankApi = createApi({
  reducerPath: "rankApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getRandomWords: builder.mutation({
      query: (score) => ({
        url: `/api/rank`,
        method: "POST",
        body: { score: score },
      }),
    }),
  }),
});

export const { useGetRandomWordsQuery, useGetRandomWordsMutation } = rankApi;
