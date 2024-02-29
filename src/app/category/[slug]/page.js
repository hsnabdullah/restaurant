import Detailsbanner from "@/components/Detailsbanner";
import Productcard from "@/components/Productcard";
import React from "react";

export default function page() {
  return (
    <div>
      <Detailsbanner />
      <div className="container mx-auto pt-10 pb-16 gap-5">
        <div className=" grid md:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((items, i) => {
            return <Productcard />;
          })}
        </div>
      </div>
    </div>
  );
}
