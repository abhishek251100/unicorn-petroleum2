import React from "react";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import ProductKeyFeaturesSection from "../../../Common/products/ProductKeyFeaturesSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import { petroleumJellyData } from "./petroleumJellyData";
import { productsNavigationData } from "../productsNavigationData";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export default function PetroleumJellyPage() {
  const commonSectionRef = useScrollAnimation();
  const applicationsRef = useScrollAnimation();
  const packagingRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();

  return (
    <ProductPageLayout
      title={petroleumJellyData.name}
      subtitle={petroleumJellyData.description}
      bannerImage={petroleumJellyData.bannerImage}
      slider={petroleumJellyData.slider}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 min-h-screen">
        <div className="lg:col-span-3">
          <div className="sticky top-28 self-start z-10 mt-[40%]">
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div className="lg:col-span-9 space-y-4">
          <div ref={commonSectionRef} className="scroll-animate">
            <ProductPageCommonSection data={petroleumJellyData.commonSection} />
          </div>
          <div ref={applicationsRef} className="scroll-animate-left">
            <ApplicationsSection data={petroleumJellyData.applicationsSection} />
          </div>
          <div ref={packagingRef} className="scroll-animate-right">
            <PackagedResponsiblySection data={petroleumJellyData.packagedResponsibly} />
          </div>
          <div ref={featuresRef} className="scroll-animate">
            <ProductKeyFeaturesSection data={petroleumJellyData.keyFeatures} />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-4 mb-4">
        <ProductPageCommonSection data={petroleumJellyData.commonSection} />
        <ApplicationsSection data={petroleumJellyData.applicationsSection} />
        <PackagedResponsiblySection data={petroleumJellyData.packagedResponsibly} />
        <ProductKeyFeaturesSection data={petroleumJellyData.keyFeatures} />
      </div>

      <QualityStandardsSection />

      <RelatedProductsSection data={petroleumJellyData.relatedProducts} onlyFirstCardHover={true} />

      {/* Mobile Floating Sidebar - positioned before footer */}
      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

    </ProductPageLayout>
  );
}
