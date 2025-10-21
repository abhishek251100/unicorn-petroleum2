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
    <section className="py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {data.heading && (
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
              {data.heading}
            </h2>
            {data.subheading && (
              <p className="text-base sm:text-lg md:text-xl text-gray-600">{data.subheading}</p>
            )}
          </div>
        )}

        {/* Special mobile layout: two columns with centered last card */}
        {Boolean(data.mobileTwoCols) && (
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {data.cards.slice(0, Math.max(0, cardsCount - 1)).map((card, index) => (
                <div
                  key={`m-${index}`}
                  className="bg-white p-4 rounded-2xl border-[1.5px] border-[#EDA94E] transition-all duration-300 text-center h-[150px] flex flex-col justify-center"
                >
                  <div className="text-[#E99322] mb-2 flex justify-center">
                    {card.icon && card.icon.startsWith('/') ? (
                      <img src={card.icon} alt={card.title || card.label || card.name} className="w-10 h-10 object-contain" />
                    ) : (
                      card.icon
                    )}
                  </div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {card.title || card.label || card.name}
                  </div>
                </div>
              ))}
            </div>
            {cardsCount > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2 justify-self-center w-[calc(50%-0.5rem)]">
                  <div className="bg-white p-4 rounded-2xl border-[1.5px] border-[#EDA94E] text-center h-[150px] flex flex-col justify-center">
                    <div className="text-[#E99322] mb-2 flex justify-center">
                      {data.cards[cardsCount - 1].icon && data.cards[cardsCount - 1].icon.startsWith('/') ? (
                        <img src={data.cards[cardsCount - 1].icon} alt={data.cards[cardsCount - 1].title || data.cards[cardsCount - 1].label || data.cards[cardsCount - 1].name} className="w-10 h-10 object-contain" />
                      ) : (
                        data.cards[cardsCount - 1].icon
                      )}
                    </div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {data.cards[cardsCount - 1].title || data.cards[cardsCount - 1].label || data.cards[cardsCount - 1].name}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {centerLastRow && cardsCount % 4 === 3 ? (
          <>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {data.cards.slice(0, 4).map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center flex flex-col h-[220px] sm:h-[240px] md:h-[260px]"
                >
                  <div className="flex-1 flex items-center justify-center text-[#E99322] text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {card.icon && card.icon.startsWith('/') ? (
                      <img 
                        src={card.icon} 
                        alt={card.title || card.label || card.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto object-contain"
                      />
                    ) : (
                      card.icon
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#E99322] transition-colors text-sm sm:text-base">
                    {card.title || card.label || card.name}
                  </h3>

                  {showDescriptions && card.description && (
                    <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700 transition-colors">
                      {card.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-6 lg:hidden">
              {data.cards.slice(4).map((card, index) => (
                <div
                  key={index + 4}
                  className="bg-white p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-[260px] flex flex-col"
                >
                  <div className="flex-1 flex items-center justify-center text-[#E99322] text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {card.icon && card.icon.startsWith('/') ? (
                      <img 
                        src={card.icon} 
                        alt={card.title || card.label || card.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto object-contain"
                      />
                    ) : (
                      card.icon
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#E99322] transition-colors text-sm sm:text-base">
                    {card.title || card.label || card.name}
                  </h3>

                  {showDescriptions && card.description && (
                    <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700 transition-colors">
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
                  <div className="bg-white p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-[260px] flex flex-col">
                    <div className="flex-1 flex items-center justify-center text-[#E99322] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
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
                  className="bg-white p-4 sm:p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center flex flex-col h-[220px] sm:h-[240px] md:h-[260px]"
                >
                <div className="flex-1 flex items-center justify-center text-[#E99322] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
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
          <div className="text-center mt-4 sm:mt-6">
            <button className="bg-[#E99322] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#E99322]/90 transition-all duration-300 font-medium flex items-center gap-2 mx-auto text-sm sm:text-base">
              {data.buttonText}
              <span className="text-base sm:text-lg">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

