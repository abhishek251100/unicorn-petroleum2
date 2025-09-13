import React from "react";

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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {title || 'Globally Recognized Quality & Safety Standards'}
          </h2>
          {(subtitle !== undefined ? subtitle : 'Driven by quality, trusted for generations.') && (
            <p className="text-xl text-gray-600">{subtitle ?? 'Driven by quality, trusted for generations.'}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="text-center">
              <div className="w-36 h-36 sm:w-28 sm:h-28 md:w-24 md:h-24 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                <img src={cert.logo} alt={cert.code} className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-800 font-semibold leading-tight">{cert.code}</p>
                {cert.full && (
                  <p className="text-xs text-gray-600 whitespace-pre-line leading-tight">{cert.full}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {showLink && (
          <div className="text-center">
            <a href="/quality" className="text-[#101301] font-medium hover:underline transition-colors">
              View All Certifications →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}