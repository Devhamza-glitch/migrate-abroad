import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For navigation arrows

// Import your industry images
import HeavyEngineering from '../../assets/industry.png';
import MiningResources from '../../assets/industry.png';
import InformationTech from '../../assets/industry.png';
import Healthcare from '../../assets/industry.png';
import Hospitality from '../../assets/industry.png';
import BeautyWellness from '../../assets/industry.png';

const industries = [
  { name: 'Heavy Engineering and Construction', img: HeavyEngineering },
  { name: 'Mining & Resources', img: MiningResources },
  { name: 'Information Technology', img: InformationTech },
  { name: 'Healthcare', img: Healthcare },
  { name: 'Hospitality', img: Hospitality },
  { name: 'Beauty & Wellness', img: BeautyWellness },
];

const IndustrySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5); // Initial number of visible slides
  const slideInterval = useRef(null);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === industries.length - visibleSlides ? 0 : prev + 1
    );
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? industries.length - visibleSlides : prev - 1
    );
    resetAutoplay();
  };

  // Reset autoplay after manual navigation
  const resetAutoplay = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, 3000);
  };

  // Auto-play functionality
  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000);

    return () => clearInterval(slideInterval.current); // Cleanup on unmount
  }, []);

  useEffect(() => {
    resetAutoplay();
  }, [currentSlide]);

  // Update the number of visible slides based on the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1); // Show 1 slide on small screens
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(3); // Show 3 slides on medium screens
      } else {
        setVisibleSlides(4); // Show 5 slides on large screens
      }
    };

    window.addEventListener('resize', handleResize);

    // Set the initial slide count based on the current window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        <span className="text-black">Industries </span>
        <span className="text-red-700">We Serve</span>
      </h2>

      <div className="flex justify-center items-center space-x-4 relative w-full max-w-6xl">
        {/* Left Arrow */}
        <button
          className="text-red-700 absolute left-0 z-10"
          onClick={prevSlide}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Industry Cards - Show slides based on the screen size */}
        <div className="overflow-hidden cursor-pointer w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90%] sm:w-[40%] md:w-[30%] lg:w-[18%] text-center mx-4"
              >
                <div className="border border-gray-200 rounded-lg p-4">
                  <img
                    src={industry.img}
                    alt={industry.name}
                    className="w-full h-70 object-cover mx-auto"
                  />
                </div>
                <p className="mt-2 text-gray-600 hover:text-red-900 transition-colors duration-300">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="text-red-700 absolute -right-10 z-10"
          onClick={nextSlide}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default IndustrySlider;
