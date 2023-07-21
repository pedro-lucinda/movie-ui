import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies-store/movie-slice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
