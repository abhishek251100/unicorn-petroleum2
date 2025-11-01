import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { cosmeticsData } from './cosmeticsData';

export default function CosmeticsPage() {
  return (
    <ApplicationTemplate
      title="Cosmetics"
      breadcrumbsTitle="Cosmetics"
      data={{
        ...cosmeticsData,
        relatedProducts: [
          { name: 'Petroleum Jelly', image: '/assets/RELATED PROD IMG/Petroleum jelly.png', description: 'Healing ointments, skin protectants, and excipients in topical medicines.' },
          { name: 'White Mineral Oils', image: '/assets/RELATED PROD IMG/Mineral Oil.png', description: 'Used as a laxative, tablet coating, ointment base, and in topical formulations.' },
          { name: 'Microcrystalline Wax', image: '/assets/RELATED PROD IMG/Microcrystalline.png', description: 'Used in manufacturing ointments and balms.' },
          { name: 'Natural Beeswax', image: '/assets/RELATED PROD IMG/Beeswax2 (2).png', description: 'Used in ointments, tablet coatings, slow-release formulations, and as a binding agent.' },
          { name: 'Emulsifying Wax', image: '/assets/RELATED PROD IMG/Emulsifying wax2.png', description: 'Used in emulsified medicinal creams.' },
          { name: 'D-Panthenol', image: '/assets/RELATED PROD IMG/Frame 531 (1).png', description: 'Provitamin of B5 supporting skin regeneration and hydration.' },
          { name: 'Preservatives', image: '/assets/RELATED PROD IMG/Frame 531 (4).png', description: 'Prevent microbial growth in syrups, eye drops, ointments, and injectables.' },
          { name: 'Surfactants', image: '/assets/RELATED PROD IMG/sodium-salphate.png', description: 'Solubilizers, emulsifiers, wetting agents in syrups, suspensions, and topical formulations.' },
          { name: 'UV Filters', image: '/assets/RELATED PROD IMG/ExtraUV/Frame 531 (12).png', description: 'Used in dermatological formulations to protect against UV-induced damage.' },
          { name: 'UV Filters', image: '/assets/RELATED PROD IMG/ExtraUV/Frame 531 (11).png', description: 'Prevent UV damage by adding into makeup and skincare with SPF' },
        ],
      }}
    />
  );
}
