import { BusyIndicator, FlexBox, Title } from "@ui5/webcomponents-react";
import { SearchBar } from "../components/modules/search-bar";
import { Movie } from "../components/modules/movie";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetMovie, toggleFavorite } from "../store/movies-store/actions";
import { searchMovieAsync } from "../store/movies-store/movie-slice";

export const HomeView = () => {
  const dispatch = useAppDispatch();

  const movie = useAppSelector((state: any) => state.movies.movie);
  const loading = useAppSelector((state: any) => state.movies.loading);
  const error = useAppSelector((state: any) => state.movies.error);
  const favorites = useAppSelector((state: any) => state.movies.favorites);

  const onReset = () => {
    dispatch(resetMovie());
  };

  const onSearch = async (title: string) => {
    try {
      dispatch(searchMovieAsync(title) as any);
    } catch (error) {
      console.error(error);
    }
  };

  const onFavorite = async (movieId: string) => {
    dispatch(toggleFavorite({ movieId }));
  };

  return (
    <FlexBox
      alignItems="Center"
      direction="Column"
      justifyContent="Center"
      wrap="Wrap"
      id="homeView"
    >
      <Title level="H2">Movies Search</Title>
      <SearchBar onSearch={onSearch} onReset={onReset} />
      {loading ? (
        <BusyIndicator active />
      ) : error ? (
        <p>Not found</p>
      ) : !movie ? (
        <p>Search for a Movie title</p>
      ) : (
        <Movie
          movie={movie}
          onFavorite={onFavorite}
          isFavorite={favorites.includes(movie?.id)}
        />
      )}
    </FlexBox>
  );
};
