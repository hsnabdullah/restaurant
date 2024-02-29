import Cardlist from "@/components/Cardlist";
import Herobanner from "@/components/Herobanner";
import Productcard from "@/components/Productcard";
import Image from "next/image";

let data = [
  {
    title: "Pizza",
    list: [
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
    ],
  },
  {
    title: "Shwarma",
    list: [
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
    ],
  },
  {
    title: "Burger",
    list: [
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
    ],
  },
  {
    title: "Burger",
    list: [
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
    ],
  },
  {
    title: "Burger",
    list: [
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
    ],
  },
  {
    title: "Burger",
    list: [
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
      {
        title: "malai boti",
        price: 1400,
      },
    ],
  },
];
export default function Home() {
  return (
    <div>
      <Herobanner />
      <div className="container mx-auto pt-10 pb-16 gap-5">
        <h2 className=" text-[40px] leading-10 font-semibold tracking-tighter pb-10">
          Friend Hub Special
        </h2>
        <div className=" grid md:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((items, i) => {
            return <Productcard />;
          })}
        </div>
      </div>
      <div className="container mx-auto pt-10 pb-16 grid md:grid-cols-3 gap-5">
        {data?.map((d, i) => {
          return (
            <div key={i}>
              <Cardlist data={d} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
