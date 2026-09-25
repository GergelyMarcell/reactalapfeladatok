import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Penzvalto from "./pages/Penzvalto.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap.tsx";
import Homerseklet from "./pages/Homerseklet.tsx";
import BMI from "./pages/BMI.tsx";
import Szamologep from "./pages/Szamologep.tsx";
import Notfound from "./pages/Notfound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kezdolap />} />
        <Route path="/homerseklet" element={<Homerseklet />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
