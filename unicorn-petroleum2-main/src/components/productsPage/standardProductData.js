export function buildStandardProductData({ name, description }) {
  const resolvedName = name || "Product";
  const resolvedDescription = description || "";

  return {
    name: resolvedName,
    description: resolvedDescription,

    commonSection: {
      title: resolvedName,
      description: resolvedDescription,
      additionalInfo:
        "This page follows Unicorn's standard layout. Provide brochure and specs as needed.",
      brochureUrl: "#",
    },

    applicationsSection: {
      productName: resolvedName.toLowerCase(),
      applications:
        "Content will be updated from Figma desktop copy. This placeholder keeps alignment consistent.",
      finalProductUtilization: [
        "Use case 1",
        "Use case 2",
        "Use case 3",
      ],
    },

    packagedResponsibly: {
      packagingOptions: [
        { icon: "/assets/Icons/ICON/Icon 4.jpg.jpeg", type: "Bags", weight: "25 kg" },
        { icon: "box", type: "Cartons", weight: "25 kg" },
      ],
    },

    keyFeatures: {
      heading: `Key Features of ${resolvedName} from Unicorn`,
      features: [
        {
          icon: "/assets/Icons/Property 1=Compliance.png",
          title: "Quality & Compliance",
          items: ["Consistent quality", "Regulatory conformance", "Reliable supply"],
        },
        {
          icon: "/assets/Icons/Property 1=Compliance.png",
          title: "Application Versatility",
          items: ["Multiple end uses", "Stable performance", "Formulation friendly"],
        },
      ],
    },

    relatedProducts: {
      relatedProducts: [
        { name: "Mineral Oil", image: "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg" },
        { name: "Microcrystalline Wax", image: "/assets/RELATED PROD IMG/NEW IMAGES/microcrystalline wax.jpg" },
        { name: "Hard Paraffin Wax", image: "/assets/RELATED PROD IMG/NEW IMAGES/paraffinwax.jpg" },
      ],
    },
  };
}

export default buildStandardProductData;


