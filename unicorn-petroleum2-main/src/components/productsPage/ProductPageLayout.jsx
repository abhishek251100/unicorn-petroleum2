import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { productsNavigationData } from "./productsNavigationData";

export default function ProductPageLayout({
  children,
  title,
  subtitle,
  bannerImage = "/assets/hero-bg-home.jpg",
}) {
  const location = useLocation();

  const { prevItem, nextItem, currentItem } = useMemo(() => {
    const items = productsNavigationData?.categories ?? [];
    const index = items.findIndex((c) => c.link === location.pathname);
    const safeIndex = index >= 0 ? index : 0;
    const prev = items[(safeIndex - 1 + items.length) % items.length];
    const next = items[(safeIndex + 1) % items.length];
    const current = items[safeIndex];
    return { prevItem: prev, nextItem: next, currentItem: current };
  }, [location.pathname]);

  const resolvedTitle = title || currentItem?.name || "Product";
  const resolvedSubtitle = subtitle || "";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner with shared image and centered black text */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-white/30" />

        {/* Carousel buttons */}
        {prevItem && (
          <Link
            aria-label="Previous product"
            to={prevItem.link}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center"
          >
            <span className="text-xl">‹</span>
          </Link>
        )}
        {nextItem && (
          <Link
            aria-label="Next product"
            to={nextItem.link}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center"
          >
            <span className="text-xl">›</span>
          </Link>
        )}

        {/* Banner Content (centered title/subtitle) */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-black max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
              {resolvedTitle}
            </h1>
            {resolvedSubtitle && (
              <p className="text-xl md:text-2xl font-medium">
                {resolvedSubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Breadcrumbs at top center */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <nav className="text-black font-semibold text-base md:text-lg">
            <ol className="flex items-center space-x-2">
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
              <li className="text-gray-900">{resolvedTitle}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Area - After Banner */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">{children}</div>
    </div>
  );
}
