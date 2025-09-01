import React from 'react';
import FloatingSidebar from '../../../Common/FloatingSidebar';
import QualityStandardsSection from '../../../Common/QualityStandardsSection';
import BannerWithNavigation from '../../../Common/BannerWithNavigation';
import { getNavigationData } from '../../../Data/navigationData';
import { certificationsData } from './certificationsData';

export default function CertificationsPage() {
  // Get navigation data for about section
  const aboutNavData = getNavigationData('about');

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Certifications" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section with Navigation */}
      <BannerWithNavigation
        title={certificationsData.hero.title}
        subtitle={certificationsData.hero.description}
        navigationData={aboutNavData}
        currentPath="/about/certifications"
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <FloatingSidebar navigationData={aboutNavData} />
          </div>
          
          <div className="lg:col-span-9 space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {certificationsData.overview.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {certificationsData.overview.description}
              </p>
            </section>

            {/* Certifications Section - Using existing QualityStandardsSection */}
            <QualityStandardsSection />

            {/* Additional Compliance Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {certificationsData.additionalCompliance.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificationsData.additionalCompliance.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#EDA94E] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
