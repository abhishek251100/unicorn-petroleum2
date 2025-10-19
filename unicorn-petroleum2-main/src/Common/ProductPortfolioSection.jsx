import React from "react";

export default function ProductPortfolioSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">{data.subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#EDA94E] flex flex-col"
            >
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow text-center sm:text-left">
                <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors text-sm sm:text-base">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow">
                  {card.description}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:shadow-lg mt-auto mx-auto sm:mx-0">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 