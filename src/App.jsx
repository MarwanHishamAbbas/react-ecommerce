import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/UI/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import { fetchProductsData } from "./store/store-actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.cart.isVisible);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <Layout>
      <Navigation />
      <ScrollToTop />
      {isVisible && <Cart />}
      <Routes>
        <Route path="products/*" element={<Products />} />
        <Route path="productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
