import React from "react";
import { FiBox, FiDroplet } from "react-icons/fi";

const PackagedResponsiblySection = ({ data }) => {
  if (!data || !data.packagingOptions || data.packagingOptions.length === 0) {
    return null;
  }

  return (
    <section className="pt-6 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Packaged responsibly in
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {data.packagingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-lg transition-all duration-300 text-center w-56 h-56 flex flex-col items-center justify-center mx-auto sm:mx-0"
            >
              <div className="text-5xl text-[#E99322] mb-6">
                {option.icon && option.icon.startsWith('/') ? (
                  <img src={option.icon} alt={option.type} className="w-16 h-16 object-contain" />
                ) : (
                  option.icon === 'bag' ? <img src="/assets/bag (2).png" alt={option.type} className="w-16 h-16 object-contain" /> : 
                  option.icon === 'bottle' ? <FiDroplet /> : 
                  <FiBox />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {option.type}
              </h3>
              <p className="text-gray-600 text-sm">
                {option.weight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagedResponsiblySection;
