import React from "react";
import ProductPageLayout from "./ProductPageLayout";
import FloatingSidebar from "../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../Common/ProductPageCommonSection";
import ProductKeyFeaturesSection from "../../Common/ProductKeyFeaturesSection";
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
    cards: petroleumJellyData.applications,
    showDescriptions: false,
  };

  return (
    <ProductPageLayout
      title={petroleumJellyData.name}
      subtitle={petroleumJellyData.description}
    >
      {/* Section 1: Common Section + Applications + Features (with sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Floating Sidebar */}
        <div className="lg:col-span-3">
          <FloatingSidebar navigationData={productsNavigationData} />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Product Page Common Section - First section sharing space with sidebar */}
          <ProductPageCommonSection data={petroleumJellyData.commonSection} />

          {/* Applications Section - Uses CardsSection */}
          <CardsSection data={applicationsData} />

          {/* Key Features Section - Uses ProductKeyFeaturesSection */}
          <ProductKeyFeaturesSection data={petroleumJellyData.keyFeatures} />
        </div>
      </div>

      {/* Section 2: Quality Standards Section - Full Width (Outside Grid) */}
      <QualityStandardsSection />

      {/* Quote Form Section - Common on all product pages */}
      <div id="quote-form-section">
        <QuoteFormSection data={homeData.cta} />
      </div>
    </ProductPageLayout>
  );
} 