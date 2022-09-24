import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./slices/country.slice";
import authReducer from "./slices/auth.slice";
import countryDetailReducer from "./slices/country-detail.slice";


export const store = configureStore({
  reducer: {
    country: countryReducer,
    countryDetail: countryDetailReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch; // global dispatch type
export type RootState = ReturnType<typeof store.getState>; //global state Type
export default store;
