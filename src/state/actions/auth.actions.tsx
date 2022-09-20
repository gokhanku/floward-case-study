import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Constants } from "../../core/variables/constants";
import { enviroment } from "../../core/variables/enviroment";
import { LoginPayload } from "../../models/login-payload";

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

      localStorage.setItem(Constants.TOKEN, data.token);
      if (loginPayload.rememberMe) {
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


