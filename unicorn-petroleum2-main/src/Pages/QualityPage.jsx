import React from "react";
import BannerWithNavigation from "../Common/BannerWithNavigation";
import QualityStandardsSection from "../Common/QualityStandardsSection";

const QualityPage = () => {
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Quality" }];
  return (
    <div className="min-h-screen">
      <BannerWithNavigation
        title="Quality"
        subtitle="Engineered for consistency. Certified for safety."
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Our Commitment</h2>
          <p className="text-gray-700 leading-7">
            We maintain stringent quality control at every step — from sourcing to production and packaging. Our
            facilities follow internationally recognized standards to ensure that every product batch meets the highest
            benchmarks for purity, performance, and safety.
          </p>
        </div>
      </section>

      <QualityStandardsSection />
    </div>
  );
};

export default QualityPage;
