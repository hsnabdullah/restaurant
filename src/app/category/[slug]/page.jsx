"use client";
import CardDetails from "@/components/CardDetails";
import Detailsbanner from "@/components/Detailsbanner";
import Productcard from "@/components/Productcard";
import React from "react";
let data = [
  {
    title: "Pizza",
    list: [
      {
        title: "Special",
        price: 1400,
      },
      {
        title: "Malai Boti Pizza",
        price: 1400,
      },
      {
        title: "Mughlai Pizza",
        price: 1400,
      },
      {
        title: "Chicken Tikka",
        price: 1400,
      },
      {
        title: "Behari Kabab Pizza",
        price: 1400,
      },
      {
        title: "Cheezy Cheese",
        price: 1400,
      },
    ],
  },
];
export default function page() {
  return (
    <div>
      <Detailsbanner />
      <div className="container mx-auto pt-10 pb-16 gap-5">
        {/* <div className=" grid md:grid-cols-4 gap-5">
          {[1, 2, 3, 4, 5].map((items, i) => {
            return <Productcard />;
          })}
        </div> */}
        <div className="container mx-auto pt-10 pb-16 gap-5">
          {data?.map((d, i) => {
            return (
              <div key={i}>
                <CardDetails data={d} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
