import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enviroment } from "../../core/variables/enviroment";

export const countryAction = createAsyncThunk(
  "country/all",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${enviroment.COUNTRY_BASE_URL}/all`);
      console.log('data',data);
      
      return data;
    } catch (error: any) {
      debugger;
      if (error.response && error.response.data.message) {
        return rejectWithValue(error?.response.data.message);
      } else {
        return rejectWithValue(error?.message);
      }
    }
  }
);


