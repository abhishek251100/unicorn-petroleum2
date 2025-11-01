import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { bulkChemicalData as data } from './bulkChemicalData';

export default function BulkChemicalPage() {
  return <ApplicationTemplate title="Bulk Chemical" breadcrumbsTitle="Bulk Chemical" data={data} />;
}


