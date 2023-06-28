import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientes: [],
  filteredClientes: [],
};

export const clientesSlice = createSlice({
  name: "clientes",
  initialState,
  reducers: {
    addClients: (state, action) => {
      if (action.payload) {
        state.clientes = action.payload.data;
        state.filteredClientes = action.payload.data;
      }
    },
    filters: (state, action) => {
      state.filteredClientes = action.payload;
    },
  },
});

export const { addClients, filters } = clientesSlice.actions;
export default clientesSlice.reducer;
