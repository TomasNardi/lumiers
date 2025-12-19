import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from './router'
import "./index.css";
import { ShopCartProvider} from "./context/shopcart";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShopCartProvider>
      <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
        <Router />
      </BrowserRouter>
    </ShopCartProvider>
  </React.StrictMode>
);
