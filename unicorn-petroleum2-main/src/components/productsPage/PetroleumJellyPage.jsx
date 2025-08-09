import React from "react";
import ProductPageLayout from "./ProductPageLayout";
import FloatingSidebar from "../../Common/FloatingSidebar";
import QualityStandardsSection from "../../Common/QualityStandardsSection";
import CardsSection from "../../Common/CardsSection";
import QuoteFormSection from "../../Common/QuoteFormSection";
import { petroleumJellyData } from "./productData/petroleumJellyData";
import { productsNavigationData } from "./productsNavigationData";
import homeData from "../Home/homeData";

export default function PetroleumJellyPage() {
  // Create applications data for CardsSection
  const applicationsData = {
    heading: "Applications of Petroleum Jelly",
    cards: petroleumJellyData.applications
  };

  return (
    <ProductPageLayout>
      {/* Section 1: About & Applications (with sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Floating Sidebar */}
        <div className="lg:col-span-3">
          <FloatingSidebar navigationData={productsNavigationData} />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* About Section */}
          <section>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight">About Petroleum Jelly</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {petroleumJellyData.longDescription}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Manufactured since 1964, our Petroleum Jelly meets the highest standards of purity and quality, 
                making it suitable for pharmaceutical, cosmetic, and industrial applications. Our products are 
                manufactured under strict quality control measures to ensure consistency and reliability.
              </p>
            </div>
          </section>

          {/* Applications Section - Uses CardsSection */}
          <CardsSection data={applicationsData} />

          {/* Key Features Section */}
          <section>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">Key Features of all Petroleum Jelly from Unicorn</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="text-orange-500 mr-3 text-2xl">🏥</span>
                  Pharmacopoeial Compliance
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-lg">Indian Pharmacopoeia [IP]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-lg">British Pharmacopoeia [BP]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-lg">United States Pharmacopoeia [USP]</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="text-orange-500 mr-3 text-2xl">🧪</span>
                  Other Compliances
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-lg">21 CFR 172.880</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-lg">ICH Q3C (R4) for residual solvents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-lg">USP &lt;467&gt; for residual solvents</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 2: Quality Standards (Full Width - Same as Home) */}
      <QualityStandardsSection data={homeData.qualityStandards} />

      {/* Section 3: Related Products (Full Width) */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">Related Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['White Mineral Oils', 'Microcrystalline Wax', 'Paraffin Wax'].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="text-orange-500 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚗️</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">{product}</h4>
              <p className="text-gray-600 mb-4">High-quality petroleum products for various industrial applications.</p>
              <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Quote Form (Full Width) */}
      <QuoteFormSection />
    </ProductPageLayout>
  );
} 