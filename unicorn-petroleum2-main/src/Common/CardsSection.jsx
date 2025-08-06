import React from "react";

export default function CardsSection({ data }) {
  // If no data or no cards, don't render anything
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        {data.heading && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              {data.heading}
            </h2>
            {data.subheading && (
              <p className="text-xl text-gray-600">
                {data.subheading}
              </p>
            )}
          </div>
        )}

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${data.cards.length > 4 ? '4' : data.cards.length} xl:grid-cols-${data.cards.length > 4 ? '7' : data.cards.length} gap-6`}>
          {data.cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-orange-200 hover:shadow-xl hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center"
            >
              {/* Icon */}
              <div className="text-orange-500 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              
              {/* Title/Label */}
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                {card.title || card.label}
              </h3>
              
              {/* Description (if exists) */}
              {card.description && (
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Button (if exists) */}
        {data.buttonText && (
          <div className="text-center mt-8">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 font-medium">
              {data.buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 