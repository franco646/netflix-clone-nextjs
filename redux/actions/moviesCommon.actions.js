import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchMoviesByTrending,
  fetchNetflixOriginalSeries,
  fetchMoviesByGenre,
  fetchMoviesGenres,
  fetchTvSeriesGenres,
  fetchTvSeriesByGenre,
  fetchUpcomingMovies,
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

export const setBrowseLink = createAction(
  "movies/setBrowseLink",
  (browseLink) => ({
    payload: browseLink,
  })
);

export const getTvSeries = createAsyncThunk(
  "movies/getTvSeries",
  async (_, { dispatch }) => {
    dispatch(moviesRequest());
    try {
      const genres = await fetchTvSeriesGenres();
      dispatch(setMoviesGenres(genres));
      const tvSeriesByGenre = await fetchTvSeriesByGenre(genres);
      dispatch(moviesRequestSuccess(tvSeriesByGenre));
    } catch (error) {
      dispatch(moviesRequestFailure);
    }
  }
);

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, { dispatch }) => {
    dispatch(moviesRequest());
    try {
      const genres = await fetchMoviesGenres();
      dispatch(setMoviesGenres(genres));
      const moviesByGenre = await fetchMoviesByGenre(genres);
      dispatch(moviesRequestSuccess(moviesByGenre));
    } catch (error) {
      dispatch(moviesRequestFailure);
    }
  }
);

export const getTopMovies = createAsyncThunk(
  "movies/getTopMovies",
  async (_, { dispatch }) => {
    dispatch(moviesRequest());
    try {
      const topMovies = await fetchMoviesByTrending(
        "movie",
        "Las películas más populares hoy"
      );
      const topTvSeries = await fetchMoviesByTrending(
        "tv",
        "Las series más populares hoy"
      );
      const upcomingMovies = await fetchUpcomingMovies();
      dispatch(
        moviesRequestSuccess([...topMovies, ...topTvSeries, ...upcomingMovies])
      );
    } catch (error) {
      dispatch(moviesRequestFailure);
    }
  }
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
