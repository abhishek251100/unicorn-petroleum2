import React from "react";
import Card from "./Card";

const FGridSection = ({ data }) => {
  return (
    <section className="pt-12 px-6 md:px-[180px] text-center">
      <h2 className="text-4xl font-bold text-gray-900">{data.heading}</h2>
      <p className="text-3xl text-gray-800 mt-2 mb-8">{data.subheading}</p>

      <div className="grid md:grid-cols-3 gap-4">
        {data.cards.map((card, index) => (
          <Card
            key={index}
            type="strength"
            icon={card.icon}
            title={card.title}
            description={card.description}
            className="border border-[#EDA94E] rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition"
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
