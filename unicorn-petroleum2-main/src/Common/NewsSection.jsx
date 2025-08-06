import React from "react";

export default function NewsSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {data.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.cards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                    NEWS
                  </span>
                  <span className="text-xs text-gray-500">{card.date}</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {card.description}
                </p>
                
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors">
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 