import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { createWrapper } from "next-redux-wrapper";

import storage from "redux-persist/lib/storage";

import modalReducer from "./reducers/modal.reducer";
import moviesReducer from "./reducers/movies.reducer";
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  movies: moviesReducer,
  user: userReducer,
});

const makeStore = (context) => {
  const persistConfig = {
    key: "root",
    storage,
    whitelist: "user",
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  store.__persistor = persistStore(store);
  return store;
};

export const wrapper = createWrapper(makeStore);
