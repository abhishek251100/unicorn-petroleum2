import React from 'react';
import { applicationsData } from './applicationsData';
import HeroSection from '../../Common/HeroSection';
import Section from '../../Common/Section';

const ApplicationPageIndex = () => {
  return (
    <div className="min-h-screen">
      <HeroSection data={applicationsData.hero} />
      <Section title="Industries" subtitle={applicationsData.hero.subtitle}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationsData.industries.map((ind) => (
            <div key={ind.id} className="border rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{ind.name}</h4>
              <p className="text-gray-600">{ind.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default ApplicationPageIndex;