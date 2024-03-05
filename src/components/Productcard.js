"use client";
import Image from "next/image";
import React from "react";
import special from "@/assets/img/special.jpg";
import { Arrows } from "@/assets/icon/Icons";
import { CartProvider, useCart } from "react-use-cart";

export default function Productcard({ data }) {
  const { addItem } = useCart();

  return (
    <div>
      <div className=" border border-red-500 relative group">
        <Image src={special} alt="" />
        <div className="absolute bg-black bg-opacity-50 bottom-0 items-center flex flex-col justify-center text-center right-0 left-0 text-white py-6">
          <h4 className="block group-hover:hidden text-xl leading-5 py-3">
            Malai Boti
          </h4>
          <div className="hidden group-hover:block">
            <button
              onClick={() => addItem(data)}
              className="flex justify-between items-center gap-3 text-white border-0 border-orange-600 bg-orange-600 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-6 py-3 text-center"
            >
              Add to Cart{" "}
              <span>
                <Arrows />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
