import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Redirection from "./redirection.jsx";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Redirection />} />
      </Routes>
    </BrowserRouter>
);
