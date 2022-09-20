import { AxiosHttpClient } from "../core/interceptors/axios-http-client";

const getCountries = () => {
  return AxiosHttpClient({
    url: "/all",
    method: "GET",
  });
};

const getCountryDetail = (alphaCode:string) => {
    return AxiosHttpClient({
      url: `alpha/${alphaCode}`,
      method: "GET",
    });
  };

export const CountryService = {
    getCountries,
    getCountryDetail
};
