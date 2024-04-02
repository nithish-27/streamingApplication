import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ResponsiveAppBar from "./components/NavBar.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <App />
  </React.StrictMode>
);
