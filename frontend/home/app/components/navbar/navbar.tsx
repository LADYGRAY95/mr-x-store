'use client';
import {BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import React, { useState } from 'react';
import Logo from '/app/logo.png';
import cart from '/app/emptycart.png';
import { Link } from 'react-router-dom';

const NavLinks = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'About Us',
    link: '/About'
  },
  {
    id: 3,
    title: 'User Agreement',
    link: '/useragreement'
  },
  {
    id: 4,
    title: 'Gaming',
    link: '#',
    subLinks: [
      { id: 41, title: 'Game accounts', link: '/gameacct' },
      { id: 42, title: 'Game keys', link: '/gameskey' },
      { id: 43, title: 'In game credits', link: '/ingamecred' },
      { id: 44, title: 'Ps games', link: '/psgames' },
      { id: 45, title: 'Xbox games', link: '/xboxgames' },
    ]
  },
  {
    id: 5,
    title: 'Services',
    link: '#',
    subLinks: [
      { id: 51, title: 'Social media Boosting', link: '/socialboost' },
      { id: 52, title: 'Social media Sponsoring', link: '/socialsponsor' },
      { id: 53, title: 'Netflix', link: '/netflix' },
      { id: 54, title: 'Spotify', link: '/spotify' },
      { id: 55, title: 'Psn pass', link: '/pspass' },
      { id: 56, title: 'Xbox pass', link: '/xpass' },
      { id: 57, title: 'Softwares', link: '/softwares' },
    ]
  },
  {
    id: 6,
    title: 'Gift Cards',
    link: '#',
    subLinks: [
      { id: 61, title: 'Steam Gift card', link: '/steam' },
      { id: 62, title: 'itunes Gift card', link: '/itunes' },
      { id: 63, title: 'Psn Gift card', link: '/psn' },
      { id: 64, title: 'xbox gift card', link: '/xbox' },
    ]
  }
];

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    const targetId = parseInt(event.currentTarget.dataset.id || '-1');
    setOpenDropdown(openDropdown === targetId ? null : targetId);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (

 
    <div className='shadow-xl'>
      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
          {/* logo section */}
          <div>
            <a target="blank" href="https://www.facebook.com/profile.php?id=61550064407218">
              <img src={Logo.src} alt="logo" className="w-20" />
            </a>
          </div>
          {/* links section */}
          <div className='flex justify-between items-center gap-4'>
            <ul className='hidden sm:flex items-center gap-4'>
              {NavLinks.map((link) => (
                <li key={link.id}>
                  {link.subLinks ? (
                    <div className='relative group'>
                      <Link
                        to={link.link}
                        data-id={link.id}
                        className={`text-white inline-block py-4 px-4 hover:text-red-500 duration-300 flex items-center ${
                          openDropdown === link.id ? 'text-red-500' : ''
                        }`}
                        onClick={handleClick}
                      >
                        {link.title}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                      <div
                        className={`absolute z-10 bg-black shadow-lg rounded-lg w-48 mt-4 ${
                          openDropdown === link.id ? 'block' : 'hidden'
                        }`}
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.id}
                            to={subLink.link}
                            className='block px-4 py-2 text-white hover:bg-gray-800 hover:text-red-500 duration-300'
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.link} className='text-white inline-block py-4 px-4 hover:text-red-500 duration-300 flex items-center' onClick={handleClick}>
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/login">
  <a>
    <button className='bg-gradient-to-r from-primary to-secondary text-white px-6 font-bold py-2 py-1 rounded-full hover:scale-105 duration-200'>
      login
    </button>
  </a>
</Link>
            <Link to="/" className='hover:scale-105 duration-200' ><img src={cart.src} alt="cart icon" className='h-9 w-9 relative top-1'/>  <span className="bg-primary text-white px-1 py-1 rounded-md text-sm font-medium relative top-2 left-6">0</span></Link>
            <button
              className='sm:hidden block text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white'
              onClick={toggleMobileMenu}
            >
              <svg
                className={`h-6 w-6 ${showMobileMenu ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${showMobileMenu ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`sm:hidden bg-black py-4 px-6 ${
            showMobileMenu ? 'block' : 'hidden'
          }`}
        >
          <ul className='space-y-4'>
            {NavLinks.map((link) => (
              <li key={link.id}>
                {link.subLinks ? (
                  <div className='relative group'>
                    <Link
                      to={link.link}
                      data-id={link.id}
                      className={`text-white inline-block py-2 px-4 hover:text-red-500 duration-300 flex items-center ${
                        openDropdown === link.id ? 'text-red-500' : ''
                      }`}
                      onClick={handleClick}
                    >
                      {link.title}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <div
                      className={`absolute z-10 bg-black shadow-lg rounded-lg w-48 mt-2 ${
                        openDropdown === link.id ? 'block' : 'hidden'
                      }`}
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.id}
                         to={subLink.link}
                          className='block px-4 py-2 text-white hover:bg-gray-800 hover:text-red-500 duration-300'
                        >
                          {subLink.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={link.link} className='text-white inline-block py-2 px-4 hover:text-red-500 duration-300 flex items-center' onClick={handleClick}>
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

};

export default Navbar;