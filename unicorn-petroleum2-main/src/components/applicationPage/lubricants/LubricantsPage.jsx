import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { lubricantsData as data } from './lubricantsData';

export default function LubricantsPage() {
  return <ApplicationTemplate title="Lubricants" breadcrumbsTitle="Lubricants" data={data} />;
}


