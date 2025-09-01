import React from "react";

export default function CardsSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  const cardsCount = data.cards.length;
  const gridClasses =
    cardsCount <= 4
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

  const centerLastRow = Boolean(data.centerLastRow) && cardsCount > 4;
  const showDescriptions = data.showDescriptions !== false;

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {data.heading && (
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              {data.heading}
            </h2>
            {data.subheading && (
              <p className="text-xl text-gray-600">{data.subheading}</p>
            )}
          </div>
        )}

        {centerLastRow && cardsCount % 4 === 3 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {data.cards.slice(0, 4).map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center flex flex-col h-[260px]"
                >
                  <div className="flex-1 flex items-center justify-center text-[#EDA94E] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {card.icon && card.icon.startsWith('/') ? (
                      <img 
                        src={card.icon} 
                        alt={card.title || card.label || card.name} 
                        className="w-14 h-14 mx-auto object-contain"
                      />
                    ) : (
                      card.icon
                    )}
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
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:hidden">
              {data.cards.slice(4).map((card, index) => (
                <div
                  key={index + 4}
                  className="bg-white p-6 rounded-2xl border border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-[260px] flex flex-col"
                >
                  <div className="flex-1 flex items-center justify-center text-[#EDA94E] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {card.icon && card.icon.startsWith('/') ? (
                      <img 
                        src={card.icon} 
                        alt={card.title || card.label || card.name} 
                        className="w-14 h-14 mx-auto object-contain"
                      />
                    ) : (
                      card.icon
                    )}
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
              ))}
            </div>
            <div className="hidden lg:flex justify-center gap-6">
              {data.cards.slice(4).map((card, index) => (
                <div
                  key={index + 4}
                  className="w-[240px]"
                >
                  <div className="bg-white p-6 rounded-2xl border border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-[260px] flex flex-col">
                    <div className="flex-1 flex items-center justify-center text-[#EDA94E] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {card.icon && card.icon.startsWith('/') ? (
                        <img 
                          src={card.icon} 
                          alt={card.title || card.label || card.name} 
                          className="w-14 h-14 mx-auto object-contain"
                        />
                      ) : (
                        card.icon
                      )}
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
                className="bg-white p-6 rounded-2xl border border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center flex flex-col h-[260px]"
              >
                <div className="flex-1 flex items-center justify-center text-[#EDA94E] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {card.icon && card.icon.startsWith('/') ? (
                    <img 
                      src={card.icon} 
                      alt={card.title || card.label || card.name} 
                      className="w-14 h-14 mx-auto object-contain"
                    />
                  ) : (
                    card.icon
                  )}
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
            ))}
          </div>
        )}

        {data.buttonText && (
          <div className="text-center mt-6">
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

