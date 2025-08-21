import React from "react";

export default function CallToAction({ data }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
          {data.heading}
        </h2>
        <p className="text-xl text-gray-600 mb-8">{data.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={data.primaryButtonLink}
            className="bg-[#E99322] text-white px-8 py-3 rounded-full hover:bg-[#EDA94E] transition-all duration-300 font-medium flex items-center gap-2 justify-center"
          >
            {data.primaryButton}
            <span className="text-lg">→</span>
          </a>
          <a
            href={data.secondaryButtonLink}
            className="border-2 border-[#E99322] text-[#E99322] px-8 py-3 rounded-full hover:bg-[#E99322] hover:text-white transition-all duration-300 font-medium flex items-center gap-2 justify-center"
          >
            {data.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
} 