import React from 'react';

const HeroSection = ({ data }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white bg-opacity-90 rounded-2xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {data.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {data.subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-orange-600 transition-colors flex items-center space-x-2">
              <span>{data.primaryButton}</span>
              <span className="text-xl">→</span>
            </button>
            
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-medium text-lg border-2 border-orange-300 hover:bg-orange-50 transition-colors">
              {data.secondaryButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 