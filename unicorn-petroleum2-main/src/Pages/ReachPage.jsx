import React, { useState, useEffect, useRef } from "react";
import SliderHero from "../Common/SliderHero";

const ReachPage = () => {
  const [counts, setCounts] = useState({ years: 0, countries: 0, companies: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const desktopCounterRef = useRef(null);
  const mobileCounterRef = useRef(null);

  const breadcrumbs = [
    { text: "Home", link: "/" }, 
    { text: "Global Reach" }
  ];

  useEffect(() => {
    if (isVisible) return; // Already started

    const startCounters = () => {
      setIsVisible(true);
      
      const targets = { years: 60, countries: 60, companies: 750 };
      const duration = 2000;
      const increment = 16;
      let currentTime = 0;

      const timer = setInterval(() => {
        currentTime += increment;
        const progress = Math.min(currentTime / duration, 1);
        
        setCounts({
          years: Math.floor(targets.years * progress),
          countries: Math.floor(targets.countries * progress),
          companies: Math.floor(targets.companies * progress)
        });

        if (progress >= 1) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, increment);
    };

    const checkAndStart = () => {
      // Check if desktop section is visible
      if (desktopCounterRef.current) {
        const rect = desktopCounterRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          startCounters();
          return;
        }
      }
      // Check if mobile section is visible
      if (mobileCounterRef.current) {
        const rect = mobileCounterRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          startCounters();
        }
      }
    };

    // Check immediately on mount (with a small delay to ensure DOM is ready)
    const timeoutId = setTimeout(() => {
      checkAndStart();
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe both desktop and mobile sections
    if (desktopCounterRef.current) {
      observer.observe(desktopCounterRef.current);
    }
    if (mobileCounterRef.current) {
      observer.observe(mobileCounterRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      if (desktopCounterRef.current) {
        observer.unobserve(desktopCounterRef.current);
      }
      if (mobileCounterRef.current) {
        observer.unobserve(mobileCounterRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section with Stats Circles */}
      <div className="relative h-[340px] sm:h-[480px] md:h-[600px] lg:h-[650px] overflow-visible md:-mt-8 pt-20 md:pt-16 mb-8 md:mb-32">
        {/* Banner Image Background */}
        <div className="absolute inset-0">
          <img 
            src="/assets/hero-bg-home.jpg" 
            alt="Banner background" 
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30"></div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute top-28 sm:top-28 md:top-28 lg:top-32 left-1/2 -translate-x-1/2 z-20">
          <nav className="text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
            <ol className="flex items-center space-x-1 sm:space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li>
                    {crumb.link ? (
                      <a href={crumb.link} className="hover:text-gray-700 transition-colors">
                        {crumb.text}
                      </a>
                    ) : (
                      <span className="text-gray-900">{crumb.text}</span>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && <li>›</li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>

        {/* Stats Circles - overlay on md+ only */}
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 z-10 pointer-events-none">
          <div ref={desktopCounterRef} className="grid grid-cols-3 gap-14">
            {/* Years */}
            <div className="rounded-full aspect-square flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E99322] mb-1">
                {counts.years}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">years</div>
            </div>

            {/* Countries */}
            <div className="rounded-full aspect-square flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E99322] mb-1">
                {counts.countries}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">countries</div>
            </div>

            {/* Companies */}
            <div className="rounded-full aspect-square flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E99322] mb-1">
                {counts.companies}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">companies</div>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Circles Section (stacked) */}
      <section ref={mobileCounterRef} className="block md:hidden px-4 pt-0 pb-6 bg-white">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-5">
          {/* Years */}
          <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center p-4 shadow-xl mx-auto">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.years}+</div>
            <div className="text-sm font-medium text-[#E99322]">years</div>
          </div>

          {/* Countries */}
          <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center p-4 shadow-xl mx-auto">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.countries}+</div>
            <div className="text-sm font-medium text-[#E99322]">countries</div>
          </div>

          {/* Companies - center on its own row */}
          <div className="col-span-2 place-self-center w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center p-4 shadow-xl">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.companies}+</div>
            <div className="text-sm font-medium text-[#E99322]">companies</div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white mt-8 md:mt-48">
        {/* Title Section - After the banner */}
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global reach
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-700">
            Delivering quality beyond borders
          </p>
        </div>
        <div className="max-w-6xl mx-auto space-y-6 text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Given our impeccable quality adherence, over past six decades, we enjoy the patronage of majority of the world's most recognisable top notch pharmaceutical, cosmetic & FMCG companies, whose loyalty is a testament of our time tested, product quality.
          </p>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            With exports to more than 60 countries, we specialize in providing consistent quality products, which meets the most stringent quality requirements of various pharmacopoeias.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReachPage;
