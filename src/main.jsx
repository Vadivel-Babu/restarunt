import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OrderContext from "./Ordercontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrderContext>
      <App />
    </OrderContext>
  </StrictMode>
);
