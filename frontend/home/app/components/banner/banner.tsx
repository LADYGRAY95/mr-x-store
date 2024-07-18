'use client';

import React from "react";
import Banner1 from "/app/1.png";
import Banner2 from "../../../app/2.png";
import Banner3 from "/app/3.png";
import Banner4 from "/app/banner4.png";
import Banner5 from "/app/banner5.png";
import Banner6 from "/app/banner6.png";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const banners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 30000); // Change banner every 30 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [banners.length]);

  return (
    <div className="min-h-[350px]">
      <div className="min-h-[350px] flex flex-col justify-center items-center relative">
        <div className="container">
          {/*image section*/}
          <div>
            <img
              src={banners[currentIndex].src}
              alt=""
              className="max-w-[1000px] w-full mx-auto"
            />
          </div>
          {/*text caption section*/}
        </div>
        <button
          className="absolute left-20 transform -translate-y-1/2 bg-primary hover:bg-white rounded-full p-2 shadow-md hidden sm:block"
          onClick={handlePrevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-20 transform -translate-y-1/2 bg-primary hover:bg-white rounded-full p-2 shadow-md hidden sm:block"
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="mt-4 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary hover:bg-secondary"
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;