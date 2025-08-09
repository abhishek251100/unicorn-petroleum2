import React from 'react';
import { reachData } from './reachData';
import HeroSection from '../../Common/HeroSection';
import Section from '../../Common/Section';

const ReachPageIndex = () => {
  return (
    <div className="min-h-screen">
      <HeroSection data={reachData.hero} />
      <Section title={reachData.globalPresence.heading} subtitle="">
        <p className="text-gray-700">{reachData.globalPresence.description}</p>
      </Section>
    </div>
  );
};

export default ReachPageIndex;
