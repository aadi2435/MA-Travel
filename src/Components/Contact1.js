import React, { useState, useEffect } from 'react';
import "./Contact1.css";

const Contact1 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.sotc.in/images/home-page-banners/2023/april/Last-Minute-Holiday-Deals-Home-Bann-1920x545.jpg',
    'http://thesnapchattv.com/wp-content/uploads/2019/02/benefits-of-travel-package-for-travellers.jpeg',
    'https://www.sotc.in/images/home-page-banners/2023/march/Customised-Holidays-Banner-1920x545.webp',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative w-2/3 h-2/3">
        <div
          className="absolute top-0 bottom-0 left-0 right-0"
          style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={handlePrev}>
            Prev
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact1;


