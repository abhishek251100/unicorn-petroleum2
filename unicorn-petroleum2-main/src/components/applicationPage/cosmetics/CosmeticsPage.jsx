import React from 'react';
import FloatingSidebar from '../../../Common/FloatingSidebar';
import FGridSection from '../../../Common/FGridSection';
import BannerWithNavigation from '../../../Common/BannerWithNavigation';
import { getNavigationData } from '../../../Data/navigationData';
import { applicationsNavigationData } from '../applicationsNavigationData';
import { cosmeticsData } from './cosmeticsData';

export default function CosmeticsPage() {
  const applicationsNavData = getNavigationData('applications');
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Applications', link: '/applications' },
    { text: 'Cosmetics' }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <BannerWithNavigation
        title={cosmeticsData.hero.title}
        subtitle={cosmeticsData.hero.description}
        navigationData={applicationsNavData}
        currentPath="/applications/cosmetics"
        breadcrumbs={breadcrumbs}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <FloatingSidebar navigationData={applicationsNavData} />
        </div>
        
        <div className="lg:col-span-9 space-y-12">
          {/* Overview Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {cosmeticsData.overview.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {cosmeticsData.overview.description}
            </p>
          </section>

          {/* Applications Grid - Using FGridSection */}
          <FGridSection data={cosmeticsData.applications} />

          {/* Compliance Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {cosmeticsData.compliance.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cosmeticsData.compliance.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#E99322] rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
