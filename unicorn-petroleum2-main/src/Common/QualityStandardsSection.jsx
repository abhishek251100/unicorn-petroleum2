import React from "react";

export default function QualityStandardsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Globally Recognized Quality & Safety Standards
          </h2>
          <p className="text-xl text-gray-600">
            Driven by quality, trusted for generations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
          <div className="text-center group cursor-pointer">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                FDA
              </div>
              <p className="text-sm text-gray-600 font-medium">
                FOOD AND DRUG ADMINISTRATION
              </p>
            </div>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                WHO-GMP
              </div>
              <p className="text-sm text-gray-600 font-medium">
                GOOD MANUFACTURING PRACTICE
              </p>
            </div>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                ISO 9001:2015
              </div>
              <p className="text-sm text-gray-600 font-medium">ISO 9001:2015</p>
            </div>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                HALAL
              </div>
              <p className="text-sm text-gray-600 font-medium">HALAL</p>
            </div>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                REACH
              </div>
              <p className="text-sm text-gray-600 font-medium">REACH</p>
            </div>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                PHARMEXCIL
              </div>
              <p className="text-sm text-gray-600 font-medium">pharmexcil</p>
            </div>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                POLLUTION CONTROL BOARD
              </div>
              <p className="text-sm text-gray-600 font-medium">
                POLLUTION CONTROL BOARD
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/quality"
            className="text-[#101301] hover:text-[#101301] font-medium transition-colors hover:underline"
          >
            View All Certifications →
          </a>
        </div>
      </div>
    </section>
  );
} 