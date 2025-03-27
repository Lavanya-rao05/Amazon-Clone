import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./Context/CartContext.jsx";
import { OrdersProvider } from "./Context/OrdersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <OrdersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OrdersProvider>
  </CartProvider>
);
