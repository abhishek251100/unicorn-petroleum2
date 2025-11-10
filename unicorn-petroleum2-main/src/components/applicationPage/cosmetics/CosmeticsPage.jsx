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
          { name: 'Petroleum Jelly', image: '/assets/RELATED PROD IMG/NEW IMAGES/Petroleumjelly.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/Petroleumjelly.jpg', description: 'Healing ointments, skin protectants, and excipients in topical medicines.' },
          { name: 'White Mineral Oils', image: '/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/WhiteMineraloil.jpg', description: 'Used as a laxative, tablet coating, ointment base, and in topical formulations.' },
          { name: 'Microcrystalline Wax', image: '/assets/RELATED PROD IMG/NEW IMAGES/microcrystalline wax.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/waxes.jpg', description: 'Used in manufacturing ointments and balms.' },
          { name: 'Natural Beeswax', image: '/assets/RELATED PROD IMG/NEW IMAGES/Naturalbeeswax.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/waxes.jpg', description: 'Used in ointments, tablet coatings, slow-release formulations, and as a binding agent.' },
          { name: 'Emulsifying Wax', image: '/assets/RELATED PROD IMG/NEW IMAGES/emulsifyingwax.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/waxes.jpg', description: 'Used in emulsified medicinal creams.' },
          { name: 'D-Panthenol', image: '/assets/RELATED PROD IMG/NEW IMAGES/Dpanthenol.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/Panthenol.jpg', description: 'Provitamin of B5 supporting skin regeneration and hydration.' },
          { name: 'Preservatives', image: '/assets/RELATED PROD IMG/NEW IMAGES/Preservative.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/preservative.jpg', description: 'Prevent microbial growth in syrups, eye drops, ointments, and injectables.' },
          { name: 'Surfactants', image: '/assets/RELATED PROD IMG/NEW IMAGES/surfactant.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/surfactant.jpg', description: 'Solubilizers, emulsifiers, wetting agents in syrups, suspensions, and topical formulations.' },
          { name: 'UV Filters', image: '/assets/RELATED PROD IMG/NEW IMAGES/uvfilters.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/uvFilters.jpg', description: 'Used in dermatological formulations to protect against UV-induced damage.' },
          { name: 'UV Filters', image: '/assets/RELATED PROD IMG/NEW IMAGES/uvfilters.jpg', hoverImage: '/assets/RELATED PROD IMG/New Hover Images/uvFilters.jpg', description: 'Prevent UV damage by adding into makeup and skincare with SPF' },
        ],
      }}
    />
  );
}
