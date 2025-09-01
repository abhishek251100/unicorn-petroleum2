import React from "react";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import ProductKeyFeaturesSection from "../../../Common/products/ProductKeyFeaturesSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import QuoteFormSection from "../../../Common/QuoteFormSection";
import { petroleumJellyData } from "./petroleumJellyData";
import { productsNavigationData } from "../productsNavigationData";
import homeData from "../../Home/homeData";

export default function PetroleumJellyPage() {
  return (
    <ProductPageLayout
      title={petroleumJellyData.name}
      subtitle={petroleumJellyData.description}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-3">
          <FloatingSidebar navigationData={productsNavigationData} />
        </div>

        <div className="lg:col-span-9 space-y-8">
          <ProductPageCommonSection data={petroleumJellyData.commonSection} />
          <ApplicationsSection data={petroleumJellyData.applicationsSection} />
          <PackagedResponsiblySection data={petroleumJellyData.packagedResponsibly} />
          <ProductKeyFeaturesSection data={petroleumJellyData.keyFeatures} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-8 mb-8">
        <ProductPageCommonSection data={petroleumJellyData.commonSection} />
        <ApplicationsSection data={petroleumJellyData.applicationsSection} />
        <PackagedResponsiblySection data={petroleumJellyData.packagedResponsibly} />
        <ProductKeyFeaturesSection data={petroleumJellyData.keyFeatures} />
      </div>

      <QualityStandardsSection />

      <RelatedProductsSection data={petroleumJellyData.relatedProducts} />

      {/* Mobile Floating Sidebar - positioned before footer */}
      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

      <div id="quote-form-section">
        <QuoteFormSection data={homeData.cta} />
      </div>
    </ProductPageLayout>
  );
}
