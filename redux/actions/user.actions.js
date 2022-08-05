import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const userLoginRequest = createAction("user/loginRequest");

export const userLoginSuccess = createAction("user/loginSuccess", (user) => {
  console.log("se llamo a la funcion exitosa", user);
  return {
    payload: user,
  };
});

export const userSelectProfile = createAction(
  "user/selectProfile",
  (profile) => ({
    payload: profile,
  })
);

export const userLoginError = createAction("user/loginError", (error) => ({
  payload: error,
}));

export const userLogout = createAction("user/logout");

export const login = createAsyncThunk(
  "user/login",
  async (data, { dispatch }) => {
    dispatch(userLoginRequest());
    try {
      // const { email, password } = data;
      // send data to server and return user
      const user = {
        //user mock
        profiles: [
          {
            name: "Steve",
            picture: "/profile-picture-1.png",
            id: 1,
          },
          {
            name: "Franco",
            picture: "/profile-picture-2.png",
            id: 2,
          },
          {
            name: "Roser",
            picture: "/profile-picture-3.png",
            id: 3,
          },
        ],
      };
      dispatch(userLoginSuccess(user));
    } catch (error) {
      dispatch(userLoginError(error));
    }
  }
);
