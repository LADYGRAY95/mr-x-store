'use client'
import React, { useState, useEffect } from "react";
import Vector from "../app/bg.jpg";
import hero1 from "../app/hero1.png";
import hero2 from "../app/hero2.png";
import hero3 from "../app/hero3.png";
import hero4 from "../app/hero4.png";

const bgImages = {
  backgroundImage: `url(${Vector.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100%',
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [heroImages.length]);

  return (
    <div style={bgImages} className="min-h-[650px] bg-gray-100">
      <div className="min-h-[650px] backdrop-blur-sm flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/*text-content section*/}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                Welcome to <br />
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255, 1)]"
                  style={{
                    filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255, 1))",
                  }}
                >
                  MR X
                </span>
                Store
              </h1>
              <p className="text-sm">
                Welcome to our online gaming store, your one-stop shop for all your
                gaming needs in Tunisia. We offer a wide selection of video games,
                gaming keys, in-game content, accounts, and memberships, catering
                to the diverse gaming community.
                <br />
                Thank you for choosing our store. Let's embark on an exciting
                gaming journey together.
              </p>
              <p className="text-sm text-right">
                مرحبا بكم في متجرنا الإلكتروني للألعاب، وجهتكم الشاملة لجميع
                احتياجاتكم من الألعاب في تونس. نقدم مجموعة واسعة من ألعاب الفيديو،
                ومفاتيح الألعاب، ومحتوى داخل اللعبة، والحسابات، والاشتراكات، لنلبي
                تنوع مجتمع اللاعبين.
                <br />
                شكرًا لاختيار متجرنا. دعونا نبدأ في رحلة ألعاب ممتعة معًا.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  order now
                </button>
              </div>
            </div>
            {/*Image section*/}
            <div className="min-h-[450px] flex justify-center items-center ">
              <div>
                <img
                  src={heroImages[currentIndex].src}
                  alt="banner"
                  className="max-w-[280px] hover:scale-105 duration-300 w-full mw-auto drop-shadow-[-6px_20px_15px_grey]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;