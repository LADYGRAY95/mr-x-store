import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface PSPlusSubscription {
  id: number;
  email: string;
  plan: string;
  expirationDate: string;
}

const PSPlusSubscriptionsSection: React.FC = () => {
  const [psPlusSubscriptions, setPSPlusSubscriptions] = useState<PSPlusSubscription[]>([]);

  useEffect(() => {
    const fetchPSPlusSubscriptions = async () => {
      try {
        const response = await axios.get('/api/ps-plus-subscriptions');
        setPSPlusSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching PS Plus subscriptions:', error);
      }
    };

    fetchPSPlusSubscriptions();
  }, []);

  return (
    <div className="bg-black-100 py-10 lg:py-20">
      <div className="container">
        <Navbar />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">PlayStation Plus Subscriptions</h2>
          <p className="text-gray-500">Manage your PlayStation Plus subscriptions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {psPlusSubscriptions.map((subscription) => (
            <div
              key={subscription.id}
              className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
            >
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{subscription.email}</h3>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Plan: {subscription.plan}
                </p>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Expiration Date: {subscription.expirationDate}
                </p>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  Manage Subscription
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

export default PSPlusSubscriptionsSection;