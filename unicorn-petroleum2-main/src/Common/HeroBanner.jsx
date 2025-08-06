import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroBanner({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.slides.length) % data.slides.length);
  };

  return (
    <div 
      className="relative h-96 md:h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.slides[currentSlide].backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {data.slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {data.slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors">
              {data.slides[currentSlide].primaryButton}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full transition-colors">
              {data.slides[currentSlide].secondaryButton}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Only visible on hover */}
      <div className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${
        isHovering ? 'opacity-100' : 'opacity-0'
      }`}>
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <FiChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 