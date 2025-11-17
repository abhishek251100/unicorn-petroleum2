import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { bulkChemicalData as data } from './bulkChemicalData';
import { useMetaTags } from '../../../hooks/useMetaTags';

export default function BulkChemicalPage() {
  useMetaTags(
    "Bulk Chemical Applications - Unicorn Petroleum | Bulk Chemical Ingredients",
    "Bulk chemical ingredients and specialty chemicals for various industrial applications. High-quality petroleum products, waxes, and chemicals supplied in bulk quantities for industrial manufacturing.",
    "bulk chemicals, bulk chemical ingredients, industrial chemicals, specialty chemicals, bulk petroleum products, industrial manufacturing chemicals"
  );
  return <ApplicationTemplate title="Bulk Chemical" breadcrumbsTitle="Bulk Chemical" data={data} />;
}


