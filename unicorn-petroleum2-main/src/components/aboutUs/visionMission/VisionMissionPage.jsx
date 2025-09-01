import React from 'react';
import FloatingSidebar from '../../../Common/FloatingSidebar';
import FGridSection from '../../../Common/FGridSection';
import BannerWithNavigation from '../../../Common/BannerWithNavigation';
import { getNavigationData } from '../../../Data/navigationData';
import { visionMissionData } from './visionMissionData';

export default function VisionMissionPage() {
  // Get navigation data for about section
  const aboutNavData = getNavigationData('about');

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Vision - Mission" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section with Navigation */}
      <BannerWithNavigation
        title={visionMissionData.hero.title}
        subtitle={visionMissionData.hero.description}
        navigationData={aboutNavData}
        currentPath="/about/vision-mission"
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <FloatingSidebar navigationData={aboutNavData} />
          </div>
          
          <div className="lg:col-span-9 space-y-12">
            {/* Vision Section */}
            <section className="bg-white p-8 rounded-lg border-2 border-[#EDA94E]">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {visionMissionData.vision.title}
              </h2>
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                {visionMissionData.vision.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visionMissionData.vision.details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#EDA94E] rounded-full"></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Mission Section */}
            <section className="bg-white p-8 rounded-lg border-2 border-[#EDA94E]">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {visionMissionData.mission.title}
              </h2>
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                {visionMissionData.mission.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visionMissionData.mission.details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#EDA94E] rounded-full"></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Strategic Goals Section - Using FGridSection */}
            <FGridSection data={visionMissionData.goals} />
          </div>
        </div>
      </div>
    </div>
  );
}
