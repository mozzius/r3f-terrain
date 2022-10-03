import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Leva } from "leva";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Leva />
    <App />
  </StrictMode>
);
