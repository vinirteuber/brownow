import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </BrowserRouter>
);


