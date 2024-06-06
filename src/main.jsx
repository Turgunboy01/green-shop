import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllProductsProvider from "./context/AllProductsProvider.jsx";
import { Provider } from "react-redux";
import Store from "./redux/Store.jsx";
import AuthProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProductsProvider>
      <Provider store={Store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </AllProductsProvider>
  </React.StrictMode>
);
