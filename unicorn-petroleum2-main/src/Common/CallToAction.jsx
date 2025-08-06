import React from 'react';

const CallToAction = ({ data }) => {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {data.heading}
        </h2>
        
        <p className="text-xl text-gray-600 mb-8">
          {data.subtitle}
        </p>
        
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
    </section>
  );
};

export default CallToAction; 