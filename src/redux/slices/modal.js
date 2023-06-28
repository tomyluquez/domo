import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  idClient: null,
  reference: null,
  idAct: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = action.payload.type;
      state.reference = action.payload.referencia;
      state.idClient = action.payload.id;
      state.idAct = action.payload.idAct;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
