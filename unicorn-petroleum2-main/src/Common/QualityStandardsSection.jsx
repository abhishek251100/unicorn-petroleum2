import React from "react";

export default function QualityStandardsSection({ data }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {data.heading}
          </h2>
          <p className="text-xl text-gray-600">
            {data.subheading}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
          {data.certifications.map((cert, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-orange-300">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">
                  {cert.name}
                </div>
                <p className="text-sm text-gray-600 font-medium">{cert.fullName}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/certifications" 
            className="text-[#101301] hover:text-[#101301] font-medium transition-colors hover:underline"
          >
            {data.linkText}
          </a>
        </div>
      </div>
    </section>
  );
} 