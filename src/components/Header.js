import Image from "next/image";
import React from "react";
import logo from "@/assets/img/logopng.png";
export default function Header() {
  return (
    <div>
      <header>
        <nav class="absolute z-50 w-full bg-black bg-opacity-50">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={logo} alt="" className="w-24" />
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                class="text-white bg-transparent border-2 border-orange-600 hover:bg-orange-600 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Contact Us
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-white rounded hover:text-orange-300 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 rounded text-white hover:text-orange-300"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 rounded text-white hover:text-orange-300"
                  >
                    Deals
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
