import { createReducer } from "@reduxjs/toolkit";
import {
  setModalVisibility,
  setModalPosition,
  setModalData,
} from "../actions/modal.actions";

const initialState = {
  position: {},
  visibility: "hidden",
  modalData: {},
};

const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setModalPosition, (state, action) => {
      state.position = action.payload;
    })
    .addCase(setModalVisibility, (state, action) => {
      state.visibility = action.payload;
    })
    .addCase(setModalData, (state, action) => {
      state.modalData = action.payload;
    });
});

export default modalReducer;
