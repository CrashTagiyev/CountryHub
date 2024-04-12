import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CountryAPI } from "../Service/CountryService";

const rootReducer = combineReducers({
    [CountryAPI.reducerPath]: CountryAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: () => string | any[]) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(CountryAPI.middleware),
  });
};


