import React from "react";
import ReactDOM from "react-dom/client";
import {App,Resume} from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
