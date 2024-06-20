'use client';

import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
<iframe
  className="absolute top-0 left-0 w-full h-full z-0 bg-black transition-transform duration-300 hover:scale-105"
  src="https://www.youtube.com/embed/VlIXK2L_180?autoplay=1"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
    </div>
  );
};

export default Video;