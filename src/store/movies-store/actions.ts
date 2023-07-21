import { createAction } from "@reduxjs/toolkit";

export const toggleFavorite = createAction<{ movieId: string }>(
  "movies/toggleFavorite"
);

export const searchMovie = createAction<{ title: string }>(
  "movies/searchMovie"
);

export const resetMovie = createAction("movies/resetMovie");
