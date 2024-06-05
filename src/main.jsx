import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllProductsProvider from "./context/AllProductsProvider.jsx";
import { Provider } from "react-redux";
import Store from "./redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProductsProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </AllProductsProvider>
  </React.StrictMode>
);
