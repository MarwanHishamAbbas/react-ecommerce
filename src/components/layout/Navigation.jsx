import logoIcon from "../../favicon.svg";
import logoAll from "../../assets/Logo.svg";
import user from "../../assets/main.jpg";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import LangSelect from "../UI/LangSelect";

const navigation = [
  { name: "Male", href: "male" },
  { name: "Female", href: "female" },
  { name: "Kids", href: "kids" },
  { name: "Popular Products", href: "popular" },
];

export default function Navigation() {
  return (
    <>
      <Disclosure
        as="nav"
        className="flex justify-between items-center text-gray-dark text-xs md:text-sm"
      >
        <div className="flex items-center">
          <span className="hidden md:block mr-3">My Location</span>
          <LocationMarkerIcon className="w-5 h-5" />
          <span className="font-semibold ml-1">Alexandria, Egypt</span>
        </div>
        <LangSelect />
      </Disclosure>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div>
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}

                  <Disclosure.Button className="inline-flex items-center justify-center py-2 rounded-md text-gray-400 ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="h-8 w-auto md:hidden"
                      src={logoIcon}
                      alt="Workflow"
                    />
                    <img
                      className="h-8 w-auto hidden md:block"
                      src={logoAll}
                      alt=""
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={`products/${item.href}`}
                          className="text-gray-300 hover:bg-gray-700
                        px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    to="/cart"
                    className="bg-gray-800 p-1 rounded-full text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src={user}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 md:w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                        <Menu.Item>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Your Profile
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Settings
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Sign out
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="sm:hidden z-10">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={`products/${item.href}`}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white
                  block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
}
