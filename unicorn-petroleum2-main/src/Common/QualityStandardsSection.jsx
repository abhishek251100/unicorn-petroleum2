import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function QualityStandardsSection({ title, subtitle, showLink = true }) {
  const certifications = [
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 449.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 450.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 451.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 452.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 453.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 454.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 455.png",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
            {title || 'Globally Recognized Quality & Safety Standards'}
          </h2>
          {(subtitle !== undefined ? subtitle : 'Driven by quality, trusted for generations.') && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600">{subtitle ?? 'Driven by quality, trusted for generations.'}</p>
          )}
        </div>

        {/* Mobile Swiper Carousel */}
        <div className="block md:hidden">
          <style jsx>{`
            .certifications-swiper .swiper-pagination {
              position: relative !important;
              margin-top: 30px !important;
              bottom: auto !important;
            }
            .certifications-swiper .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: #d1d5db;
              opacity: 1;
              margin: 0 4px;
            }
            .certifications-swiper .swiper-pagination-bullet-active {
              background: #E99322;
            }
            @media (min-width: 768px) {
              .certifications-swiper {
                pointer-events: none !important;
              }
            }
          `}</style>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            allowTouchMove={true}
            simulateTouch={false}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={false}
            touchRatio={1}
            touchAngle={45}
            threshold={5}
            className="certifications-swiper"
          >
            {certifications.map((cert, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center py-4">
                  <img 
                    src={cert.logo} 
                    alt={cert.code} 
                    className="w-24 h-24 object-contain" 
                    style={{
                      transform: 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                <img src={cert.logo} alt={cert.code} className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-gray-800 font-semibold leading-tight">{cert.code}</p>
                {cert.full && (
                  <p className="text-xs text-gray-600 whitespace-pre-line leading-tight">{cert.full}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {showLink && (
          <div className="text-center">
            <Link to="/quality" className="text-[#101301] font-medium hover:underline transition-colors text-sm sm:text-base">
              View All Certifications →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}