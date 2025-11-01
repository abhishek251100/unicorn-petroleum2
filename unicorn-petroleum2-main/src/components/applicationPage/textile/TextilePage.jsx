import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { textileData as data } from './textileData';

export default function TextilePage() {
  return <ApplicationTemplate title="Textile" breadcrumbsTitle="Textile" data={data} />;
}


