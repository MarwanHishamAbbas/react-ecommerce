import heroImg from "../assets/hero.png";
import brands from "../assets/brands.svg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="flex-col flex sm:flex-row justify-between">
        <div className="flex flex-col justify-evenly order-1 sm:order-none mt-10 sm:mr-10">
          <div>
            <span className="text-blue font-bold text-sm">Sale 70%</span>
            <h1 className="text-5xl font-bold mt-5 mb-8">
              An Industrial Take on Streetwear
            </h1>
            <p className="text-base text-gray-dark">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <Link
              to="/products/popular"
              className="mt-6 mb-16  w-full md:w-3/2 lg:w-1/2 bg-black border border-none rounded-md py-4 flex items-center justify-center text-base font-semibold text-white hover:bg-gray-dark focus:outline-none transition-all"
            >
              <HiOutlineShoppingCart className="text-2xl mr-5 " />
              Start Shopping
            </Link>
          </div>
          <div className="mx-auto sm:mx-0">
            <img src={brands} alt="" />
          </div>
        </div>
        <div>
          <img src={heroImg} alt="Hero Image" />
        </div>
      </section>
    </main>
  );
};

export default Home;
