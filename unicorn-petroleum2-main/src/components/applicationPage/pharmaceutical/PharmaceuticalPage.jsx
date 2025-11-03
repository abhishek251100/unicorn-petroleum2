import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductPath } from '../../../Data/productLinks';
import { getProductHoverImage, UNIVERSAL_HOVER_IMAGE } from '../../../Data/productHoverImages';
import FloatingSidebar from '../../../Common/FloatingSidebar';
import QualityStandardsSection from '../../../Common/QualityStandardsSection';
import QuoteFormSection from '../../../Common/QuoteFormSection';
import SliderHero from '../../../Common/SliderHero';
import { getNavigationData } from '../../../Data/navigationData';
import { pharmaceuticalData } from './pharmaceuticalData';

export default function PharmaceuticalPage() {
  // Get navigation data for applications section
  const applicationsNavData = getNavigationData('applications');
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

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Applications", link: "/applications" },
    { text: "Pharmaceutical" }
  ];

  const products = [
    {
      name: "Petroleum Jelly",
      description: "Healing ointments, skin protectants, and excipients in topical medicines.",
      image: "/assets/RELATED PROD IMG/Petroleum jelly.png"
    },
    {
      name: "White Mineral Oils",
      description: "Used as a laxative, tablet coating, ointment base, and in topical formulations.",
      image: "/assets/RELATED PROD IMG/Mineral Oil.png"
    },
    {
      name: "Microcrystalline Wax",
      description: "Used in manufacturing ointments and balms.",
      image: "/assets/RELATED PROD IMG/Microcrystalline.png"
    },
    {
      name: "Natural Beeswax",
      description: "Used in ointments, tablet coatings, slow-release formulations, and as a binding agent.",
      image: "/assets/RELATED PROD IMG/Beeswax2 (2).png"
    },
    {
      name: "Emulsifying Wax",
      description: "Used in emulsified medicinal creams.",
      image: "/assets/RELATED PROD IMG/Emulsifying wax2.png"
    },
    {
      name: "D-Panthenol",
      description: "Provitamin of B5 supporting skin regeneration and hydration.",
      image: "/assets/RELATED PROD IMG/Frame 531 (1).png"
    },
    {
      name: "Preservatives",
      description: "Prevent microbial growth in syrups, eye drops, ointments, and injectables.",
      image: "/assets/RELATED PROD IMG/Frame 531 (4).png"
    },
    {
      name: "Surfactants",
      description: "Solubilizers, emulsifiers, wetting agents in syrups, suspensions, and topical formulations.",
      image: "/assets/RELATED PROD IMG/sodium-salphate.png"
    },
    {
      name: "UV Filters",
      description: "Used in dermatological formulations to protect against UV‑induced damage.",
      image: "/assets/RELATED PROD IMG/ExtraUV/Frame 531 (12).png"
    }
  ];

  const scrollToSlide = (direction) => {
    if (!sliderRef.current) return;
    
    const container = sliderRef.current;
    const cardWidth = 320; // w-80 = 320px
    const gap = 24; // space-x-6 = 24px
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentSlide(Math.max(0, currentSlide - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentSlide(Math.min(products.length - 1, currentSlide + 1));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Slider Hero Banner */}
      <SliderHero
        title={pharmaceuticalData.hero.title}
        subtitle={pharmaceuticalData.hero.description}
        slides={undefined}
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Full Width Heading */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          {pharmaceuticalData.overview.title}
        </h1>
      </div>

      {/* Main Content Area with Sidebar - Content area with floating sidebar - stops before certifications */}
      <div ref={contentWrapperRef} className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div ref={sidebarColumnRef} className="lg:col-span-3 relative">
            <div ref={sidebarRef} className="self-start z-10 w-full" style={sidebarStyle}>
            <FloatingSidebar navigationData={applicationsNavData} />
            </div>
          </div>
          
          <div className="lg:col-span-9">
            {/* Pharmaceutical Content Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Tailored for pharmaceutical products
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {pharmaceuticalData.overview.description}
              </p>
              
              {/* Product Slider with Navigation Buttons */}
              <div className="relative">
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => scrollToSlide('left')}
                    disabled={currentSlide === 0}
                    className="w-10 h-10 rounded-full bg-[#E99322] text-white hover:bg-[#E99322]/90 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    ‹
                  </button>
                  <h3 className="text-xl font-semibold text-gray-800">Related Products</h3>
                  <button
                    onClick={() => scrollToSlide('right')}
                    disabled={currentSlide === products.length - 1}
                    className="w-10 h-10 rounded-full bg-[#E99322] text-white hover:bg-[#E99322]/90 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    ›
                  </button>
                </div>

                {/* Product Slider */}
                <div 
                  ref={sliderRef}
                  className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
                >
                  {products.map((product, index) => (
                    <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg border-[1.5px] border-[#EDA94E] hover:shadow-lg transition-shadow flex flex-col group h-[430px]">
                      <div className="h-48 bg-gray-100 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover rounded-t-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.nextSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full bg-gray-200 rounded-t-lg items-center justify-center">
                          <span className="text-gray-500 font-semibold">{product.name}</span>
                        </div>
                          <img
                            src={product.hoverImage || getProductHoverImage(product.name)}
                            alt={`${product.name} hover`}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"
                            loading="lazy"
                          onError={(e) => {
                            e.target.src = UNIVERSAL_HOVER_IMAGE;
                          }}
                          />
                      </div>
                      <div className="p-6 text-center flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                        </div>
                        <Link to={getProductPath(product.name)} className="w-full bg-[#E99322] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#E99322]/90 transition-colors flex items-center justify-center">
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Certifications and beyond - sidebar stops floating here - Full width sections */}
      <div ref={certificationsRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <QualityStandardsSection />
      </div>

      {/* Existing Quote Form Section */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <QuoteFormSection />
      </div>
    </div>
  );
}

