import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryListing from "./pages/country-listing";
import CountryDetails from "./pages/country-detail";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import ProtectedRoute from "./core/routes/protected-route";
import PublicRoute from "./core/routes/public-route";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <CountryListing />
          </ProtectedRoute>
        }
      ></Route>
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
