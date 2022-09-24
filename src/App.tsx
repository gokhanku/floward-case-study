import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryListing from "./pages/country-listing";
import CountryDetails from "./pages/country-detail";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import HomeLayout from "./components/layouts/main/home-layout";
import LoginRoute from "./routes/login-route";
import DefaultLayout from "./components/layouts/main/default-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index={true} element={<CountryListing />} />
        <Route path="details/:alphaCode" element={<CountryDetails />} />
      </Route>

      <Route path="/login" element={<DefaultLayout />}>
        <Route
          index={true}
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
