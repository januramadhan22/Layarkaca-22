import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App";
import Home from "./pages";
import Favorites from "./pages/favorites";
import DetailMovie from "./pages/detail-mov";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DetailMovie />
  </React.StrictMode>
);
