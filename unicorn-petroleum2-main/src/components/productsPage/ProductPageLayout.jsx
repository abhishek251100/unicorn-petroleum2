import React, { useMemo, useRef, useState } from "react";
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

  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    swipeStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping) return;
    const endX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : null;
    if (endX == null || swipeStartX.current == null) {
      setIsSwiping(false);
      return;
    }
    const dx = endX - swipeStartX.current;
    const threshold = 50; // px
    if (dx > threshold && prevItem?.link) {
      navigate(prevItem.link);
    } else if (dx < -threshold && nextItem?.link) {
      navigate(nextItem.link);
    }
    setIsSwiping(false);
    swipeStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner with shared image and centered black text - Now overlapping navbar */}
      <div className="relative w-full h-80 sm:h-96 md:h-[500px] overflow-hidden -mt-16 pt-16" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
          <Link
            aria-label="Previous product"
            to={prevItem.link}
            className="absolute left-3 top-[58%] md:top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/60 md:bg-white/70 hover:bg-white/90 shadow-sm flex items-center justify-center backdrop-blur-sm"
          >
            <span className="text-lg md:text-xl">‹</span>
          </Link>
        )}
        {nextItem && (
          <Link
            aria-label="Next product"
            to={nextItem.link}
            className="absolute right-3 top-[58%] md:top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/60 md:bg-white/70 hover:bg-white/90 shadow-sm flex items-center justify-center backdrop-blur-sm"
          >
            <span className="text-lg md:text-xl">›</span>
          </Link>
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
      <div className="relative max-w-7xl mx-auto px-4 py-6">{children}</div>
    </div>
  );
}
