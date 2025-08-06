import React from "react";
import HeroSection from "../../Common/HeroSection";
import FGridSection from "../../Common/FGridSection";
import ProductPortfolioSection from "../../Common/ProductPortfolioSection";
import CardsSection from "../../Common/CardsSection";
import QualityStandardsSection from "../../Common/QualityStandardsSection";
import NewsSection from "../../Common/NewsSection";
import CallToAction from "../../Common/CallToAction";
import CompanyStatement from "../../Common/CompanyStatement";
import { homeData } from "../../Data/homeData";

const HomeIndex = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection data={homeData.hero} />

      {/* Our Strengths Section */}
      <FGridSection data={homeData.strengths} />

      {/* Product Portfolio Section */}
      <ProductPortfolioSection data={homeData.products} />

      {/* Industries Section */}
      <CardsSection data={homeData.industries} />

      {/* Quality Standards Section */}
      <QualityStandardsSection data={homeData.qualityStandards} />

      {/* News Section */}
      <NewsSection data={homeData.news} />

      {/* Company Statement */}
      <CompanyStatement data={homeData.statement} />

      {/* Call to Action Section */}
      <CallToAction data={homeData.cta} />
    </div>
  );
};

export default HomeIndex;
