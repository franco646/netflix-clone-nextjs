import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchMoviesByTrending,
  fetchNetflixOriginalSeries,
  fetchMoviesByGenre,
  fetchMoviesGenres,
} from "../../api";

export const moviesRequest = createAction("movies/Request");

export const moviesRequestSuccess = createAction(
  "movies/RequestSuccess",
  (movies) => ({
    payload: movies,
  })
);

export const moviesRequestFailure = createAction(
  "movies/RequestFailure",
  (error) => ({
    payload: error,
  })
);

export const setMoviesGenres = createAction(
  "movies/setMoviesGenres",
  (genres) => ({
    payload: genres,
  })
);

export const getBrowseMovies = createAsyncThunk(
  "movies/getBrowseMovies",
  async (_, { dispatch }) => {
    dispatch(moviesRequest());
    try {
      const genres = await fetchMoviesGenres();
      dispatch(setMoviesGenres(genres));
      const trendingSeries = await fetchMoviesByTrending("tv", "Series");
      const netflixOriginals = await fetchNetflixOriginalSeries();
      const trendingMovies = await fetchMoviesByTrending();
      const moviesByGenre = await fetchMoviesByGenre(genres);
      dispatch(
        moviesRequestSuccess([
          ...netflixOriginals,
          ...trendingSeries,
          ...trendingMovies,
          ...moviesByGenre,
        ])
      );
    } catch (error) {
      dispatch(moviesRequestFailure);
    }
  }
);
