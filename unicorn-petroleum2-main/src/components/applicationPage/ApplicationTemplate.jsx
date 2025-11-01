import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getProductPath } from "../../Data/productLinks";
import SliderHero from "../../Common/SliderHero";
import FloatingSidebar from "../../Common/FloatingSidebar";
import QualityStandardsSection from "../../Common/QualityStandardsSection";
import QuoteFormSection from "../../Common/QuoteFormSection";
import { getNavigationData } from "../../Data/navigationData";
import { getProductHoverImage, UNIVERSAL_HOVER_IMAGE } from "../../Data/productHoverImages";

export default function ApplicationTemplate({ title, breadcrumbsTitle, data }) {
  const applicationsNavData = getNavigationData("applications");
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = data.relatedProducts || [];

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Applications", link: "/applications" },
    { text: breadcrumbsTitle || title },
  ];

  const scrollToSlide = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = 320; // w-80 = 320px
    const gap = 24; // space-x-6 = 24px
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentSlide(Math.max(0, currentSlide - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentSlide(Math.min(products.length - 1, currentSlide + 1));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SliderHero
        title={data?.hero?.title || title}
        subtitle={data?.hero?.description || data?.overview?.title}
        slides={data?.slider}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          {data?.overview?.title || title}
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <FloatingSidebar navigationData={applicationsNavData} />
          </div>

          <div className="lg:col-span-9">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {data?.overview?.title || title}
              </h2>
              {data?.overview?.description && (
                <p className="text-gray-700 leading-relaxed mb-8">
                  {data.overview.description}
                </p>
              )}

              {products && products.length > 0 && (
                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() => scrollToSlide("left")}
                      disabled={currentSlide === 0}
                      className="w-10 h-10 rounded-full bg-[#E99322] text-white hover:bg-[#E99322]/90 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      ‹
                    </button>
                    <h3 className="text-xl font-semibold text-gray-800">Related Products</h3>
                    <button
                      onClick={() => scrollToSlide("right")}
                      disabled={currentSlide === products.length - 1}
                      className="w-10 h-10 rounded-full bg-[#E99322] text-white hover:bg-[#E99322]/90 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      ›
                    </button>
                  </div>

                  <div ref={sliderRef} className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                    {products.map((product, index) => {
                      const shouldShowHover = index === 0;
                      return (
                      <div key={index} className={`flex-shrink-0 w-80 bg-white rounded-lg border-[1.5px] border-[#EDA94E] hover:shadow-lg transition-shadow flex flex-col h-[430px] ${shouldShowHover ? 'group' : ''}`}>
                        <div className="h-48 bg-gray-100 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-t-lg"
                            onError={(e)=>{ e.target.style.display='none'; const fallback=e.target.nextSibling; if(fallback && fallback.dataset.fallback==='1'){ fallback.style.display='flex'; } }}
                          />
                          <div data-fallback="1" className="hidden w-full h-full bg-gray-200 rounded-t-lg items-center justify-center">
                            <span className="text-gray-500 font-semibold">{product.name}</span>
                          </div>
                          {shouldShowHover && (
                            <img
                              src={product.hoverImage || getProductHoverImage(product.name)}
                              alt={`${product.name} hover`}
                              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = UNIVERSAL_HOVER_IMAGE;
                              }}
                            />
                          )}
                        </div>
                        <div className="p-6 text-center flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                            {product.description && <p className="text-gray-600 mb-4">{product.description}</p>}
                          </div>
                          <Link to={product.link || getProductPath(product.name)} className="w-full bg-[#E99322] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#E99322]/90 transition-colors flex items-center justify-center">
                            View Details
                          </Link>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      <QualityStandardsSection />
      <QuoteFormSection />
    </div>
  );
}


