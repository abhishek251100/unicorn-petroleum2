import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductHoverImage, UNIVERSAL_HOVER_IMAGE } from "../Data/productHoverImages";

export default function ProductPortfolioSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  const scrollContainerRef = useRef(null);

  const [showNav, setShowNav] = useState(false);

  // Ensure slider snaps start aligned on mount and compute arrow visibility
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: 'auto' });
    const compute = () => setShowNav(el.scrollWidth > el.clientWidth + 2);
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">{data.subheading}</p>
        </div>

        <div className="relative">
          {showNav && (
            <>
              <button
                type="button"
                onClick={() => scrollContainerRef.current && scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })}
                className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-[1.5px] border-[#EDA94E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center hover:bg-gray-50"
                aria-label="Previous"
              >
                <span className="text-xl text-gray-700">‹</span>
              </button>

              <button
                type="button"
                onClick={() => scrollContainerRef.current && scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })}
                className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-[1.5px] border-[#EDA94E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center hover:bg-gray-50"
                aria-label="Next"
              >
                <span className="text-xl text-gray-700">›</span>
              </button>
            </>
          )}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-7 md:gap-9 overflow-x-auto scrollbar-hide py-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.cards.map((card, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 min-w-0"
              >
                <Link to={card.link || "/products"} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-[1.5px] border-[#EDA94E] flex flex-col">
                  <div className="h-40 sm:h-44 md:h-48 overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <img
                      src={card.hoverImage || getProductHoverImage(card.title)}
                      alt={`${card.title} hover`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = UNIVERSAL_HOVER_IMAGE;
                      }}
                    />
                  </div>

                  <div className="px-4 py-4 sm:p-6 md:p-7 flex flex-col flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-800 mb-1 sm:mb-3 group-hover:text-[#E99322] transition-colors text-sm sm:text-base">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3 md:line-clamp-4 min-h-[3.5rem] sm:min-h-[4.5rem] md:min-h-[6rem]">
                      {card.description}
                    </p>

                    <span className="bg-[#E99322] hover:bg-[#E99322]/90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:shadow-lg inline-flex items-center mx-auto sm:mx-0 mt-auto">
                      {card.buttonText}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 