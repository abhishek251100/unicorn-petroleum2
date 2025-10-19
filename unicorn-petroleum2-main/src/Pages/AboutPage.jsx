import React from "react";
import { FiUsers, FiTarget, FiFlag, FiHeart, FiShield, FiClock, FiCheckCircle, FiAward, FiHome, FiTrendingUp } from "react-icons/fi";
import IconRoadHero from "../Common/IconRoadHero";
import QualityStandardsSection from "../Common/QualityStandardsSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">Unicorn Petroleum Industries Pvt. Ltd.</h1>
            <p className="text-xl">A legacy of excellence</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">></span>
            <span className="text-gray-500">About Us</span>
            <span className="mx-2 text-gray-400">></span>
            <span className="text-[#E99322] font-medium">Profile</span>
          </nav>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4">
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

      {/* Our Belief */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center">
              <FiHome className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our belief</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We, at Unicorn, firmly believe in <strong>Total Customer Satisfaction</strong>, providing customers with the best solutions to suit their diverse applications with tailor-made, consistently superior products, along with efficient services at reasonable costs. The name "<strong>UNICORN</strong>" is now synonymous for ethical practices, superior consistent quality and customer oriented management.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center">
              <FiFlag className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Become a customer-centric, result oriented organization, with sustainable resources, for over-all self and society development. We aim to be recognized as trend-setters for <strong>setting the standards of excellence in the field of petrochemical specialties</strong> in the Indian sub-continent. We are committed to meeting our commitments to our valuable customers, stake-holders and employees in an ethical, professional manner.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center">
              <FiTarget className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To strive earnestly to meet the expectations and aspirations of our customers vis-a-vis <strong>quality, consistency and compatibility of our products</strong>, while maintaining the highest standards of integrity, value and business ethics. To innovate and develop customer centric products to suit diverse applications.
          </p>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our core values</h2>
          
          {/* Timeline-style layout */}
          <div className="relative">
            {/* Center vertical line - simple fixed positioning */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#E99322] hidden md:block" style={{top: '10%', height: '83%'}}></div>
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {/* Commitment to customers */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                  <FiUsers className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to customers</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We pride ourselves in being a customer-oriented organization, committed to exceeding the expectations and aspirations of our esteemed customers. We always strive to achieve <strong>Customer Delight</strong> by offering perfect solutions to their needs and rendering efficient services and quality products always.
                </p>
              </div>

              {/* Pledge to quality */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                  <FiCheckCircle className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pledge to quality</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Quality</strong> is synonymous with "<strong>UNICORN</strong>" and we, as an organization, always strive to maintain the highest standards of quality and consistency in all our finished products, at all cost, without compromising on the raw materials, manufacturing processes or packaging elements whatsoever.
                </p>
              </div>

              {/* Ethical and fair business */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                  <FiUsers className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ethical and fair business</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Considering our industry mix, wherein malpractices are rampant, we always adhere to ethical practices and carry out all commercial transactions in a very <strong>transparent, professional</strong> manner.
                </p>
              </div>

              {/* Integrity and adherence to law */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                  <FiShield className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity and adherence to law</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each and every employee of the company operates with the highest standards of <strong>Integrity, Loyalty and Sincerity</strong>, in accordance with the state regulations.
                </p>
              </div>

              {/* Safety, health and environment consciousness */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                  <FiHeart className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety, health and environment consciousness</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The company continuously implements and reviews systems, plant and operation efficiencies, designed for <strong>maximizing employee safety, health and well-being</strong>, while maintaining responsibility towards the environment by minimizing pollutant and effluent discharge levels.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block space-y-16">
              {/* Commitment to customers */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to customers</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We pride ourselves in being a customer-oriented organization, committed to exceeding the expectations and aspirations of our esteemed customers. We always strive to achieve <strong>Customer Delight</strong> by offering perfect solutions to their needs and rendering efficient services and quality products always.
                  </p>
                </div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <FiUsers className="text-white text-xl" />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Pledge to quality */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <FiCheckCircle className="text-white text-xl" />
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
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <FiUsers className="text-white text-xl" />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Integrity and adherence to law */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <FiShield className="text-white text-xl" />
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
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <FiHeart className="text-white text-xl" />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Manufacturing facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advance production units */}
            <div className="bg-white rounded-2xl border-2 border-[#E99322] overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <FiHome className="text-gray-400 text-6xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advance production units</h3>
                <p className="text-gray-700">Two fully-equipped plants around Mumbai with state-of-art manufacturing, testing and storage facilities</p>
              </div>
            </div>

            {/* In-house R&D & QA lab */}
            <div className="bg-white rounded-2xl border-2 border-[#E99322] overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <FiTrendingUp className="text-gray-400 text-6xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">In-house R&D & QA lab</h3>
                <p className="text-gray-700">On-site laboratory for product innovation, testing, and batch-wise quality assurance.</p>
              </div>
            </div>

            {/* Flexible packaging options */}
            <div className="bg-white rounded-2xl border-2 border-[#E99322] overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <FiAward className="text-gray-400 text-6xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible packaging options</h3>
                <p className="text-gray-700">Customizable pack sizes from small batches to bulk drums</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16">
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
            <div className="absolute top-[-12%] left-[15.4%] w-0.5 h-25 bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[31%] w-0.5 h-[76%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[50%] w-0.5 h-25 bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[68.5%] w-0.5 h-[80%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[84.5%] w-0.5 h-26 bg-[#E99322] hidden lg:block"></div>
            
            {/* Top row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {/* Regulatory compliance */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg">
                  <FiShield className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory compliance</h3>
                <p className="text-gray-700">Ensure consistent batch production in state-of-art manufacturing and testing facilities as required by regulatory markets.</p>
              </div>

              {/* Environment consciousness */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg">
                  <FiShield className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Environment consciousness</h3>
                <p className="text-gray-700">Always striving for operational responsibility towards the environment by minimizing pollutant and effluent discharge levels.</p>
              </div>

              {/* Ethical operations */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg">
                  <FiUsers className="text-white text-xl" />
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
                  <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg">
                    <FiClock className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Timely delivery</h3>
                  <p className="text-gray-700">On a quest for excellence in services with strict adherence to delivery schedules of our prestigious customers.</p>
                </div>

                {/* Quality assurance */}
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg">
                    <FiCheckCircle className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality assurance</h3>
                  <p className="text-gray-700">Renowned for our quality consistence, amongst majority of the world's most recognisable pharmaceutical, cosmetic & FMCG companies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <QualityStandardsSection title="Certifications" subtitle="" />
    </div>
  );
};

export default AboutPage;