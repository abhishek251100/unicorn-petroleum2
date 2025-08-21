import React from "react";

export default function NewsSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {data.heading}
          </h2>
        </div>

        {/* 2x2 grid of bordered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#EDA94E] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-stretch gap-4 p-4">
                {/* Image */}
                <div className="w-28 h-24 md:w-40 md:h-32 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 text-xs">
                    <span className="font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      NEWS
                    </span>
                    <span className="text-gray-500">{card.date}</span>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 md:line-clamp-3">
                    {card.description}
                  </p>

                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm mt-3 self-end"
                  >
                    {card.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 