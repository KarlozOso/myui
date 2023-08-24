import React, { useState } from 'react';

const Slider = () => {
  const images = [
    'https://images.pexels.com/photos/2099590/pexels-photo-2099590.jpeg',
    'https://images.pexels.com/photos/13708556/pexels-photo-13708556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/16845245/pexels-photo-16845245/free-photo-of-ciudad-carretera-calle-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="wrapper rounded-xl">
  <div className="relative w-72 h-72 justify-items-center justify-center">
  <img src={images[currentIndex]} alt="Slider" className="w-72 h-72 object-cover" />
  <div className="relative p-1 bg-gray-900 bg-opacity-50l">
    <div className="flex justify-center space-x-2">
      {images.map((_, index) => (
        <div
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`h-2 w-4 bg-gray-300 ${index === currentIndex ? 'bg-white' : ''} cursor-pointer`}
        />
      ))}
    </div>
  </div>

  <button
    onClick={handlePrev}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-xl"
  >
    Prev
  </button>
  <button
    onClick={handleNext}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-xl"
  >
    Next
  </button>
</div>
      </div>
  );
};

export default Slider;