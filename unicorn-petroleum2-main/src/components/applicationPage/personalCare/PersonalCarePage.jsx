import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { personalCareData as data } from './personalCareData';

export default function PersonalCarePage() {
  return <ApplicationTemplate title="Personal Care" breadcrumbsTitle="Personal Care" data={data} />;
}


