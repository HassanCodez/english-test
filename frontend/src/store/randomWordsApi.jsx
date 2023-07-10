import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const randomWordApi = createApi({
  reducerPath: 'randomWordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getRandomWords: builder.query({
      query: () => `/api/wordList`,
    }),
  }),
})

export const { useGetRandomWordsQuery } = randomWordApi

