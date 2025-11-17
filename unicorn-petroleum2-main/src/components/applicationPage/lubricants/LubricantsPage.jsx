import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { lubricantsData as data } from './lubricantsData';
import { useMetaTags } from '../../../hooks/useMetaTags';

export default function LubricantsPage() {
  useMetaTags(
    "Lubricants Applications - Unicorn Petroleum | Industrial Lubricants & Specialty Oils",
    "High-performance lubricants and specialty oils for industrial applications. Mineral oils and specialty lubricants for machinery, equipment, and industrial processes. Consistent quality and reliable performance.",
    "industrial lubricants, specialty lubricants, mineral oil lubricants, machinery lubricants, industrial oils, lubricant applications, industrial lubrication"
  );
  return <ApplicationTemplate title="Lubricants" breadcrumbsTitle="Lubricants" data={data} />;
}


