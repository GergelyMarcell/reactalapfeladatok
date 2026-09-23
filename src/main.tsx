import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Homerseklet from "./pages/Homerseklet.tsx";
// import Szamologep from "./pages/Szamologep.tsx";
// import BMI from "./pages/BMI.tsx";
import Penzvalto from "./pages/Penzvalto.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Homerseklet /> */}
    {/* <Szamologep /> */}
    {/* <BMI /> */}
    <Penzvalto />
  </StrictMode>,
);
