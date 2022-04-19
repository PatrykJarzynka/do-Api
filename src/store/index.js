import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import contactsReducer from "../features/contactsSlice";

import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { getPersistConfig } from "redux-deep-persist";

const reducers = combineReducers({
  auth: authReducer,
  data: contactsReducer,
});

const persistConfig = getPersistConfig({
  key: "root",
  storage: localStorage,
  blacklist: ["auth.loading"],
  rootReducer: reducers,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
