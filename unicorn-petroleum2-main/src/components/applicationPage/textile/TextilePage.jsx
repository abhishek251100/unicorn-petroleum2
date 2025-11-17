import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { textileData as data } from './textileData';
import { useMetaTags } from '../../../hooks/useMetaTags';

export default function TextilePage() {
  useMetaTags(
    "Textile Applications - Unicorn Petroleum | Textile Industry Chemicals & Ingredients",
    "Specialized chemicals and ingredients for textile industry applications including fabric processing, finishing, and textile manufacturing. High-quality petroleum products and specialty chemicals for textile applications.",
    "textile chemicals, textile ingredients, fabric processing, textile finishing, textile manufacturing, textile industry chemicals, fabric treatment chemicals"
  );
  return <ApplicationTemplate title="Textile" breadcrumbsTitle="Textile" data={data} />;
}


