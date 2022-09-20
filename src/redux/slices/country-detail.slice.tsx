import { createSlice } from "@reduxjs/toolkit";
import { countryDetailAction } from "../actions/country-detail.actions";


const initialState = {
  loading: false,
  error: null,
  success: false,
  countryDetail:null
};

const countryDetailSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryDetailAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.countryDetail = payload
      })
      .addCase(countryDetailAction.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(countryDetailAction.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
        state.countryDetail = null;
      });
  },
});

export default countryDetailSlice.reducer;