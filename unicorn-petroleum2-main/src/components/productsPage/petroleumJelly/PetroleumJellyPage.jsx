import React, { useRef, useEffect, useState } from "react";
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
import { useMetaTags } from "../../../hooks/useMetaTags";

export default function PetroleumJellyPage() {
  useMetaTags(
    "Petroleum Jelly - Unicorn Petroleum | Premium Quality Petrolatum",
    "High-quality Petroleum Jelly (Petrolatum) manufactured since 1964. Versatile emollient for pharmaceutical and cosmetic applications. Strict quality control ensures consistency and purity.",
    "petroleum jelly, petrolatum, white soft paraffin, yellow soft paraffin, emollient, skin care, pharmaceutical ingredients, cosmetic ingredients, Unicorn Petroleum"
  );
  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({ position: 'sticky', top: '140px' });

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.innerWidth < 1024) {
        setSidebarStyle({ position: 'relative', top: '0px' });
        return;
      }

      if (!sidebarRef.current || !certificationsRef.current || !contentWrapperRef.current || !sidebarColumnRef.current) {
        return;
      }

      const sidebar = sidebarRef.current;
      const sidebarColumn = sidebarColumnRef.current;
      const certifications = certificationsRef.current;
      const wrapper = contentWrapperRef.current;

      const certificationsTop = certifications.getBoundingClientRect().top + window.scrollY;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const currentScroll = window.scrollY;
      const topOffset = 140; 
      const sidebarHeight = sidebar.offsetHeight;
      const sidebarColumnWidth = sidebarColumn.offsetWidth;
      
      
      const stopScrollPosition = certificationsTop - sidebarHeight - topOffset - 20;
      
      
      if (currentScroll < stopScrollPosition) {
        setSidebarStyle({ 
          position: 'sticky', 
          top: `${topOffset}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      } else {
        
        const maxScrollDistance = stopScrollPosition - wrapperTop;
        setSidebarStyle({ 
          position: 'absolute',
          top: `${maxScrollDistance}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      }
    };

    
    let rafId = null;
    const onScroll = () => {
      
      if (window.innerWidth < 1024) {
        return;
      }
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <ProductPageLayout
      title={petroleumJellyData.name}
      subtitle={petroleumJellyData.description}
      bannerImage={petroleumJellyData.bannerImage}
      slider={petroleumJellyData.slider}
    >
      {}
      <div ref={contentWrapperRef} className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 relative">
        <div ref={sidebarColumnRef} className="lg:col-span-3 relative">
          <div ref={sidebarRef} className="self-start z-10 w-full" style={sidebarStyle}>
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div className="lg:col-span-9 space-y-4">
          <ProductPageCommonSection data={petroleumJellyData.commonSection} justifyText />
          <ApplicationsSection data={petroleumJellyData.applicationsSection} />
          <PackagedResponsiblySection data={petroleumJellyData.packagedResponsibly} />
          <ProductKeyFeaturesSection data={petroleumJellyData.keyFeatures} />
        </div>
      </div>

      {}
      <div className="lg:hidden space-y-4 mb-4">
        <ProductPageCommonSection data={petroleumJellyData.commonSection} justifyText />
        <ApplicationsSection data={petroleumJellyData.applicationsSection} />
        <PackagedResponsiblySection data={petroleumJellyData.packagedResponsibly} />
        <ProductKeyFeaturesSection data={petroleumJellyData.keyFeatures} />
      </div>

      {}
      <div ref={certificationsRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <QualityStandardsSection />
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <RelatedProductsSection data={petroleumJellyData.relatedProducts} onlyFirstCardHover={true} />
      </div>

      {}
      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

    </ProductPageLayout>
  );
}

