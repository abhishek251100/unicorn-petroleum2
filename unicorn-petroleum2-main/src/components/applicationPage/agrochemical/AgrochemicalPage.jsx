import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { agrochemicalData as data } from './agrochemicalData';
import { useMetaTags } from '../../../hooks/useMetaTags';

export default function AgrochemicalPage() {
  useMetaTags(
    "Agrochemical Applications - Unicorn Petroleum | Agricultural Chemical Ingredients",
    "Specialized ingredients for agrochemical formulations including pesticides, herbicides, and agricultural products. High-quality petroleum products and specialty chemicals for agricultural applications.",
    "agrochemical ingredients, agricultural chemicals, pesticide ingredients, herbicide ingredients, agricultural formulations, agrochemical applications"
  );
  return <ApplicationTemplate title="Agrochemical" breadcrumbsTitle="Agrochemical" data={data} />;
}


