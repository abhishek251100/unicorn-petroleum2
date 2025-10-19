import React from "react";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import { productsNavigationData } from "../productsNavigationData";
import { microcrystallineWaxData } from "./microcrystallineWaxData";

export default function MicrocrystallineWaxPage() {
  const data = microcrystallineWaxData;
  return (
    <ProductPageLayout title={data.name} subtitle={data.description}>
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-3">
          <FloatingSidebar navigationData={productsNavigationData} />
        </div>

        <div className="lg:col-span-9 space-y-8">
          <ProductPageCommonSection data={data.commonSection} />
          <ApplicationsSection data={data.applicationsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
        </div>
      </div>

      <div className="lg:hidden space-y-8 mb-8">
        <ProductPageCommonSection data={data.commonSection} />
        <ApplicationsSection data={data.applicationsSection} />
        <PackagedResponsiblySection data={data.packagedResponsibly} />
      </div>

      <QualityStandardsSection />

      <RelatedProductsSection data={data.relatedProducts} />

      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

    </ProductPageLayout>
  );
}


