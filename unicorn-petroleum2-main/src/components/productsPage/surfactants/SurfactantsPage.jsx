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
    // Make sidebar column match content column height for sticky to work
    const updateSidebarHeight = () => {
      if (contentColumnRef.current && sidebarColumnRef.current) {
        // Use getBoundingClientRect for more accurate height
        const contentRect = contentColumnRef.current.getBoundingClientRect();
        const contentHeight = contentColumnRef.current.offsetHeight || contentRect.height;
        if (contentHeight > 0) {
          // Set both height and minHeight to ensure it works
          sidebarColumnRef.current.style.height = `${contentHeight}px`;
          sidebarColumnRef.current.style.minHeight = `${contentHeight}px`;
        }
      }
    };

    // Delay initial update to ensure content is rendered
    const timeoutId = setTimeout(() => {
      updateSidebarHeight();
      // Also trigger scroll handler after height is set
      setTimeout(() => {
        if (handleScroll) handleScroll();
      }, 50);
    }, 200);

    // Update on mount and resize
    updateSidebarHeight();
    window.addEventListener('resize', updateSidebarHeight);

    // Use ResizeObserver to watch for content changes
    let resizeObserver;
    if (contentColumnRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        updateSidebarHeight();
      });
      resizeObserver.observe(contentColumnRef.current);
    }

    const handleScroll = () => {
      // Only apply floating effects on desktop (lg breakpoint = 1024px)
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
      
      const topOffset = 140; // Initial position offset in pixels
      const sidebarHeight = sidebar.offsetHeight;
      const sidebarColumnWidth = sidebarColumn.offsetWidth;
      
      // Get absolute positions
      const certificationsTop = certificationsRect.top + window.scrollY;
      const wrapperTop = wrapperRect.top + window.scrollY;
      const wrapperBottom = wrapperRect.bottom + window.scrollY;
      const currentScroll = window.scrollY;
      
      // Calculate where sidebar bottom would be if it stayed sticky
      // When sidebar is sticky, its bottom = currentScroll + topOffset + sidebarHeight
      const sidebarBottomIfSticky = currentScroll + topOffset + sidebarHeight;
      
      // Only switch to absolute when:
      // 1. The wrapper is still visible (hasn't scrolled past viewport)
      // 2. AND the sidebar bottom (if sticky) would exceed certifications top
      if (wrapperRect.bottom > 0 && sidebarBottomIfSticky >= certificationsTop) {
        // Calculate the max position within the wrapper where sidebar should stop
        const maxScrollInWrapper = certificationsTop - wrapperTop - sidebarHeight - topOffset;
        setSidebarStyle({ 
          position: 'absolute',
          top: `${Math.max(0, maxScrollInWrapper)}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      } else {
        // Use sticky positioning - sidebar scrolls naturally with content
        setSidebarStyle({ 
          position: 'sticky', 
          top: `${topOffset}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      }
    };

    // Use requestAnimationFrame for smooth updates
    let rafId = null;
    const onScroll = () => {
      // Only apply floating effects on desktop
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
    handleScroll(); // Initial check

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

      {/* Certifications and beyond - sidebar stops floating here - Full width sections */}
      <div ref={certificationsRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <QualityStandardsSection />
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <RelatedProductsSection data={data.relatedProducts} />
      </div>

      {/* Mobile Floating Sidebar - positioned after related products */}
      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>
    </ProductPageLayout>
  );
}


