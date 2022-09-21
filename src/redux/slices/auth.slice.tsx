import { createSlice } from "@reduxjs/toolkit";
import { Constants } from "../../core/variables/constants";
import { loginAction } from "../actions/auth.actions";
import { logoutAction } from "../actions/auth.actions";

interface AuthState {
  loading: boolean;
  token:string,
  error:any;
  success:boolean;
  isAuthenticated:boolean

}

const initialState:AuthState = {
  loading: false,
  token: "",
  error: null,
  success: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      localStorage.clear();
    },
    logoutError(state, action) {
      state.isAuthenticated = true;
    },
    doAuth(state) {
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginAction.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(loginAction.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
      });
  },
});
export const { logout, logoutError, doAuth } = authSlice.actions;
export default authSlice.reducer;
