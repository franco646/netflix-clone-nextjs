import { createReducer } from "@reduxjs/toolkit";
import {
  moviesRequest,
  moviesRequestSuccess,
  moviesRequestFailure,
  setMoviesGenres,
} from "../actions/moviesCommon.actions";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  genres: [],
};

const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(moviesRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(moviesRequestSuccess, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    })
    .addCase(moviesRequestFailure, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(setMoviesGenres, (state, action) => {
      state.genres = action.payload;
    });
});

export default modalReducer;
