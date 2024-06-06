import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductDetails from "./pages/productDetails/ProductDetails";
// import Cart from "./components/popularProducts/cart/Cart";
import ScrollTop from "./components/scrollToTop/ScrollTop";
import Cart from "./pages/cart/Cart";
import CartOrder from "./pages/CartOrder/CartOrder";
import UserPage from "./pages/userPage/UserPage";
import Shop from "./pages/shop/Shop";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <div className="pt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/product/:id" element={<ProductDetails />} />
            <Route path="/shop/cart" element={<Cart />} />

            <Route path="/order" element={<CartOrder />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
