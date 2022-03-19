import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/UI/ScrollToTop";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  fetchCartData,
  fetchProductsData,
  sendCartData,
} from "./store/store-actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.cart.isVisible);
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Layout>
      <Navigation />
      <ScrollToTop />

      {isVisible && <Cart />}

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="products/*" element={<Products />} />
          <Route
            path="productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Layout>
  );
}

export default App;
