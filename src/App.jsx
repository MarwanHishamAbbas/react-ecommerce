import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";
import Products from "./pages/Products";
function App() {
  return (
    <Layout>
      <Navigation />
      <Products />
    </Layout>
  );
}

export default App;
