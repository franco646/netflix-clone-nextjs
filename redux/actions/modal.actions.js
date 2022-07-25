import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const setModalPosition = createAction(
  "modal/setModalPosition",
  (position) => ({ payload: position })
);

export const setModalVisibility = createAction(
  "modal/setModalVisibility",
  (visibility) => ({ payload: visibility })
);

export const setModalData = createAction("modal/setModalData", (data) => ({
  payload: data,
}));

const awaitTimeout = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const showModal = createAsyncThunk(
  "modal/showModal",
  async (data, { dispatch, getState }) => {
    const { movieData, modalPosition } = data;
    const { modal } = getState();
    if (modal.visibility === "visible") {
      await dispatch(closeModal());
    }
    dispatch(setModalData(movieData));
    dispatch(setModalPosition(modalPosition));
    dispatch(setModalVisibility("visible"));
  }
);

export const closeModal = createAsyncThunk(
  "modal/closeModal",
  async (_, { dispatch }) => {
    await awaitTimeout(300);
    dispatch(setModalData({}));
    dispatch(setModalPosition({}));
    dispatch(setModalVisibility("hidden"));
  }
);
