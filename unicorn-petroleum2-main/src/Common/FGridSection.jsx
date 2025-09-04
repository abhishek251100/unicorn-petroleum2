import React from "react";
import Card from "./Card";

const FGridSection = ({ data, cardType = "strength", customPadding = "py-12 px-4" }) => {
  return (
    <section className={`${customPadding} text-center`}>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.heading}</h2>
        <p className="text-3xl text-gray-800">{data.subheading}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.cards.map((card, index) => (
          <Card
            key={index}
            type={cardType}
            icon={card.icon}
            title={card.title}
            description={card.description}
            className="border border-[#EDA94E] rounded-xl p-6 py-18 flex flex-col items-center shadow-sm hover:shadow-md transition"
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-[#EDA94E] hover:bg-[#EDA94E] text-white font-medium rounded-3xl px-8 py-3 normal-case flex items-center gap-2">
          {data.buttonText} <span className="text-lg ml-1">→</span>
        </button>
      </div>
    </section>
  );
};

export default FGridSection;
