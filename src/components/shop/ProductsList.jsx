import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className=" py-16 px-0 sm:py-24">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.title}
            imageSrc={product.src}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
