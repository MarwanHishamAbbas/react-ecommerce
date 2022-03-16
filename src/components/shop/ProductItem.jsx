import { Link } from "react-router-dom";

const ProductItem = ({ id, name, imageSrc, imageAlt, price, color }) => {
  return (
    <div key={id} className="group relative">
      <div className="w-full min-h-80 bg-gray-dark rounded-md overflow-hidden lg:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base font-semibold">
            <Link to={`/productDetails/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-gray-dark">{color}</p>
        </div>
        <p className="text-base font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
