import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VSignup from "./components/vendor/VSignup.jsx";
import VLogin from "./components/vendor/VLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<VSignup />} />
          <Route path="login" element={<VLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
