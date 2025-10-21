import React from "react";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import ProductKeyFeaturesSection from "../../../Common/products/ProductKeyFeaturesSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import { productsNavigationData } from "../productsNavigationData";
import { naturalBeeswaxData } from "./naturalBeeswaxData";

export default function NaturalBeeswaxPage() {
  const data = naturalBeeswaxData;
  return (
    <ProductPageLayout title={data.name} subtitle={data.description} bannerImage={data.bannerImage}>
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-3">
          <FloatingSidebar navigationData={productsNavigationData} />
        </div>

        <div className="lg:col-span-9 space-y-4">
          <ProductPageCommonSection data={data.commonSection} />
          <ApplicationsSection data={data.applicationsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
          <ProductKeyFeaturesSection data={data.keyFeatures} />
        </div>
      </div>

      <div className="lg:hidden space-y-4 mb-4">
        <ProductPageCommonSection data={data.commonSection} />
        <ApplicationsSection data={data.applicationsSection} />
        <PackagedResponsiblySection data={data.packagedResponsibly} />
        <ProductKeyFeaturesSection data={data.keyFeatures} />
      </div>

      <QualityStandardsSection />

      <RelatedProductsSection data={data.relatedProducts} />

      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

    </ProductPageLayout>
  );
}
