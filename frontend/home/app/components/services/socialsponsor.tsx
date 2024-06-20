import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface SocialMediaSponsorService {
  id: number;
  name: string;
  description: string;
  price: number;
  reachPerMonth: number;
}

const SocialMediaSponsorSection: React.FC = () => {
  const [sponsorServices, setSponsorServices] = useState<SocialMediaSponsorService[]>([]);

  useEffect(() => {
    const fetchSponsorServices = async () => {
      try {
        const response = await axios.get('/api/social-media-sponsor-services');
        setSponsorServices(response.data);
      } catch (error) {
        console.error('Error fetching social media sponsor services:', error);
      }
    };

    fetchSponsorServices();
  }, []);

  return (
    <div className="bg-black-100 py-10 lg:py-20">
      <div className="container">
        <Navbar />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Social Media Sponsor Services</h2>
          <p className="text-gray-500">Reach a wider audience through our social media sponsorship programs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {sponsorServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
            >
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  {service.description}
                </p>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Price: ${service.price}
                </p>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Reach: {service.reachPerMonth} users per month
                </p>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  Sponsor Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SocialMediaSponsorSection;