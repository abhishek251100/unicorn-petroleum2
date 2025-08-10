import React from "react";

export default function CardsSection({ data }) {
  // If no data or no cards, don't render anything
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  const cardsCount = data.cards.length;
  const gridClasses =
    cardsCount <= 4
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

  const centerLastRow = Boolean(data.centerLastRow) && cardsCount > 4;
  const showDescriptions = data.showDescriptions !== false;

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
              <p className="text-xl text-gray-600">{data.subheading}</p>
            )}
          </div>
        )}

        {/* Cards */}
        {centerLastRow && cardsCount % 4 === 3 ? (
          <>
            {/* First row: 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
              {data.cards.slice(0, 4).map((card, index) => (
                <div key={index}>
                  <div className="bg-white p-8 rounded-2xl border border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-full">
                    <div className="text-[#EDA94E] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#E99322] transition-colors">
                      {card.title || card.label || card.name}
                    </h3>
                    {showDescriptions && card.description && (
                      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Second row: exactly 3 items centered */}
            <div className="flex justify-center gap-6">
              {data.cards.slice(4).map((card, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/4 max-w-[320px]"
                >
                  <div className="bg-white p-8 rounded-2xl border border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-full">
                    <div className="text-[#EDA94E] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#E99322] transition-colors">
                      {card.title || card.label || card.name}
                    </h3>
                    {showDescriptions && card.description && (
                      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={gridClasses}>
            {data.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center"
              >
                {/* Icon */}
                <div className="text-[#EDA94E] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title/Label */}
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#E99322] transition-colors">
                  {card.title || card.label || card.name}
                </h3>

                {/* Description (if exists) */}
                {showDescriptions && card.description && (
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                    {card.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Button (if exists) */}
        {data.buttonText && (
          <div className="text-center mt-8">
            <button className="bg-[#EDA94E] text-white px-8 py-3 rounded-full hover:bg-[#E99322] transition-all duration-300 font-medium flex items-center gap-2 mx-auto">
              {data.buttonText}
              <span className="text-lg">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 