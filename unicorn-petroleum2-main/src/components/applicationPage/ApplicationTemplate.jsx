import React, { useRef, useState, useEffect } from "react";
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
  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarStyle, setSidebarStyle] = useState({ position: 'sticky', top: '140px' });

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || !certificationsRef.current || !contentWrapperRef.current || !sidebarColumnRef.current) {
        return;
      }

      const sidebar = sidebarRef.current;
      const sidebarColumn = sidebarColumnRef.current;
      const certifications = certificationsRef.current;
      const wrapper = contentWrapperRef.current;

      const certificationsTop = certifications.getBoundingClientRect().top + window.scrollY;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const currentScroll = window.scrollY;
      const topOffset = 140; // Initial position offset in pixels
      const sidebarHeight = sidebar.offsetHeight;
      const sidebarColumnWidth = sidebarColumn.offsetWidth;
      
      // Calculate when sidebar should stop scrolling (when its bottom would hit certifications top)
      const stopScrollPosition = certificationsTop - sidebarHeight - topOffset - 20;
      
      // If we haven't reached the stop point, use sticky to let it scroll naturally
      if (currentScroll < stopScrollPosition) {
        setSidebarStyle({ 
          position: 'sticky', 
          top: `${topOffset}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      } else {
        // We've reached the stop point - lock sidebar in place using absolute positioning
        const maxScrollDistance = stopScrollPosition - wrapperTop;
        setSidebarStyle({ 
          position: 'absolute',
          top: `${maxScrollDistance}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      }
    };

    // Use requestAnimationFrame for smooth updates
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

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
        slides={undefined}
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          {data?.overview?.title || title}
        </h1>
      </div>

      {/* Content area with floating sidebar - stops before certifications */}
      <div ref={contentWrapperRef} className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div ref={sidebarColumnRef} className="lg:col-span-3 relative">
            <div ref={sidebarRef} className="self-start z-10 w-full" style={sidebarStyle}>
              <FloatingSidebar navigationData={applicationsNavData} />
            </div>
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

      {/* Certifications and beyond - sidebar stops floating here - Full width sections */}
      <div ref={certificationsRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <QualityStandardsSection />
      </div>
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <QuoteFormSection />
      </div>
    </div>
  );
}



