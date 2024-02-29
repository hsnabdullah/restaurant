import Image from "next/image";
import React from "react";
import banner from "@/assets/img/banner.jpg";

export default function Detailsbanner() {
  return (
    <div>
      <div className="relative">
        <Image src={banner} alt="" className="h-[450px] object-cover" />
        <div className="absolute bottom-0 left-0 right-0 text-center text-white pb-8">
          <h1 className="text-6xl font-medium tracking-tighter leading-normal">
            Pizza
          </h1>
        </div>
      </div>
    </div>
  );
}
