import React, { useRef, useEffect, useState } from "react";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import SurfactantProductsSection from "../../../Common/SurfactantProductsSection";
import { productsNavigationData } from "../productsNavigationData";
import { surfactantsData } from "./surfactantsData";
import { useMetaTags } from "../../../hooks/useMetaTags";

export default function SurfactantsPage() {
  useMetaTags(
    "Surfactants - Unicorn Petroleum | Anionic & Nonionic Surfactants for Cleaning & Personal Care",
    "High-quality anionic and nonionic surfactants for effective cleaning, foaming, and emulsification. Used in shampoos, detergents, personal care products, and industrial cleaning solutions.",
    "surfactants, anionic surfactants, nonionic surfactants, cleaning agents, foaming agents, emulsifiers, detergents, personal care ingredients, industrial surfactants, Unicorn Petroleum"
  );
  const data = surfactantsData;
  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const contentColumnRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({ position: 'sticky', top: '140px' });

  useEffect(() => {
    
    const updateSidebarHeight = () => {
      if (contentColumnRef.current && sidebarColumnRef.current) {
        
        const contentRect = contentColumnRef.current.getBoundingClientRect();
        const contentHeight = contentColumnRef.current.offsetHeight || contentRect.height;
        if (contentHeight > 0) {
          
          sidebarColumnRef.current.style.height = `${contentHeight}px`;
          sidebarColumnRef.current.style.minHeight = `${contentHeight}px`;
        }
      }
    };

    
    const timeoutId = setTimeout(() => {
      updateSidebarHeight();
      
      setTimeout(() => {
        if (handleScroll) handleScroll();
      }, 50);
    }, 200);

    
    updateSidebarHeight();
    window.addEventListener('resize', updateSidebarHeight);

    
    let resizeObserver;
    if (contentColumnRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        updateSidebarHeight();
      });
      resizeObserver.observe(contentColumnRef.current);
    }

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

      const certificationsRect = certifications.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();
      
      const topOffset = 140; 
      const sidebarHeight = sidebar.offsetHeight;
      const sidebarColumnWidth = sidebarColumn.offsetWidth;
      
      
      const certificationsTop = certificationsRect.top + window.scrollY;
      const wrapperTop = wrapperRect.top + window.scrollY;
      const wrapperBottom = wrapperRect.bottom + window.scrollY;
      const currentScroll = window.scrollY;
      
      
      
      const sidebarBottomIfSticky = currentScroll + topOffset + sidebarHeight;
      
      
      
      
      if (wrapperRect.bottom > 0 && sidebarBottomIfSticky >= certificationsTop) {
        
        const maxScrollInWrapper = certificationsTop - wrapperTop - sidebarHeight - topOffset;
        setSidebarStyle({ 
          position: 'absolute',
          top: `${Math.max(0, maxScrollInWrapper)}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      } else {
        
        setSidebarStyle({ 
          position: 'sticky', 
          top: `${topOffset}px`,
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
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', updateSidebarHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <ProductPageLayout title={data.name} subtitle={data.description} bannerImage={data.bannerImage} slider={data.slider}>
      <div ref={contentWrapperRef} className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 relative items-start">
        <div ref={sidebarColumnRef} className="lg:col-span-3 relative self-start">
          <div ref={sidebarRef} className="z-10 w-full" style={sidebarStyle}>
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div ref={contentColumnRef} className="lg:col-span-9 space-y-4">
          <ProductPageCommonSection data={data.commonSection} />
          <SurfactantProductsSection data={data.surfactantProducts} />
          <ApplicationsSection data={data.applicationsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
        </div>
      </div>

      <div className="lg:hidden space-y-4 mb-4">
        <ProductPageCommonSection data={data.commonSection} />
        <SurfactantProductsSection data={data.surfactantProducts} />
        <ApplicationsSection data={data.applicationsSection} />
        <PackagedResponsiblySection data={data.packagedResponsibly} />
      </div>

      {}
      <div ref={certificationsRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <QualityStandardsSection />
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <RelatedProductsSection data={data.relatedProducts} />
      </div>

      {}
      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>
    </ProductPageLayout>
  );
}


