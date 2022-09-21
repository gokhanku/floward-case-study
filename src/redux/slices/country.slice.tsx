import { createSlice } from "@reduxjs/toolkit";
import { Constants } from "../../core/variables/constants";
import { countryAction } from "../actions/country.actions";

interface CountryState {
  loading: boolean;
  error:any;
  success:boolean;
  countries:any[]

}

const initialState:CountryState = {
  loading: false,
  error: null,
  success: false,
  countries:[]
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.countries = payload
      })
      .addCase(countryAction.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(countryAction.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
        state.countries = [];
      });
  },
});

export default countrySlice.reducer;
