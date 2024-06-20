'use client';
import React from "react";
import img1 from "/app/g1.png";
import img3 from "/app/g2.png";
import img2 from "/app/g3.png";
import img4 from "/app/g4.png";
import { Princess_Sofia } from "next/font/google";
import Headertitle from "../Headertitle/Headertitle";
import { Link } from "react-router-dom";

const giftData = [
    {
        id:1,
        name:"Steam Gift card",
        img:img1,
        description:"Steam gift cards are available in all denominations.",
        aosDelay:"100",
        link:"/steam",
    },
    {
        id:2,
        name:"itunes Gift card",
        img:img2,
        description:"Get itunes gift cards for all your music needs",
        aosDelay:"200",
        link:"/itunes",
    },
    {
        id:3,
        name:"Psn Gift card",
        img:img3,
        description:"Get psn gift cards for all your gaming needs",
        aosDelay:"300",
        link:"/psn",
    },
    {
        id:4,
        name:"xbox Gift card",
        img:img4,
        description:"Get xbox gift cards for all your gaming needs",
        aosDelay:"400",
        link:"/xbox",
    },
];

const Gift = () => {
    return (
      <div className="bg-black-100">
        <div className="py-10 lg:py-20">
          <div className="container">
            {/* Header title */}
            <Headertitle
              title="Gift Cards"
              subtitle="our gift card services"
              description="We offer a wide selection of gift cards, catering to the diverse gaming community."
            />
            <br />
            <br />
            {/* Card section */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-14 md:gap-5 place-items-center">
              {giftData.map((gift) => (
                <div
                  key={gift.id}
                  className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
                >
                  <div className="h-[180px]">
                    <img
                      src={gift.img.src}
                      alt="service"
                      className="max-w-200px block mx-auto transform -translate-y-1 group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{gift.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2">
                      {gift.description}
                    </p>
                  </div>
                  <div>
  <Link to={gift.link}>
    <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
      view more
    </button>
  </Link>
</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gift;