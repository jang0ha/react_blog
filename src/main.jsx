import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/tailwind.css";
import App from "./App.jsx";
import axios from "axios";

axios.defaults.baseURL = "https://portfolio-2026-backend.vercel.app/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
