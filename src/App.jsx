import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
function App() {
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
