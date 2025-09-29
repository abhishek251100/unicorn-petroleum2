import React from "react";
import Card from "./Card";

const FGridSection = ({ data, cardType = "strength", customPadding = "py-12 px-4" }) => {
  return (
    <section className={`${customPadding} text-center`}>
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{data.heading}</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800">{data.subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {data.cards.map((card, index) => (
          <Card
            key={index}
            type={cardType}
            icon={card.icon}
            title={card.title}
            description={card.description}
            className="border border-[#EDA94E] rounded-xl p-4 sm:p-6 py-12 sm:py-18 flex flex-col items-center shadow-sm hover:shadow-md transition"
          />
        ))}
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center">
        <button className="bg-[#EDA94E] hover:bg-[#EDA94E] text-white font-medium rounded-3xl px-6 sm:px-8 py-2 sm:py-3 normal-case flex items-center gap-2 text-sm sm:text-base">
          {data.buttonText} <span className="text-base sm:text-lg ml-1">→</span>
        </button>
      </div>
    </section>
  );
};

export default FGridSection;
