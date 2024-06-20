'use client';
import React from "react";
import img1 from "/app/c1.png";
import img2 from "/app/c2.png";
import img3 from "/app/c3.png";
import img4 from "/app/c4.png";
import img5 from "/app/c5.png";
import { Princess_Sofia } from "next/font/google";
import Headertitle from "../Headertitle/Headertitle";
import { Link } from "react-router-dom";

const gamingData = [
    {
        id:1,
        name:"Game accounts",
        img:img1,
        description:"All types of game accounts are available: steam, epic games, etc.",
        aosDelay:"100",
        link:"/gameacct",
    },
    {
        id:2,
        name:"Game Keys",
        img:img2,
        description:"All types of game keys are available: steam, epic games, etc.",
        aosDelay:"200",
        link:"/gameskey",
    },
    {
        id:3,
        name:"In-game credits",
        img:img3,
        description:"Get in-game credits for all the latest games",
        aosDelay:"300",
        link:"/ingamecred",
    },
    {
        id:4,
        name:"Ps Games",
        img:img4,
        description:"Get access to all the latest ps games ",
        aosDelay:"400",
        link:"/psgames",
    },
    {
        id:5,
        name:"Xbox Games",
        img:img5,
        description:"Get access to all the latest xbox games",
        aosDelay:"500",
        link:"/xboxgames",
    },
];

const Gaming = () => {
    return (
      <div className="bg-black-100">
        <div className="py-10 lg:py-20">
          <div className="container">
            {/* Header title */}
            <Headertitle
              title="Gaming"
              subtitle="our gaming services"
              description="We offer a wide selection of video games, gaming keys, in-game content, accounts, and memberships, catering to the diverse gaming community."
            />
            <br />
            <br />
            {/* Card section */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-14 md:gap-5 place-items-center">
              {gamingData.map((gaming) => (
                <div
                  key={gaming.id}
                  className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
                >
                  <div className="h-[180px]">
                    <img
                      src={gaming.img.src}
                      alt="service"
                      className="max-w-200px block mx-auto transform -translate-y-1 group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{gaming.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2">
                      {gaming.description}
                    </p>
                  </div>
                  <div>
  <Link to={gaming.link}>
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
  
  export default Gaming;