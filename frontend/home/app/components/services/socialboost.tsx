import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface SocialMediaBoostingService {
  id: number;
  name: string;
  description: string;
  price: number;
  deliveryTime: string;
}

const SocialMediaBoostingSection: React.FC = () => {
  const [boostingServices, setBoostingServices] = useState<SocialMediaBoostingService[]>([]);

  useEffect(() => {
    const fetchBoostingServices = async () => {
      try {
        const response = await axios.get('/api/social-media-boosting-services');
        setBoostingServices(response.data);
      } catch (error) {
        console.error('Error fetching social media boosting services:', error);
      }
    };

    fetchBoostingServices();
  }, []);

  return (
    <div className="bg-black-100 py-10 lg:py-20">
      <div className="container">
        <Navbar />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Social Media Boosting Services</h2>
          <p className="text-gray-500">Boost your social media presence with our services.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {boostingServices.map((service) => (
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
                  Delivery Time: {service.deliveryTime}
                </p>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  Order Now
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

export default SocialMediaBoostingSection;