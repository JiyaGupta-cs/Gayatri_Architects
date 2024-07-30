import React, { useState, useEffect } from 'react';
const images = [
  { url: 'https://via.placeholder.com/800x400.png?text=Image+1', caption: 'Caption 1' },
  { url: 'https://via.placeholder.com/800x400.png?text=Image+2', caption: 'Caption 2' },
  { url: 'https://via.placeholder.com/800x400.png?text=Image+3', caption: 'Caption 3' },
  { url: 'https://via.placeholder.com/800x400.png?text=Image+4', caption: 'Caption 4' },
  { url: 'https://via.placeholder.com/800x400.png?text=Image+5', caption: 'Caption 5' }
];

const translateValues = [85*2-2, 85, 0, -85, -85*2];
const translateValuesmobile = [217, 109, 0, -109, -217];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 w-full overflow-hidden flex justify-center items-center">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(${isMobile?translateValuesmobile[currentIndex] : translateValues[currentIndex]}vw)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-screen md:w-[85vw] h-[88vh] mx-4 flex-shrink-0">
            <img
              src={image.url}
              alt={`Slide ${index}`}
              className="w-screen md:w-full object-cover h-screen md:h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C59D37]">
              <div className="absolute bottom-0 left-0  p-8 text-2xl font-black text-black text-center">
                {image.caption} 
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
