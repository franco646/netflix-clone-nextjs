import { createReducer } from "@reduxjs/toolkit";
import {
  moviesRequest,
  moviesRequestSuccess,
  moviesRequestFailure,
  setMoviesGenres,
  setBrowseLink,
} from "../actions/moviesCommon.actions";

const initialState = {
  movies: [],
  genres: [],
  billboardMovie: [],
  isLoading: false,
  error: null,
  browseLink: "/",
};

const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(moviesRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(moviesRequestSuccess, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
      state.billboardMovie =
        action.payload[0].movies[
          Math.floor(Math.random() * action.payload[0].movies.length)
        ];
    })
    .addCase(setBrowseLink, (state, action) => {
      state.browseLink = action.payload;
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
