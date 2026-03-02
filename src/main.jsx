import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AiWorkshop from "./pages/AiWorkshop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ai-workshop" element={<AiWorkshop />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
