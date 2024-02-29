import Image from "next/image";
import React from "react";
import special from "@/assets/img/special.jpg";

export default function Productcard() {
  return (
    <div>
      <div className=" border border-red-500 relative group">
        <Image src={special} alt="" />
        <div className="absolute bg-black bg-opacity-50 bottom-0 items-center flex flex-col justify-center text-center right-0 left-0 text-white py-6">
          <h4 className="block group-hover:hidden text-xl leading-5 py-3">
            Malai Boti
          </h4>
          <button className="hidden group-hover:block text-white bg-transparent border-0 border-orange-600 bg-orange-600 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-6 py-3 text-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
