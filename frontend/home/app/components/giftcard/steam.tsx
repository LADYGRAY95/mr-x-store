import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface SteamGiftCard {
  id: number;
  denomination: number;
  description: string;
  image: string;
  price: number;
}

const SteamGiftCardSection: React.FC = () => {
  const [steamGiftCards, setSteamGiftCards] = useState<SteamGiftCard[]>([]);

  useEffect(() => {
    const fetchSteamGiftCards = async () => {
      try {
        const response = await axios.get('/api/steam-gift-cards');
        setSteamGiftCards(response.data);
      } catch (error) {
        console.error('Error fetching Steam gift cards:', error);
      }
    };

    fetchSteamGiftCards();
  }, []);

  return (
    <div className="bg-black-100 py-10 lg:py-20">
      <div className="container">
        <Navbar />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Steam Gift Cards</h2>
          <p className="text-gray-500">Browse our selection of Steam gift cards.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {steamGiftCards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={card.image}
                  alt={`Steam Gift Card - $${card.denomination}`}
                  className="max-w-200px block mx-auto transform -translate-y-1 group-hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">${card.denomination}</h3>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2">
                  {card.description}
                </p>
                <p className="text-primary font-bold mt-2">${card.price.toFixed(2)}</p>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  Buy Now
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

export default SteamGiftCardSection;