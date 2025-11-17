import React from "react";
import QualityStandardsSection from "../Common/QualityStandardsSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useMetaTags } from "../hooks/useMetaTags";
import VideoBanner from "../Common/VideoBanner";

const AboutPage = () => {
  useMetaTags(
    "About Us - Unicorn Petroleum Industries | A Legacy of Excellence Since 1964",
    "Learn about Unicorn Petroleum Industries, a trusted manufacturer of petroleum products since 1964. Discover our values, vision, mission, and commitment to quality, consistency, and customer satisfaction.",
    "Unicorn Petroleum, about us, company history, petroleum manufacturer, quality standards, customer satisfaction, ethical business, Mumbai India"
  );

  const coreValuesRef = useScrollAnimation();
  const manufacturingRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Video Banner */}
      <VideoBanner
        videoSrc="https://res.cloudinary.com/drfh6ol1u/video/upload/v1763377992/istockphoto-1335386074-640_adpp_is_dbnhco.mp4" // Add your video file path here
        videoSrcWebm="/assets/videos/about-us-banner.webm" // Optional: WebM format for better compression
        posterImage="/assets/hero-bg-home.jpg" // Fallback image while video loads
        title="Unicorn Petroleum Industries Pvt. Ltd."
        subtitle="A legacy of excellence"
        overlay={true}
        className=""
        height="auto"
        loadImmediately={true} // Load immediately since it's at the top of the page
      />

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-500">About Us</span>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-[#E99322] font-medium">Profile</span>
          </nav>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 border-b-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Unicorn Petroleum Industries Pvt. Ltd.</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">A legacy of excellence</h3>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Since its incorporation in the Year 1964, Unicorn Petroleum Industries Private Limited has come a long way, in its quest for customer centric quality products and excellence in services without compromising on its values, ethics & beliefs.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            From expanding our product portfolio to keeping pace with global compliance standards, we have been continuously evolving — without ever compromising on our core values of quality, consistency, and customer-first thinking. We take pride in tailor-making our complete range of products viz. Petrolatums, Parabens, Emulsifying Wax, Natural Beeswax, D-Panthenol, Mineral Oils and Wax Specialties to suit the end requirements and stringent specifications of our valued customers.
          </p>
        </div>
      </section>
      {/* Divider */}
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

      {/* Our Belief */}
      <section className="py-16 px-4 bg-gray-50 border-b-0">
          <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src="/assets/about/Icon.png"
                alt="Our belief icon"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our belief</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We, at Unicorn, firmly believe in <strong>Total Customer Satisfaction</strong>, providing customers with the best solutions to suit their diverse applications with tailor-made, consistently superior products, along with efficient services at reasonable costs. The name "<strong>UNICORN</strong>" is now synonymous for ethical practices, superior consistent quality and customer oriented management.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 border-b-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <img
                src="/assets/about/Icon (1).png"
                alt="Icon placeholder"
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Become a customer-centric, result oriented organization, with sustainable resources, for over-all self and society development. We aim to be recognized as trend-setters for <strong>setting the standards of excellence in the field of petrochemical specialties</strong> in the Indian sub-continent. We are committed to meeting our commitments to our valuable customers, stake-holders and employees in an ethical, professional manner.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-gray-50 border-b-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src="/assets/about/Icon (2).png"
                alt="Our mission icon"
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To strive earnestly to meet the expectations and aspirations of our customers vis-a-vis <strong>quality, consistency and compatibility of our products</strong>, while maintaining the highest standards of integrity, value and business ethics. To innovate and develop customer centric products to suit diverse applications.
          </p>
        </div>
      </section>
      {/* Divider */}
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

        {/* Our Values */}
        <section className="pt-20 pb-20 md:pb-24 px-4 bg-white" ref={coreValuesRef}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          
          {/* Timeline-style layout */}
          <div className="relative overflow-visible">
            {/* Center vertical line - simple fixed positioning */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#E99322] hidden md:block animate-draw-line" style={{top: '10%', height: '83%'}}></div>
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-10 pb-8">
              {/* Commitment to customers */}
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2.png"
                    alt="Commitment icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to customers</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We pride ourselves in being a customer-oriented organization, committed to exceeding the expectations and aspirations of our esteemed customers. We always strive to achieve <strong>Customer Delight</strong> by offering perfect solutions to their needs and rendering efficient services and quality products always.
                </p>
              </div>

              {/* Pledge to quality */}
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (1).png"
                    alt="Quality icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pledge to quality</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Quality</strong> is synonymous with "<strong>UNICORN</strong>" and we, as an organization, always strive to maintain the highest standards of quality and consistency in all our finished products, at all cost, without compromising on the raw materials, manufacturing processes or packaging elements whatsoever.
                </p>
              </div>

              {/* Ethical and fair business */}
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (2).png"
                    alt="Ethical icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ethical and fair business</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Considering our industry mix, wherein malpractices are rampant, we always adhere to ethical practices and carry out all commercial transactions in a very <strong>transparent, professional</strong> manner.
                </p>
              </div>

              {/* Integrity and adherence to law */}
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (3).png"
                    alt="Integrity icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity and adherence to law</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each and every employee of the company operates with the highest standards of <strong>Integrity, Loyalty and Sincerity</strong>, in accordance with the state regulations.
                </p>
              </div>

              {/* Safety, health and environment consciousness */}
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (4).png"
                    alt="Safety icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety, health and environment consciousness</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The company continuously implements and reviews systems, plant and operation efficiencies, designed for <strong>maximizing employee safety, health and well-being</strong>, while maintaining responsibility towards the environment by minimizing pollutant and effluent discharge levels.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block space-y-16 pb-8 min-h-[600px]">
              {/* Commitment to customers */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to customers</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We pride ourselves in being a customer-oriented organization, committed to exceeding the expectations and aspirations of our esteemed customers. We always strive to achieve <strong>Customer Delight</strong> by offering perfect solutions to their needs and rendering efficient services and quality products always.
                  </p>
                </div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2.png"
                    alt="Commitment icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Pledge to quality */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (1).png"
                    alt="Quality icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pledge to quality</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Quality</strong> is synonymous with "<strong>UNICORN</strong>" and we, as an organization, always strive to maintain the highest standards of quality and consistency in all our finished products, at all cost, without compromising on the raw materials, manufacturing processes or packaging elements whatsoever.
                  </p>
                </div>
              </div>

              {/* Ethical and fair business */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ethical and fair business</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Considering our industry mix, wherein malpractices are rampant, we always adhere to ethical practices and carry out all commercial transactions in a very <strong>transparent, professional</strong> manner.
                  </p>
                </div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (2).png"
                    alt="Ethical icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Integrity and adherence to law */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (3).png"
                    alt="Integrity icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity and adherence to law</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Each and every employee of the company operates with the highest standards of <strong>Integrity, Loyalty and Sincerity</strong>, in accordance with the state regulations.
                  </p>
                </div>
              </div>

              {/* Safety, health and environment consciousness */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety, health and environment consciousness</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The company continuously implements and reviews systems, plant and operation efficiencies, designed for <strong>maximizing employee safety, health and well-being</strong>, while maintaining responsibility towards the environment by minimizing pollutant and effluent discharge levels.
                  </p>
                </div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (4).png"
                    alt="Safety icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

        {/* Manufacturing Facilities */}
        <section className="py-16 px-4 bg-white" ref={manufacturingRef}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Manufacturing facilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Advance production units */}
              <div className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] text-center overflow-hidden">
                <div className="w-full">
                  <img
                    src="/assets/about/Manifacturing img1.jpg"
                    alt="Advance production units"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = "/assets/about/Artboard 1.jpg";
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advance production units</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Two fully-equipped plants around Mumbai with state-of-art manufacturing, testing and storage facilities
                  </p>
                </div>
              </div>

              {/* In-house R&D & QA lab */}
              <div className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] text-center overflow-hidden">
                <div className="w-full">
                  <img
                    src="/assets/about/Artboard 2.jpg"
                    alt="In-house R&D & QA lab"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">In-house R&D & QA lab</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    On-site laboratory for product innovation, testing, and batch-wise quality assurance.
                  </p>
                </div>
              </div>

              {/* Flexible packaging options */}
              <div className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] text-center overflow-hidden">
                <div className="w-full">
                  <img
                    src="/assets/about/packaging.jpg"
                    alt="Flexible packaging options"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible packaging options</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Customizable pack sizes from small batches to bulk drums
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Divider */}
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

          {/* Key Differentiators */}
          <section className="py-8">
            {/* Full-width header bar with faded background */}
            <div className="relative w-full mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E99322]/20 via-[#E99322] to-[#E99322]/20"></div>
              <div className="relative py-8">
                <h2 className="text-4xl font-bold text-white text-center">Key differentiators</h2>
              </div>
            </div>
        
        <div className="max-w-7xl mx-auto px-4">
          {/* Differentiators with vertical lines */}
          <div className="relative">
            {/* 5 simple vertical lines from header */}
            <div className="absolute top-[-12%] left-[15.4%] w-0.5 h-[25%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[31%] w-0.5 h-[76%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[50%] w-0.5 h-[25%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[68.5%] w-0.5 h-[80%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[84.5%] w-0.5 h-[26%] bg-[#E99322] hidden lg:block"></div>
            
            {/* Top row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {/* Regulatory compliance */}
              <div className="text-center relative">
                <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                  <img
                    src="/assets/about/Icons2 (5).png"
                    alt="Icon placeholder"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory compliance</h3>
                <p className="text-gray-700">Ensure consistent batch production in state-of-art manufacturing and testing facilities as required by regulatory markets.</p>
              </div>

              {/* Environment consciousness */}
              <div className="text-center relative">
                <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                  <img
                   src="/assets/about/Icons2 (7).png"
                   alt="Icon placeholder"
                   className="w-14 h-14 md:w-16 md:h-16 object-contain"
                   width={32}
                   height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Environment consciousness</h3>
                <p className="text-gray-700">Always striving for operational responsibility towards the environment by minimizing pollutant and effluent discharge levels.</p>
              </div>

              {/* Ethical operations */}
              <div className="text-center relative">
                <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                  <img
                    src="/assets/about/Icons2 (2).png"
                    alt="Icon placeholder"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical operations</h3>
                <p className="text-gray-700">Maintaining the highest standards of integrity, value and business ethics with transparency and professionalism in all commercial transactions.</p>
              </div>
            </div>

            {/* Bottom row - 2 items centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
                {/* Timely delivery */}
                <div className="text-center relative">
                  <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                    <img
                       src="/assets/about/Icons2 (6).png"
                       alt="Icon placeholder"
                       className="w-14 h-14 md:w-16 md:h-16 object-contain"
                       width={32}
                       height={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Timely delivery</h3>
                  <p className="text-gray-700">On a quest for excellence in services with strict adherence to delivery schedules of our prestigious customers.</p>
                </div>

                {/* Quality assurance */}
                <div className="text-center relative">
                  <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                    <img
                      src="/assets/about/Icons2 (1).png"
                      alt="Icon placeholder"
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality assurance</h3>
                  <p className="text-gray-700">Renowned for our quality consistence, amongst majority of the world's most recognisable pharmaceutical, cosmetic & FMCG companies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

      {/* Certifications */}
      <QualityStandardsSection title="Certifications" subtitle="" />
    </div>
  );
};

export default AboutPage;