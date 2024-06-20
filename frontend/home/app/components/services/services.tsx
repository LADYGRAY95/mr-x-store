'use client';
import React from "react";
import img1 from "/app/img1.png";
import img2 from "/app/img2.png";
import img3 from "/app/img3.png";
import img4 from "/app/img4.png";
import img5 from "/app/img5.png";
import img6 from "/app/img6.png";
import img7 from "/app/img7.png";
import { Princess_Sofia } from "next/font/google";
import Headertitle from "../Headertitle/Headertitle";
import { Link } from "react-router-dom";

const servicesData = [
    {
        id:1,
        name:"Social media boosting",
        img:img1,
        description:"Boost your social media presence with our services",
        aosDelay:"100",
        link:"/socialboost",
    },
    {
        id:2,
        name:"social media sponsorship",
        img:img2,
        description:"Spread your brand with our social media sponsorship services",
        aosDelay:"200",
        link:"/socialsponsor",
    },
    {
        id:3,
        name:"Netflix accounts",
        img:img3,
        description:"All types of accounts and subscription are available",
        aosDelay:"300",
        link:"/netflix",
    },
    {
        id:4,
        name:"Spotify premium subscription",
        img:img4,
        description:"Get access to all the latest songs with the features of the spotify premium subscription",
        aosDelay:"400",
        link:"/spotify",
    },
    {
        id:5,
        name:"ps plus subscription",
        img:img5,
        description:"Get access to all the latest games within the ps plus subscription",
        aosDelay:"500",
        link:"/pspass",
    },
    {
        id:6,
        name:"Xbox game pass ",
        img:img6,
        description:"Get access to all the latest games within the xbox game pass",
        aosDelay:"600",
        link:"/xpass",
    },
    {
        id:7,
        name:"Software",
        img:img7,
        description:"All types of software are available: antivirus, microsoft office ,etc.",
        aosDelay:"700",
        link:"/softwares",
    },


];

const Services = () => {
    return(
        <div className="bg-black-100">
            <div className="py-10 lg:py-20">
                <div className="container">
                    {/*header title */}
                    <Headertitle title="Services " 
                    subtitle="Our Services" 
                    description="We offer a wide selection of subscription and memberships of various software and services" />
                    <br />
                    <br />
                    {/*card section */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-14 md:gap-5 place-items-center">{
                            servicesData.map((service) => (
                                <div key={service.id} className="rounded-2xl bg-black hover:bg-secondary  hover:text-white relative shadow-xl duration-500 group max-w-[300px]" >
                                    <div className="h-[180px]">
                                        <img 
                                        src={service.img.src} alt="service" className="max-w-200px block mx-auto transform -translate-y-1 group-hover:scale-105 duration-300"/>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h1 className="text-xl font-bold">{service.name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2">{service.description}</p>
                                    </div>
                                    <div>
<Link to={service.link}>
    <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
      view more
    </button>
  </Link>
</div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;