import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { personalCareData as data } from './personalCareData';
import { useMetaTags } from '../../../hooks/useMetaTags';

export default function PersonalCarePage() {
  useMetaTags(
    "Personal Care Applications - Unicorn Petroleum | Personal Care Ingredients",
    "Specialized ingredients for personal care products including skin care, hair care, and body care formulations. High-quality petroleum products, waxes, and specialty chemicals for personal care applications.",
    "personal care ingredients, skin care ingredients, hair care ingredients, body care, personal care products, cosmetic ingredients, personal care formulations"
  );
  return <ApplicationTemplate title="Personal Care" breadcrumbsTitle="Personal Care" data={data} />;
}


