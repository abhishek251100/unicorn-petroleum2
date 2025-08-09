import React from 'react';
import HeroSection from '../../Common/HeroSection';
import Section from '../../Common/Section';
import { aboutData } from './aboutData';

const AboutIndex = () => {
  return (
    <div className="min-h-screen">
      <HeroSection data={{
        title: aboutData.hero.title,
        subtitle: aboutData.hero.subtitle,
        backgroundImage: aboutData.hero.backgroundImage
      }} />

      <Section title={aboutData.companyOverview.heading} subtitle="">
        <p className="text-lg text-gray-700">{aboutData.companyOverview.description}</p>
      </Section>
    </div>
  );
};

export default AboutIndex;