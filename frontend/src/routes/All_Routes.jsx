import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const All_Routes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
    </Routes>
  );
};
