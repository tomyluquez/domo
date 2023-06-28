import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "./slices/modal";
import clientesReducer from "./slices/clientes";

const clientsPersistConfig = {
  key: "clients",
  version: 1,
  storage,
};

const persistedCart = persistReducer(clientsPersistConfig, clientesReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    clientes: persistedCart,
  },
});

export const persistor = persistStore(store);
