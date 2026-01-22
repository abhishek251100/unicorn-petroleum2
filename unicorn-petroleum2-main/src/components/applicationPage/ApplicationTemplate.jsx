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
  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({ position: 'sticky', top: '140px' });

  useEffect(() => {
    const handleScroll = () => {
      // Only apply floating effects on desktop (lg breakpoint = 1024px)
      if (window.innerWidth < 1024) {
        setSidebarStyle({ position: 'relative', top: '0px' });
        return;
      }

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
      // Only apply floating effects on desktop
      if (window.innerWidth < 1024) {
        return;
      }
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
  const [isPaused, setIsPaused] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Applications", link: "/applications" },
    { text: breadcrumbsTitle || title },
  ];

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products];

  // Ensure animation starts on mount
  useEffect(() => {
    if (products.length > 0 && marqueeRef.current && !isManualScroll) {
      // Force animation to start
      const marquee = marqueeRef.current;
      marquee.style.animation = 'none';
      // Trigger reflow
      void marquee.offsetWidth;
      marquee.style.animation = '';
    }
  }, [products.length, isManualScroll]);

  // Initialize scroll position when switching to manual mode
  useEffect(() => {
    if (!containerRef.current || !isManualScroll || !marqueeRef.current) return;

    // Calculate current animation position and sync scroll
    const container = containerRef.current;
    const marquee = marqueeRef.current;
    const cardWidth = window.innerWidth < 640 ? 288 : 320;
    const gap = 24;
    
    // Get computed transform value if animation was running
    const computedStyle = window.getComputedStyle(marquee);
    const transform = computedStyle.transform;
    let currentTranslateX = 0;
    
    if (transform && transform !== 'none') {
      const matrix = transform.match(/matrix\(([^)]+)\)/);
      if (matrix) {
        currentTranslateX = parseFloat(matrix[1].split(',')[4]) || 0;
      }
    }
    
    // Convert translateX to scrollLeft (invert the value)
    const scrollPosition = Math.abs(currentTranslateX);
    container.scrollLeft = scrollPosition;
  }, [isManualScroll]);

  // Handle infinite scroll when manually scrolling
  useEffect(() => {
    if (!containerRef.current || !isManualScroll) return;

    const container = containerRef.current;
    const cardWidth = window.innerWidth < 640 ? 288 : 320; // w-72 or w-80
    const gap = 24; // space-x-6
    const scrollWidth = (cardWidth + gap) * products.length;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      
      // If scrolled past the first set, reset to beginning seamlessly
      if (scrollLeft >= scrollWidth - 10) {
        container.scrollLeft = scrollLeft - scrollWidth;
      }
      // If scrolled before start, jump to end seamlessly
      else if (scrollLeft <= 10) {
        container.scrollLeft = scrollWidth + scrollLeft;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isManualScroll, products.length]);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
    setIsManualScroll(true);
    
    // Remove animation, enable scrolling
    if (marqueeRef.current) {
      marqueeRef.current.style.animation = 'none';
      const currentScroll = containerRef.current?.scrollLeft || 0;
      marqueeRef.current.style.transform = `translateX(-${currentScroll}px)`;
    }
    if (containerRef.current) {
      containerRef.current.style.overflowX = 'auto';
      // Sync scroll position with current animation position
      const marquee = marqueeRef.current;
      if (marquee) {
        const computedStyle = window.getComputedStyle(marquee);
        const transform = computedStyle.transform;
        if (transform && transform !== 'none') {
          const matrix = transform.match(/matrix\(([^)]+)\)/);
          if (matrix) {
            const currentTranslateX = parseFloat(matrix[1].split(',')[4]) || 0;
            containerRef.current.scrollLeft = Math.abs(currentTranslateX);
          }
        }
      }
    }
  };

  const handleTouchMove = (e) => {
    // Allow native scrolling - don't prevent default
    if (!isDragging.current) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
      if (deltaX > deltaY && deltaX > 10) {
        isDragging.current = true;
      }
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    // Resume auto-slide after interaction ends
    resumeAutoSlide();
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    touchStartX.current = e.clientX;
    setIsPaused(true);
    setIsManualScroll(true);
    
    // Remove animation, enable scrolling
    if (marqueeRef.current) {
      marqueeRef.current.style.animation = 'none';
      const currentScroll = containerRef.current?.scrollLeft || 0;
      marqueeRef.current.style.transform = `translateX(-${currentScroll}px)`;
    }
    if (containerRef.current) {
      containerRef.current.style.overflowX = 'auto';
      containerRef.current.style.cursor = 'grabbing';
    }
    
    // Add global mouse handlers for dragging outside container
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current && containerRef.current) {
      const deltaX = touchStartX.current - e.clientX;
      containerRef.current.scrollLeft += deltaX;
      touchStartX.current = e.clientX;
    }
  };

  const resumeAutoSlide = () => {
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Resume auto-slide after 2 seconds of no interaction
    scrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      setIsManualScroll(false);
      if (marqueeRef.current) {
        marqueeRef.current.style.animation = '';
        marqueeRef.current.style.transform = '';
      }
      if (containerRef.current) {
        containerRef.current.style.overflowX = 'hidden';
        containerRef.current.scrollLeft = 0;
        containerRef.current.style.cursor = 'default';
      }
    }, 2000);
  };

  const handleMouseUp = () => {
    const wasDragging = isDragging.current;
    const wasManualScroll = isManualScroll;
    
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    
    if (containerRef.current) {
      containerRef.current.style.cursor = wasManualScroll ? 'grab' : 'default';
    }
    
    // Always resume auto-slide after interaction ends (resumeAutoSlide handles multiple calls)
    if (wasManualScroll || wasDragging) {
      resumeAutoSlide();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SliderHero
        title={data?.hero?.title || title}
        subtitle={data?.hero?.description || data?.overview?.title}
        slides={data?.slider}
        bannerImage="/assets/BannerImages/applications%20desktop.jpg"
        breadcrumbs={breadcrumbs}
      />

      

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
                <p className="text-gray-700 leading-relaxed mb-8 text-justify text-left">
                  {data.overview.description}
                </p>
              )}

              {products && products.length > 0 && (
                <div className="relative">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 text-center">Related Products</h3>
                  </div>

                  {/* Marquee Container */}
                  <div 
                    ref={containerRef}
                    className={`marquee-container relative w-full ${isManualScroll ? 'overflow-x-auto' : 'overflow-hidden'}`}
                    onMouseEnter={() => {
                      if (!isManualScroll) {
                        setIsPaused(true);
                      }
                    }}
                    onMouseLeave={() => {
                      // If user was manually scrolling or dragging, ensure we resume auto-slide
                      if (isManualScroll || isDragging.current) {
                        handleMouseUp();
                      } else {
                        // Just unpause if we were only hovering
                        setIsPaused(false);
                      }
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    style={{
                      cursor: isManualScroll ? 'grab' : 'default',
                      WebkitOverflowScrolling: 'touch',
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#E99322 transparent',
                    }}
                  >
                    <style>{`
                      @keyframes marquee-scroll {
                        0% {
                          transform: translateX(0);
                        }
                        100% {
                          transform: translateX(-50%);
                        }
                      }
                      .marquee-animation {
                        animation: marquee-scroll ${Math.max(products.length * 2.5, 20)}s linear infinite;
                      }
                      .marquee-paused {
                        animation-play-state: paused;
                      }
                      @media (max-width: 640px) {
                        .marquee-animation {
                          animation-duration: ${Math.max(products.length * 2, 15)}s;
                        }
                      }
                      /* Custom scrollbar */
                      .marquee-container::-webkit-scrollbar {
                        height: 6px;
                      }
                      .marquee-container::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .marquee-container::-webkit-scrollbar-thumb {
                        background: #E99322;
                        border-radius: 3px;
                      }
                      .marquee-container::-webkit-scrollbar-thumb:hover {
                        background: #E99322;
                      }
                    `}</style>
                    
                    <div 
                      ref={marqueeRef}
                      className={`flex space-x-6 ${!isManualScroll ? 'marquee-animation' : ''} ${!isManualScroll && isPaused ? 'marquee-paused' : ''}`}
                      style={{
                        width: 'fit-content',
                        willChange: isManualScroll ? 'auto' : 'transform',
                        display: 'flex',
                      }}
                    >
                      {duplicatedProducts.map((product, index) => {
                        return (
                        <div 
                          key={`${product.name}-${index}`} 
                          className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-lg border-[1.5px] border-[#EDA94E] hover:shadow-lg transition-shadow flex flex-col group h-[430px]"
                        >
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
                              {product.description && <p className="text-gray-600 mb-4 text-sm">{product.description}</p>}
                            </div>
                            <Link to={product.link || getProductPath(product.name)} className="w-full bg-[#E99322] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#E99322]/90 transition-all duration-300 flex items-center justify-center">
                              View Details
                            </Link>
                          </div>
                        </div>
                        );
                      })}
                    </div>
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



