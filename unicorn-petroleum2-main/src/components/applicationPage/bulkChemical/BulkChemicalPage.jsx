import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { bulkChemicalData as data } from './bulkChemicalData';
import { useMetaTags } from '../../../hooks/useMetaTags';

export default function BulkChemicalPage() {
  useMetaTags(
    "Home Care Applications - Unicorn Petroleum | Home Care Ingredients",
    "Home care ingredients and specialty chemicals for various household applications. High-quality petroleum products, waxes, and chemicals supplied for home care manufacturing.",
    "home care, home care ingredients, household chemicals, specialty chemicals, home care petroleum products, home care manufacturing chemicals"
  );
  return <ApplicationTemplate title="Home Care" breadcrumbsTitle="Home Care" data={data} />;
}


