import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface XboxGamePassPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  gamesIncluded: number;
}

const XboxGamePassSection: React.FC = () => {
  const [gamePlanDetails, setGamePlanDetails] = useState<XboxGamePassPlan[]>([]);

  useEffect(() => {
    const fetchGamePassPlans = async () => {
      try {
        const response = await axios.get('/api/xbox-game-pass-plans');
        setGamePlanDetails(response.data);
      } catch (error) {
        console.error('Error fetching Xbox Game Pass plans:', error);
      }
    };

    fetchGamePassPlans();
  }, []);

  return (
    <div className="bg-black-100 py-10 lg:py-20">
      <div className="container">
        <Navbar />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Xbox Game Pass</h2>
          <p className="text-gray-500">Unlimited access to a library of games on Xbox and PC.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {gamePlanDetails.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
            >
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  {plan.description}
                </p>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Price: ${plan.price} per month
                </p>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Games Included: {plan.gamesIncluded}
                </p>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  Subscribe Now
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

export default XboxGamePassSection;