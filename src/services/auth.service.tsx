import { AxiosPromise } from "axios";
import { AxiosHttpClient } from "../core/interceptors/axios-http-client";
import { LoginPayload } from "../models/login-payload";
import { LoginResponse } from "../models/login-response";

const login =  async (payloads: LoginPayload)=> {
  return await AxiosHttpClient({
    url: "/login",
    method: "POST",
    data: {
      email: payloads.email,
      password: payloads.password,
    }
  })
};

export const AuthService = {
  login
};
