import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface InGameCredit {
  id: number;
  name: string;
  description: string;
  image: string;
}

const InGameCreditsSection: React.FC = () => {
  const [inGameCredits, setInGameCredits] = useState<InGameCredit[]>([]);

  useEffect(() => {
    const fetchInGameCredits = async () => {
      try {
        const response = await axios.get('/api/in-game-credits');
        setInGameCredits(response.data);
      } catch (error) {
        console.error('Error fetching in-game credits:', error);
      }
    };

    fetchInGameCredits();
  }, []);

  return (
    <div className="bg-black-100 py-10 lg:py-20">
      <div className="container">
        <Navbar />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">In-Game Credits</h2>
          <p className="text-gray-500">Browse our selection of in-game credits and currencies.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {inGameCredits.map((credit) => (
            <div
              key={credit.id}
              className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={credit.image}
                  alt={credit.name}
                  className="max-w-200px block mx-auto transform -translate-y-1 group-hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{credit.name}</h3>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2">
                  {credit.description}
                </p>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  View More
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

export default InGameCreditsSection;