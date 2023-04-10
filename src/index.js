import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import  CategoriesProvider  from "./context/CategoriesContext";
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CategoriesProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </CategoriesProvider>
);
