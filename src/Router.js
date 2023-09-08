import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import JoinInfo from "./components/pages/JoinInfo/JoinInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/joinInfo" element={<JoinInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
