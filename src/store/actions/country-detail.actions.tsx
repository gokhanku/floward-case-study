import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enviroment } from "../../config/variables/enviroment";

export const countryDetailAction = createAsyncThunk(
  "country/detail",
  async (alphaCode:string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${enviroment.COUNTRY_BASE_URL}/alpha/${alphaCode}`);
      return data[0];
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error?.response.data.message);
      } else {
        return rejectWithValue(error?.message);
      }
    }
  }
);