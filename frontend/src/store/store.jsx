import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { randomWordApi } from "./randomWordsApi";
import { rankApi } from "./rankApi";

export const store = configureStore({
  reducer: {
    [randomWordApi.reducerPath]: randomWordApi.reducer,
    [rankApi.reducerPath]: rankApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomWordApi.middleware, rankApi.middleware),
});

setupListeners(store.dispatch);
