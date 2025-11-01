import React, { useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ApplicationsSection = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const autoRef = useRef(null);
  const timeoutRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    const sectionEl = sectionRef.current;
    if (!el || !sectionEl) return;

    const advance = () => {
      const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 220, behavior: 'smooth' });
      }
    };

    const startInterval = () => {
      if (autoRef.current) return;
      // Do the first move immediately after the 3s delay
      advance();
      autoRef.current = setInterval(() => {
        advance();
      }, 2500);
    };

    const startAutoDelayed = () => {
      if (timeoutRef.current || autoRef.current) return;
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        startInterval();
      }, 2500);
    };

    const stopAuto = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (autoRef.current) {
        clearInterval(autoRef.current);
        autoRef.current = null;
      }
    };

    const maybeStartIfVisible = () => {
      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      const ratio = Math.max(0, Math.min(visibleHeight / Math.max(1, rect.height), 1));
      if (ratio >= 0.4) startAutoDelayed();
    };

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAutoDelayed();
            } else {
              stopAuto();
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(sectionEl);
      // If already visible on mount, kick it off immediately
      maybeStartIfVisible();
    } else {
      // Fallback: start after delay on mount
      startAutoDelayed();
    }

    const onEnter = () => stopAuto();
    const onLeave = () => startAutoDelayed();
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    // Mobile touch: pause on touch and resume after release
    el.addEventListener('touchstart', onEnter, { passive: true });
    el.addEventListener('touchend', onLeave, { passive: true });
    el.addEventListener('touchcancel', onLeave, { passive: true });

    return () => {
      stopAuto();
      if (observer) observer.disconnect();
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchstart', onEnter);
      el.removeEventListener('touchend', onLeave);
      el.removeEventListener('touchcancel', onLeave);
    };
  }, []);

  if (!data || !data.applications || !data.finalProductUtilization) {
    return null;
  }

  return (
    <section ref={sectionRef} className="pt-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Applications of {data.productName}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {data.applications}
          </p>
          
          {/* Application Points as Bullet Points */}
          {data.applicationPoints && data.applicationPoints.length > 0 && (
            <div className="mt-6 max-w-4xl mx-auto">
              <ul className="text-lg text-gray-700 space-y-2 text-left">
                {data.applicationPoints.map((point, index) => {
                  const colonIndex = point.indexOf(':');
                  const industryName = colonIndex !== -1 ? point.substring(0, colonIndex + 1) : '';
                  const description = colonIndex !== -1 ? point.substring(colonIndex + 1).trim() : point;
                  
                  return (
                    <li key={index} className="flex items-start">
                      <span className="text-[#E99322] mr-3 mt-1">•</span>
                      <span>
                        {industryName && <span className="font-bold">{industryName}</span>}
                        {description && <span> {description}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Final product utilization:
          </h3>
          
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-[1.5px] border-[#EDA94E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FiChevronLeft className="text-gray-600 text-lg" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-[1.5px] border-[#EDA94E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FiChevronRight className="text-gray-600 text-lg" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-12 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {data.finalProductUtilization.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 bg-white border-[1.5px] border-[#EDA94E] rounded-full text-gray-700 font-medium hover:border-[#EDA94E] hover:text-[#E99322] transition-all duration-200 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
