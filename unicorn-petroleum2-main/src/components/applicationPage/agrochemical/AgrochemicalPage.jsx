import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { agrochemicalData as data } from './agrochemicalData';

export default function AgrochemicalPage() {
  return <ApplicationTemplate title="Agrochemical" breadcrumbsTitle="Agrochemical" data={data} />;
}


