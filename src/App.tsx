import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryListing from "./pages/country-listing";
import CountryDetails from "./pages/country-detail";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import ProtectedRoute from "./hoc/protected-route";
import { Constants } from "./core/variables/constants";
import PublicRoute from "./hoc/public-route";

function App() {
  const token = localStorage.getItem(Constants.TOKEN);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <CountryListing />
          </ProtectedRoute>
        }
      >
        {/* <Route path="details/:alphaCode" element={<CountryDetails/>} /> */}
      </Route>
      <Route
        path="details/:alphaCode"
        element={
          <ProtectedRoute>
            <CountryDetails />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
