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
import Wishlist from "./pages/wishlist/Wishlist";
import Blog from "./pages/blog/Blog";
import Plant from "./pages/plant/Plant";
import Scaner from "./pages/scaner/Scaner";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <div className="pt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scaner" element={<Scaner />} />
            <Route
              path="/*"
              element={
                <div className="w-full">
                  <img
                    className="w-full h-[400px] object-contain"
                    src="https://img.freepik.com/premium-vector/illustration-error-404-page-found-with-confused-people-big-404-error-text_258153-322.jpg"
                    alt=""
                  />
                </div>
              }
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/plant" element={<Plant />} />
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
