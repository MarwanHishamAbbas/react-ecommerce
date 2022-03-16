import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { fetchProductsData } from "./store/store-actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <Layout>
      <Navigation />
      <Routes>
        <Route path="products/*" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
