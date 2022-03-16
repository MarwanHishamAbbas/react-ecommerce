import { productsActions } from "./products-slice";

export const fetchProductsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-ecommerce-8e71d-default-rtdb.firebaseio.com/products.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetch Products Failed");
      }
      return data;
    };
    try {
      const ProductsData = await fetchData();
      dispatch(productsActions.replaceProducts(ProductsData));
    } catch (error) {
      console.log(error);
    }
  };
};
