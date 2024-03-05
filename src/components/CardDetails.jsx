"use client";
import Image from "next/image";
import React from "react";
import piza from "@/assets/img/dealspic.jpg";
import { useCart } from "react-use-cart";

export default function ({ data }) {
  const { addItem } = useCart();
  return (
    <div>
      <div class="w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
        <div class="p-4 bg-orange-600 text-white rounded-t-md text-xl font-bold leading-none text-center">
          <h5>{data?.title}</h5>
        </div>
        <div class="flow-root">
          <ul
            role="list"
            class="divide-y divide-gray-200 dark:divide-gray-700 "
          >
            {data?.list?.map((d, i) => {
              return (
                <li key={i} class="py-3 sm:py-4 px-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <Image src={piza} alt="pizza" className="w-20" />
                      <div>
                        {" "}
                        <div class="">
                          <p class="text-lg font-semibold leading-none text-gray-900 truncate dark:text-white">
                            {d?.title}
                          </p>
                        </div>
                        <div class="py-2 items-center text-base leading-none font-normal text-gray-900 dark:text-white">
                          {d?.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => addItem(d)}
                        className="text-center text-white border-0 border-orange-400 bg-orange-400 hover:bg-orange-600 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
                      >
                        Add to Cart XX
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
