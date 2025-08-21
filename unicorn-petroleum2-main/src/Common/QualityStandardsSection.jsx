import React from "react";

export default function QualityStandardsSection() {
  const certifications = [
    {
      code: "FDA",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 449.png",
    },
    {
      code: "WHO-GMP",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 450.png",
    },
    {
      code: "ISO 9001:2015",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 451.png",
    },
    {
      code: "HALAL",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 452.png",
    },
    {
      code: "REACH",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 453.png",
    },
    {
      code: "PHARMEXCIL",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 454.png",
    },
    {
      code: "POLLUTION CONTROL BOARD",
      full: "",
      logo: "/assets/Quality Standards Certificates/Frame 455.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Globally Recognized Quality & Safety Standards
          </h2>
          <p className="text-xl text-gray-600">Driven by quality, trusted for generations.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img src={cert.logo} alt={cert.code} className="w-30 h-30 object-contain" />
              </div>
              <p className="text-sm text-gray-600 font-medium whitespace-pre-line">
                {cert.full}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/quality" className="text-[#101301] font-medium hover:underline transition-colors">
            View All Certifications →
          </a>
        </div>
      </div>
    </section>
  );
}