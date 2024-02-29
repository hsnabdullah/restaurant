"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg from "@/assets/img/banner.jpg";
import bannerImg1 from "@/assets/img/banner1.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { NextIcon, PrevIcon } from "@/assets/icon/Icons";

export default function Herobanner() {
  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      swipeable={true}
      infiniteLoop={true}
      // autoPlay={true}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`absolute top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <PrevIcon className="w-9 h-9 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`absolute top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <NextIcon className="w-9 h-9 text-white" />
          </div>
        );
      }}
    >
      <div>
        <Image src={bannerImg} className="w-full" />
      </div>
      <div>
        <Image src={bannerImg1} />
      </div>
      <div>
        <Image src={bannerImg} className="w-full" />
      </div>
      <div>
        <Image src={bannerImg1} />
      </div>
    </Carousel>
  );
}
