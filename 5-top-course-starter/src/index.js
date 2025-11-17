import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer/>  // ToastContainer should be placed here to be accessible throughout the app
  </React.StrictMode>
);
