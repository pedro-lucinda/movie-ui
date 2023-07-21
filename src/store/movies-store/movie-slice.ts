import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from ".";
import { api } from "../../config/services/axios";

export interface MoviesState {
  favorites: string[];
  movie: IMovie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  favorites: [],
  movie: null,
  loading: false,
  error: null,
};

export const searchMovieAsync = createAsyncThunk<IMovie, string, {}>(
  "movies/searchMovie",
  async (title, thunkAPI) => {
    try {
      const response = await api.get<IMovie>(`/movies?title=${title}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<{ movieId: string }>) {
      const index = state.favorites.indexOf(action.payload.movieId);
      if (index >= 0) {
        // The movie is already a favorite, remove it
        state.favorites.splice(index, 1);
      } else {
        // The movie is not a favorite, add it
        state.favorites.push(action.payload.movieId);
      }
    },

    resetMovie(state) {
      state.movie = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovieAsync.pending, (state) => {
        state.movie = null;
        state.error = null;

        state.loading = true;
      })
      .addCase(searchMovieAsync.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.loading = false;
      })
      .addCase(searchMovieAsync.rejected, (state, action) => {
        console.error(action.error);
        state.movie = null;
        state.loading = false;
        state.error = "Not found";
      });
  },
});

export default moviesSlice.reducer;
