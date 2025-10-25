import React from "react";
import ProductPageLayout from "./ProductPageLayout";
import FloatingSidebar from "../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../Common/products/ProductPageCommonSection";
import ProductKeyFeaturesSection from "../../Common/products/ProductKeyFeaturesSection";
import QualityStandardsSection from "../../Common/QualityStandardsSection";
import ApplicationsSection from "../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../Common/RelatedProductsSection";
import { productsNavigationData } from "./productsNavigationData";
import { buildStandardProductData } from "./standardProductData";

export default function StandardProductPage({ title, description }) {
  const data = buildStandardProductData({ name: title, description });

  return (
    <ProductPageLayout title={data.name} subtitle={data.description}>
      {/* Content area with floating sidebar - stops before certifications */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 min-h-screen">
        <div className="lg:col-span-3">
          <div className="sticky top-28 self-start z-10 mt-[40%]">
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div className="lg:col-span-9 space-y-8">
          <ProductPageCommonSection data={data.commonSection} />
          <ApplicationsSection data={data.applicationsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
          <ProductKeyFeaturesSection data={data.keyFeatures} />
        </div>
      </div>

      <div className="lg:hidden space-y-8 mb-8">
        <ProductPageCommonSection data={data.commonSection} />
        <ApplicationsSection data={data.applicationsSection} />
        <PackagedResponsiblySection data={data.packagedResponsibly} />
        <ProductKeyFeaturesSection data={data.keyFeatures} />
      </div>

      {/* Certifications and beyond - sidebar stops floating here */}
      <QualityStandardsSection />

      <RelatedProductsSection data={data.relatedProducts} />

      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

    </ProductPageLayout>
  );
}


