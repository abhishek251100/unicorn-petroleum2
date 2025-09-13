import React from "react";
import BannerWithNavigation from "../Common/BannerWithNavigation";
import QualityStandardsSection from "../Common/QualityStandardsSection";

const certifications = [
  { label: "FDA", src: "/assets/Quality Standards Certificates/Frame 449.png" },
  { label: "WHO-GMP", src: "/assets/Quality Standards Certificates/Frame 450.png" },
  { label: "ISO 9001:2015", src: "/assets/Quality Standards Certificates/Frame 451.png" },
  { label: "HALAL", src: "/assets/Quality Standards Certificates/Frame 452.png" },
  { label: "REACH", src: "/assets/Quality Standards Certificates/Frame 453.png" },
  { label: "PHARMEXCIL", src: "/assets/Quality Standards Certificates/Frame 454.png" },
  { label: "Pollution Control Board", src: "/assets/Quality Standards Certificates/Frame 455.png" }
];

const ReachPage = () => {
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Global Reach" }];

  return (
    <div className="min-h-screen">
      <BannerWithNavigation
        title="Global Reach"
        subtitle="Delivering Quality Beyond Borders"
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-700 leading-7">
            With a legacy that spans over six decades, we’ve established a robust export network that connects us to
            clients across continents. Our commitment to quality, consistency, and timely delivery has enabled us to
            serve leading pharmaceutical, personal care, and industrial brands around the world.
          </p>
          <p className="text-gray-700 leading-7 mt-4">
            We are fully equipped to meet international documentation, regulatory, and logistical requirements — making
            global procurement seamless and dependable for our partners.
          </p>
        </div>
      </section>

      <QualityStandardsSection title="Certifications" subtitle={""} />
    </div>
  );
};

export default ReachPage;
