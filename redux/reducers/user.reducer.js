import { createReducer } from "@reduxjs/toolkit";
import {
  userLoginError,
  userLoginSuccess,
  userLoginRequest,
  userSelectProfile,
  userLogout,
} from "../actions/user.actions";

const initialState = {
  isLogged: false,
  isLogginIn: false,
  selectedProfile: null,
  loginError: null,
  profiles: [],
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userLoginRequest, (state) => {
      state.isLogginIn = true;
    })
    .addCase(userLoginSuccess, (state, action) => {
      state.isLogginIn = false;
      state.isLogged = true;
      state.profiles = action.payload.profiles;
    })
    .addCase(userSelectProfile, (state, action) => {
      state.selectedProfile = action.payload;
    })
    .addCase(userLogout, (state) => {
      state.isLogged = false;
      state.profiles = [];
      state.selectedProfile = null;
    })
    .addCase(userLoginError, (state, action) => {
      state.isLogged = false;
      state.profiles = [];
      state.selectedProfile = null;
      state.loginError = action.payload;
    });
});

export default userReducer;
