import React, { useEffect } from "react";
import BannerWithNavigation from "../Common/BannerWithNavigation";
import QualityStandardsSection from "../Common/QualityStandardsSection";
import QuoteFormSection from "../Common/QuoteFormSection";

const ContactPage = () => {
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Contact" }];

  useEffect(() => {
    // Update meta tags for Contact page
    document.title = "Contact Us | Unicorn Petroleum Industries";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Unicorn Petroleum Industries. Contact us for inquiries about petroleum jelly, mineral oils, waxes, and specialty chemicals. Located in Mumbai, India.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <BannerWithNavigation
        title="Get in touch with us"
        subtitle="We're here to assist with your inquiries."
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Contact information - Full width 3 column layout */}
      <section className="py-12 md:py-16 w-full">
        <div className="w-full px-4">
          {/* Contact information container with 3 columns - Reduced width */}
          <div className="max-w-7xl mx-auto p-4 md:p-6 border border-gray-300 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-0 items-center w-full">
              {/* Mobile Layout - Single Column with Icons */}
              <div className="md:hidden space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">Unit No. 1 'Riddhi Siddhi', Corporate Park, VN Purav Marg, Chembur, Mumbai, 400071, India.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">+91-22-42324121, +91-22-42324122</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">info@unicornpetro.co.in, manan@unicornpetro.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">Monday–Friday, 9 AM – 6 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Left Column - Headings Only (30%) */}
              <div className="hidden md:block md:col-span-3 space-y-4 text-right mr-[12%]">
                <div className="flex items-center justify-end">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 ml-[55%]">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 -ml-1">
                    <p className="text-sm font-semibold text-[#E99322]">Main Office Address:</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 ml-[55%]">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 -ml-1">
                    <p className="text-sm font-semibold text-[#E99322]">Phone Numbers:</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 ml-[55%]">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 -ml-1">
                    <p className="text-sm font-semibold text-[#E99322]">Email Addresses:</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 ml-[55%]">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 -ml-1">
                    <p className="text-sm font-semibold text-[#E99322]">Working Hours:</p>
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout - Middle Column - Details Only (30%) */}
              <div className="hidden md:block md:col-span-3 space-y-4">
                <div className="flex items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed text-gray-800 whitespace-nowrap">Unit No. 1 'Riddhi Siddhi', Corporate Park, VN Purav Marg, Chembur, Mumbai, 400071, India.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">+91-22-42324121, +91-22-42324122</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">info@unicornpetro.co.in, manan@unicornpetro.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">Monday–Friday, 9 AM – 6 PM IST</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Map */}
              <div className="md:hidden w-full h-64 rounded-lg overflow-hidden mt-6">
                <iframe
                  title="Unicorn Petroleum Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.8765432!3d19.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a4dc1f2349%3A0xb8521a0cedb54cd4!2sUnit%20no.%201%2C%20UNICORN%20PETROLEUM%20INDUSTRIES%20PVT.%20LIMITED.%2C%20Riddhi%20Siddhi%2C%20CORPORATE%20PARK%2C%20Sion%20-%20Trombay%20Rd%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Desktop Right Column - Map (40%) */}
              <div className="hidden md:block md:col-span-4 w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  title="Unicorn Petroleum Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.8765432!3d19.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a4dc1f2349%3A0xb8521a0cedb54cd4!2sUnit%20no.%201%2C%20UNICORN%20PETROLEUM%20INDUSTRIES%20PVT.%20LIMITED.%2C%20Riddhi%20Siddhi%2C%20CORPORATE%20PARK%2C%20Sion%20-%20Trombay%20Rd%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form (common component for uniformity) */}
      <QuoteFormSection mode="contact" title="Send us a message" />

    
    </div>
  );
};

export default ContactPage;