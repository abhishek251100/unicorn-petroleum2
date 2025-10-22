import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { productsNavigationData } from "./productsNavigationData";

export default function ProductPageLayout({
  children,
  title,
  subtitle,
  bannerImage = "/assets/hero-bg-home.jpg",
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const swipeStartX = useRef(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('right');
  const contentRef = useRef(null);

  // Track previous location for animation direction
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      setIsTransitioning(true);
      
      // Determine animation direction based on navigation order
      const items = productsNavigationData?.categories ?? [];
      const prevIdx = items.findIndex(item => item.link === prevLocationRef.current);
      const currentIdx = items.findIndex(item => item.link === location.pathname);
      
      if (prevIdx !== -1 && currentIdx !== -1) {
        setAnimationDirection(currentIdx > prevIdx ? 'right' : 'left');
      }
      
      // Reset transition after animation
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      
      prevLocationRef.current = location.pathname;
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const { prevItem, nextItem, currentItem } = useMemo(() => {
    const items = productsNavigationData?.categories ?? [];
    if (items.length === 0) return { prevItem: null, nextItem: null, currentItem: null };

    // Find direct match first
    let idx = items.findIndex((c) => c.link === location.pathname);
    // If not found, try match by subItems containing current path
    if (idx === -1) {
      idx = items.findIndex((c) => Array.isArray(c.subItems) && c.subItems.some((s) => s.link === location.pathname));
    }

    if (idx === -1) {
      // Unknown product slug: do not default to first; disable prev/next
      return { prevItem: null, nextItem: null, currentItem: null };
    }

    const prev = items[(idx - 1 + items.length) % items.length];
    const next = items[(idx + 1) % items.length];
    const current = items[idx];
    return { prevItem: prev, nextItem: next, currentItem: current };
  }, [location.pathname]);

  const resolvedTitle = title || currentItem?.name || (location.pathname === "/products" ? "Products" : "Product");
  const resolvedSubtitle = subtitle || ""; // Use the subtitle prop if provided

  const handleNavigation = (link, direction) => {
    if (isTransitioning) return;
    
    setAnimationDirection(direction);
    setIsTransitioning(true);
    
    // Navigate after a brief delay to allow exit animation
    setTimeout(() => {
      navigate(link);
    }, 200);
  };

  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    swipeStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping || isTransitioning) return;
    const endX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : null;
    if (endX == null || swipeStartX.current == null) {
      setIsSwiping(false);
      return;
    }
    const dx = endX - swipeStartX.current;
    const threshold = 50; // px
    if (dx > threshold && prevItem?.link) {
      handleNavigation(prevItem.link, 'left');
    } else if (dx < -threshold && nextItem?.link) {
      handleNavigation(nextItem.link, 'right');
    }
    setIsSwiping(false);
    swipeStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Banner with shared image and centered black text - Now overlapping navbar */}
      <div className="relative w-full h-80 sm:h-96 md:h-[500px] overflow-hidden -mt-16 pt-16" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ marginTop: '-80px', paddingTop: '80px' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />

        {/* Carousel buttons */}
        {prevItem && (
          <button
            aria-label="Previous product"
            onClick={() => handleNavigation(prevItem.link, 'left')}
            disabled={isTransitioning}
            className="absolute left-3 top-[58%] md:top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/60 md:bg-white/70 hover:bg-white/90 shadow-sm flex items-center justify-center backdrop-blur-sm transition-all duration-200 disabled:opacity-50"
          >
            <span className="text-lg md:text-xl">‹</span>
          </button>
        )}
        {nextItem && (
          <button
            aria-label="Next product"
            onClick={() => handleNavigation(nextItem.link, 'right')}
            disabled={isTransitioning}
            className="absolute right-3 top-[58%] md:top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/60 md:bg-white/70 hover:bg-white/90 shadow-sm flex items-center justify-center backdrop-blur-sm transition-all duration-200 disabled:opacity-50"
          >
            <span className="text-lg md:text-xl">›</span>
          </button>
        )}

        {/* Banner Content (centered title/subtitle) */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-black max-w-4xl mx-auto px-4 z-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 tracking-tight">
              {resolvedTitle}
            </h1>
            {resolvedSubtitle && (
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium">
                {resolvedSubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Breadcrumbs at top center */}
        <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 z-20">
          <nav className="text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
            <ol className="flex items-center space-x-1 sm:space-x-2">
              <li>
                <Link to="/" className="hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>›</li>
              <li>
                <Link to="/products" className="hover:text-gray-700">
                  Products
                </Link>
              </li>
              <li>›</li>
              <li className="text-gray-900 truncate max-w-[120px] sm:max-w-none">{resolvedTitle}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Area - After Banner */}
      <div className="relative max-w-7xl mx-auto px-4 py-6 overflow-x-hidden">
        <div 
          ref={contentRef}
          className={`page-transition-content ${
            isTransitioning 
              ? `animate-slide-out-${animationDirection}` 
              : `animate-slide-in-${animationDirection}`
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
