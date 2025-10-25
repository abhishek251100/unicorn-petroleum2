import React, { useState, useEffect, useRef } from "react";
import BannerWithNavigation from "../Common/BannerWithNavigation";

const ReachPage = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  const breadcrumbs = [
    { text: "Home", link: "/" }, 
    { text: "Global Reach" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  const startCounter = () => {
    let currentCount = 0;
    const targetCount = 60;
    const duration = 2000; // 2 seconds
    const increment = targetCount / (duration / 16); // 60fps

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 16);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <BannerWithNavigation
        title="Global Reach"
        subtitle="Delivering Quality Beyond Borders"
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Background World Map Graphic */}
          <div className="relative mb-16">
            <div className="absolute inset-0 opacity-20">
              {/* Simplified world map representation with dashed lines */}
              <svg viewBox="0 0 800 400" className="w-full h-64">
                {/* World map outline */}
                <path
                  d="M100,200 Q200,150 300,200 Q400,180 500,200 Q600,190 700,200"
                  stroke="#E99322"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.6"
                />
                {/* Connection lines */}
                <line x1="150" y1="180" x2="200" y2="160" stroke="#E99322" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="250" y1="190" x2="300" y2="170" stroke="#E99322" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="350" y1="185" x2="400" y2="165" stroke="#E99322" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="450" y1="195" x2="500" y2="175" stroke="#E99322" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="550" y1="188" x2="600" y2="168" stroke="#E99322" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="650" y1="192" x2="700" y2="172" stroke="#E99322" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
              </svg>
            </div>
            
            {/* Main Title */}
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Global reach
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12">
                Delivering quality across
              </p>
              
              {/* Animated Counter */}
              <div ref={counterRef} className="mb-4">
                <span className="text-6xl md:text-8xl font-bold text-[#E99322]">
                  {count}+
                </span>
              </div>
              
              <p className="text-4xl md:text-5xl font-bold text-[#E99322] mb-12">
                countries
              </p>
            </div>
          </div>

          {/* Content Paragraphs */}
          <div className="w-full">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Given our impeccable quality adherence, over past six decades, we enjoy the patronage of majority of the world's most recognisable top notch pharmaceutical, cosmetic & FMCG companies, whose loyalty is a testament of our time tested, product quality.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With exports to more than 60 countries, we specialize in providing consistent quality products, which meets the most stringent quality requirements of various pharmacopoeias.
              </p>
            </div>
            
            {/* Concluding Tagline */}
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReachPage;