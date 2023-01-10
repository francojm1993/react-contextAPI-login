import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Importamos los módulos necesarios de React-Router-DOM:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductosRoute from "./routes/ProductosRoute";
import RegisterRoute from "./routes/RegisterRoute";
import HomeRoute from "./routes/HomeRoute";
import ErrorRoute from "./routes/ErrorRoute";
import LoginRoute from "./routes/LoginRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeRoute />} />
          <Route path="/productos" element={<ProductosRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
          <Route path="login" element={<LoginRoute />} />
          <Route path="*" element={<ErrorRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
