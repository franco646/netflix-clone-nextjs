import { configureStore } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";

import modalReducer from "./reducers/modal.reducer";
import moviesReducer from "./reducers/movies.reducer";

// create your reducer
const reducer = {
  modal: modalReducer,
  movies: moviesReducer,
};

const makeStore = (context) => configureStore({ reducer });

export const wrapper = createWrapper(makeStore);
