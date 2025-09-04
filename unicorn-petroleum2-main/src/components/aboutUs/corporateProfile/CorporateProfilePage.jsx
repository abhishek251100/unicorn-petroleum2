import React from "react";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import FGridSection from "../../../Common/FGridSection";
import BannerWithNavigation from "../../../Common/BannerWithNavigation";
import { getNavigationData } from "../../../Data/navigationData";
import { corporateProfileData } from "./corporateProfileData";

export default function CorporateProfilePage() {
  // Get navigation data for about section
  const aboutNavData = getNavigationData('about');

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Corporate Profile" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section with Navigation */}
      <BannerWithNavigation
        title={corporateProfileData.hero.title}
        subtitle={corporateProfileData.hero.description}
        navigationData={aboutNavData}
        currentPath="/about/profile"
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <FloatingSidebar navigationData={aboutNavData} />
          </div>
          
          <div className="lg:col-span-9 space-y-12">
            {/* Our Story Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {corporateProfileData.ourStory.title}
              </h2>
              <div className="space-y-4">
                {corporateProfileData.ourStory.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Who We Are Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {corporateProfileData.whoWeAre.title}
              </h2>
              <div className="space-y-4">
                {corporateProfileData.whoWeAre.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed" 
                     dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </section>

            {/* Manufacturing Facilities Section - Using same design as pharmaceutical page */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {corporateProfileData.manufacturingFacilities.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                {corporateProfileData.manufacturingFacilities.subheading}
              </p>
              
              {/* Manufacturing Facilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {corporateProfileData.manufacturingFacilities.cards.map((facility, index) => (
                  <div key={index} className="bg-white rounded-xl border border-[#EDA94E] hover:shadow-lg transition-shadow flex flex-col max-w-sm mx-auto">
                    <div className="h-48 bg-gray-100 rounded-t-xl flex items-center justify-center">
                      <img 
                        src={facility.icon} 
                        alt={facility.title}
                        className="w-full h-full object-cover rounded-t-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextSibling;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <div className="w-full h-full bg-gray-200 rounded-t-lg items-center justify-center hidden">
                        <span className="text-gray-500 font-semibold">{facility.title}</span>
                      </div>
                    </div>
                    <div className="p-6 text-center flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.title}</h3>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Differentiators Section - Using FGridSection */}
            <FGridSection data={corporateProfileData.keyDifferentiators} customPadding="pt-8 pb-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
