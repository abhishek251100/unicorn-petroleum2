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
              <div className="text-5xl text-[#E99322] mb-6 h-12 flex items-center justify-center">
                {option.icon && option.icon.startsWith('/') ? (
                  <img src={option.icon} alt={option.type} className="w-16 h-16 object-contain" />
                ) : (
                  option.icon === 'bag' ? <img src="/assets/Icons/ICON/Icon 4.jpg.jpeg" alt={option.type} className="w-16 h-16 object-contain" /> : 
                  option.icon === 'pail' ? <img src="/assets/Icons/ICON/Icon 5.jpg.jpeg" alt={option.type} className="w-16 h-16 object-contain" /> : 
                  option.icon === 'bottle' ? <FiDroplet /> : 
                  <FiBox />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 min-h-[1.75rem] flex items-center justify-center">
                {option.type}
              </h3>
              <div className="text-gray-600 text-sm min-h-[2.75rem] flex flex-col items-center justify-start leading-5">
                <p className={option.weight ? "" : "opacity-0"}>{option.weight || "."}</p>
                <p className={`${option.weight ? "mt-1 " : ""}${option.additionalText ? "" : "opacity-0"}`}>
                  {option.additionalText || "."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagedResponsiblySection;
