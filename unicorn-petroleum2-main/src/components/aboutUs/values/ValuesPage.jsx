import React from 'react';
import FloatingSidebar from '../../../Common/FloatingSidebar';
import FGridSection from '../../../Common/FGridSection';
import BannerWithNavigation from '../../../Common/BannerWithNavigation';
import { getNavigationData } from '../../../Data/navigationData';
import { valuesData } from './valuesData';

export default function ValuesPage() {
  // Get navigation data for about section
  const aboutNavData = getNavigationData('about');

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Values" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section with Navigation */}
      <BannerWithNavigation
        title={valuesData.hero.title}
        subtitle={valuesData.hero.description}
        navigationData={aboutNavData}
        currentPath="/about/values"
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <FloatingSidebar navigationData={aboutNavData} />
          </div>
          
          <div className="lg:col-span-9 space-y-12">
            {/* Values Grid - Using FGridSection */}
            <FGridSection data={valuesData.values} />
          </div>
        </div>
      </div>
    </div>
  );
}
