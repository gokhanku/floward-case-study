import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Constants } from "../../core/variables/constants";
import { enviroment } from "../../core/variables/enviroment";
import { LoginPayload } from "../../models/login-payload";
import {logout,logoutError,doAuth} from "../slices/auth.slice";



export const loginAction = createAsyncThunk(
  "auth/login",
  async (loginPayload: LoginPayload, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${enviroment.LOGIN_BASE_URL}/login`,
        loginPayload,
        config
      );
      if (loginPayload.rememberMe) {
        localStorage.setItem(Constants.TOKEN, data.token);
        localStorage.setItem(Constants.REMEMBERME, "1");
      }
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error?.response.data.message);
      } else {
        return rejectWithValue(error?.message);
      }
    }
  }
);

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (args,thunkAPI) => {
    try {
      thunkAPI.dispatch(logout())
    } catch (error: any) {
      thunkAPI.dispatch(logoutError(error))
    }
  }
);

export const doAuthAction = createAsyncThunk(
  "auth/doAuth",
  async (args,thunkAPI) => {
    try {
      thunkAPI.dispatch(doAuth())
    } catch (error: any) {
      thunkAPI.dispatch(logoutError(error))
    }
  }
);


