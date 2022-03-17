import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import CartItem from "../components/cart/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <Transition.Root show={isVisible} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-20"
        onClose={toggleHandler}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-80 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium">
                        {" "}
                        Shopping cart{" "}
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 "
                          onClick={toggleHandler}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-dark"
                        >
                          {cart.items.length == "0" ? (
                            <h1 className="text-3xl text-center mt-32">
                              No Items Added
                            </h1>
                          ) : (
                            cart.items.map((product) => (
                              <CartItem
                                key={product.id}
                                id={product.id}
                                src={product.src}
                                name={product.name}
                                price={product.price}
                                itemQuantity={product.itemQuantity}
                                size={product.size}
                              />
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-bold">
                      <p className="font-semibold text-sm">Subtotal</p>
                      <p className="text-lg font-bold">${cart.totalPrice}.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-dark">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a href="#">
                        <button
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm disabled:cursor-not-allowed disabled:bg-gray-dark"
                          disabled={cart.items.length == "0" ? true : false}
                        >
                          Process to Checkout
                        </button>
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={toggleHandler}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
