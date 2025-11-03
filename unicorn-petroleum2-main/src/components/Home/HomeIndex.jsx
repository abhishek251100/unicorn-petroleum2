import React from "react";
import SliderHero from "../../Common/SliderHero";
import IconRoadHero from "../../Common/IconRoadHero";
import FGridSection from "../../Common/FGridSection";
import ProductPortfolioSection from "../../Common/ProductPortfolioSection";
import CardsSection from "../../Common/CardsSection";
import QualityStandardsSection from "../../Common/QualityStandardsSection";
import NewsSection from "../../Common/NewsSection";
import CallToAction from "../../Common/CallToAction";
import CompanyStatement from "../../Common/CompanyStatement";
import homeData from "./HomeData";

const HomeIndex = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <SliderHero
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        slides={homeData.hero.slider}
        bannerImage={homeData.hero.backgroundImage}
        autoPlayInterval={5000}
        primaryButton={homeData.hero.primaryButton}
        primaryButtonLink={homeData.hero.primaryButtonLink}
        secondaryButton={homeData.hero.secondaryButton}
        secondaryButtonLink={homeData.hero.secondaryButtonLink}
        primaryButtonColor={homeData.hero.primaryButtonColor}
        secondaryButtonColor={homeData.hero.secondaryButtonColor}
        overlapClass="md:-mt-4"
        paddingTopClass="pt-12 md:pt-20"
      />

         {/* Icon Road Hero (first section) */}
         <IconRoadHero data={homeData.iconRoadHero} />

      {/* Product Portfolio Section */}
      <ProductPortfolioSection data={homeData.products} />

      {/* Industries Section */}
      <CardsSection data={{ ...homeData.industries, centerLastRow: true }} />

      {/* Quality Standards Section */}
      <QualityStandardsSection />

      {/* News Section */}
      <NewsSection data={homeData.news} />

      {/* Company Statement */}
      {/* <CompanyStatement data={homeData.statement} /> */}

      {/* Call to Action Section */}
      <CallToAction data={homeData.cta} />
    </div>
  );
};

export default HomeIndex;
