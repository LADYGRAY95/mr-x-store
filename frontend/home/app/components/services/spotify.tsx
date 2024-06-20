import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface SpotifyAccount {
  id: number;
  email: string;
  plan: string;
  expirationDate: string;
}

const SpotifyAccountsSection: React.FC = () => {
  const [spotifyAccounts, setSpotifyAccounts] = useState<SpotifyAccount[]>([]);

  useEffect(() => {
    const fetchSpotifyAccounts = async () => {
      try {
        const response = await axios.get('/api/spotify-accounts');
        setSpotifyAccounts(response.data);
      } catch (error) {
        console.error('Error fetching Spotify accounts:', error);
      }
    };

    fetchSpotifyAccounts();
  }, []);

  return (
    <div className="bg-black-100 py-10 lg:py-20">
      <div className="container">
        <Navbar />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Spotify Accounts</h2>
          <p className="text-gray-500">Manage your Spotify accounts and subscriptions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {spotifyAccounts.map((account) => (
            <div
              key={account.id}
              className="rounded-2xl bg-black hover:bg-secondary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
            >
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{account.email}</h3>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Plan: {account.plan}
                </p>
                <p className="text-gray-500 group-hover:text-white duration-500 text-sm">
                  Expiration Date: {account.expirationDate}
                </p>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 duration-200 border-2 border-white">
                  Manage Account
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

export default SpotifyAccountsSection;