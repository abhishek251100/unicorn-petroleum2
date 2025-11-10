import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function SliderHero({
  title,
  subtitle,
  slides = [],
  bannerImage = "/assets/hero-bg-home.jpg", // fallback for single image
  breadcrumbs,
  autoPlay = true,
  autoPlayInterval = 5000,
  // Optional buttons for hero-style banner
  primaryButton,
  primaryButtonLink,
  secondaryButton,
  secondaryButtonLink,
  primaryButtonColor = "#E99322",
  secondaryButtonColor = "#E99322",
  breadcrumbsTopClass = "top-16 sm:top-20 md:top-24 lg:top-32",
  breadcrumbsNavClass = "text-black font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base px-2 sm:px-4 -mt-[21%] sm:mt-0",
  overlapClass = "md:-mt-12",
  paddingTopClass = "pt-10 sm:pt-12 md:pt-12",
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const intervalRef = useRef(null);

  // Determine if we have multiple slides or single image
  const hasMultipleSlides = slides && slides.length > 0;

  const totalSlides = hasMultipleSlides ? slides.length : 1;

  const handleNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsSliding(false), 500);
  };

  const handlePrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsSliding(false), 500);
  };

  const goToSlide = (index) => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide(index);
    setTimeout(() => setIsSliding(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && hasMultipleSlides && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, autoPlayInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoPlay, hasMultipleSlides, totalSlides, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay && hasMultipleSlides && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, autoPlayInterval);
    }
  };

  // Get current slide data
  const currentSlideData = hasMultipleSlides && slides[currentSlide]
    ? {
        ...slides[currentSlide],
        image: slides[currentSlide]?.image || bannerImage || "/assets/hero-bg-home.jpg",
        // Use slide's title/subtitle if explicitly defined (even if empty string), otherwise fall back to props
        title: slides[currentSlide].title !== undefined 
          ? slides[currentSlide].title 
          : (title || ""),
        subtitle: slides[currentSlide].subtitle !== undefined 
          ? slides[currentSlide].subtitle 
          : (subtitle || ""),
        mobileImage: slides[currentSlide]?.mobileImage || slides[currentSlide]?.image || bannerImage || "/assets/hero-bg-home.jpg",
      }
    : {
        title: title || "",
        subtitle: subtitle || "",
        image: bannerImage || "/assets/hero-bg-home.jpg",
        mobileImage: bannerImage || "/assets/hero-bg-home.jpg",
      };

  return (
    <div
      className={`relative w-full h-[550px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden ${overlapClass} ${paddingTopClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {/* Background Images */}
        <div className="absolute inset-0 z-0 transition-opacity duration-500 bg-gray-200">
          {/* Desktop Image */}
          <div
            className="hidden md:block absolute inset-0 transition-opacity duration-500"
            style={{
              backgroundImage: `url(${currentSlideData.image || bannerImage || "/assets/hero-bg-home.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#e5e7eb",
              opacity: isSliding ? 0.7 : 1,
            }}
          />
          {/* Mobile Image */}
          <div
            className="md:hidden absolute inset-0 transition-opacity duration-500"
            style={{
              backgroundImage: `url(${currentSlideData.mobileImage || currentSlideData.image || bannerImage || "/assets/hero-bg-home.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#e5e7eb",
              opacity: isSliding ? 0.7 : 1,
            }}
          />
          {/* Overlay for better text readability - only show if there's text */}
          {((currentSlideData.title && currentSlideData.title.trim() !== "") || (currentSlideData.subtitle && currentSlideData.subtitle.trim() !== "")) && (
            <div className="absolute inset-0 bg-white/25 pointer-events-none z-10" />
          )}
        </div>

        {/* Navigation Buttons (only show if multiple slides, hidden on mobile) */}
        {hasMultipleSlides && totalSlides > 1 && (
          <>
            <button
              onClick={handlePrev}
              disabled={isSliding}
              className="hidden md:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/80 hover:bg-white shadow-lg items-center justify-center backdrop-blur-sm transition-all duration-200 disabled:opacity-50 hover:scale-110 active:scale-95"
              aria-label="Previous slide"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-none pb-1.5">‹</span>
            </button>

            <button
              onClick={handleNext}
              disabled={isSliding}
              className="hidden md:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/80 hover:bg-white shadow-lg items-center justify-center backdrop-blur-sm transition-all duration-200 disabled:opacity-50 hover:scale-110 active:scale-95"
              aria-label="Next slide"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-none pb-1.5">›</span>
            </button>
          </>
        )}

        {/* Slide Indicators (only show if multiple slides) */}
        {hasMultipleSlides && totalSlides > 1 && (
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-6 sm:w-8 shadow-lg"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Content - only show if there's a title or subtitle in the current slide */}
        {((currentSlideData.title && currentSlideData.title.trim() !== "") || (currentSlideData.subtitle && currentSlideData.subtitle.trim() !== "")) && (
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className={`${primaryButton || secondaryButton ? 'max-w-4xl' : 'text-center text-black max-w-4xl'} mx-auto px-4 sm:px-6`}>
              {/* Blurred patch for text */}
              <div className={`${primaryButton || secondaryButton ? 'bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border-[1.5px] border-[#EDA94E]' : ''} animate-fade-in`}>
                {(currentSlideData.title && currentSlideData.title.trim() !== "") && (
                  <h1
                    className={`${primaryButton || secondaryButton ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight text-left' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3 md:mb-4 tracking-tight text-center'} font-bold animate-fade-in`}
                    style={{ opacity: isSliding ? 0 : 1 }}
                  >
                    {currentSlideData.title}
                  </h1>
                )}
                {(currentSlideData.subtitle && currentSlideData.subtitle.trim() !== "") && (
                  <p
                    className={`${primaryButton || secondaryButton ? 'text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-3xl text-left' : 'text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center'} text-black animate-fade-in`}
                    style={{ opacity: isSliding ? 0 : 1 }}
                  >
                    {currentSlideData.subtitle}
                  </p>
                )}
                
                {/* CTA Buttons (hidden on mobile) - only show on slides with text */}
                {((currentSlideData.title && currentSlideData.title.trim() !== "") && (primaryButton || secondaryButton)) && (
                  <div className="hidden sm:flex flex-row gap-4 justify-center items-center">
                    {primaryButton && (
                      <Link 
                        to={primaryButtonLink || "/products"}
                        className="text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:opacity-90 transition-colors flex items-center space-x-2"
                        style={{ backgroundColor: primaryButtonColor }}
                      >
                        <span>{primaryButton}</span>
                        <span className="text-lg sm:text-xl">→</span>
                      </Link>
                    )}
                    
                    {secondaryButton && (
                      <Link 
                        to={secondaryButtonLink || "/about"}
                        className="bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg border-2 hover:bg-gray-50 transition-colors"
                        style={{ 
                          color: secondaryButtonColor,
                          borderColor: secondaryButtonColor
                        }}
                      >
                        {secondaryButton}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <div className={`absolute ${breadcrumbsTopClass} left-1/2 -translate-x-1/2 z-20 breadcrumbs-container`}>
            <nav className={`${breadcrumbsNavClass}`}>
              <ol className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 flex-wrap justify-center">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <li className="truncate max-w-[80px] sm:max-w-[100px] md:max-w-none">
                      {crumb.link ? (
                        <Link to={crumb.link} className="hover:text-gray-700 transition-colors">
                          {crumb.text}
                        </Link>
                      ) : (
                        <span className="text-gray-900">{crumb.text}</span>
                      )}
                    </li>
                    {index < breadcrumbs.length - 1 && <li className="mx-0.5 sm:mx-1">›</li>}
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          </div>
        )}
      </div>

      {/* CSS for smooth fade animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

