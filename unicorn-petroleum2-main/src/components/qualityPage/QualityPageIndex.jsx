import React from 'react';
import { qualityData } from './qualityData';
import HeroSection from '../../Common/HeroSection';
import Section from '../../Common/Section';

const QualityPageIndex = () => {
  return (
    <div className="min-h-screen">
      <HeroSection data={qualityData.hero} />
      <Section title={qualityData.qualityCommitment.heading} subtitle="">
        <p className="text-gray-700">{qualityData.qualityCommitment.description}</p>
      </Section>
    </div>
  );
};

export default QualityPageIndex;
