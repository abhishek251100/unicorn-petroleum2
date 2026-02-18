export const petroleumJellyData = {
  name: "Petroleum Jelly",
  description: "Purity for every application",
  bannerImage: "/assets/BannerImages/productsPage/petroleumjelly1.jpg", // Fallback for single banner
  // Slider configuration - Desktop banners only
  slider: [
    {
      title: "Petroleum Jelly",
      subtitle: "Purity for every application",
      image: "/assets/BannerImages/productsPage/petroleumjelly1.jpg",
      mobileImage: "/assets/BannerImages/MobileProductPage/M-jelly%201.jpg"
    },
    {
      title: "",
      subtitle: "",
      image: "/assets/BannerImages/productsPage/petroleumjelly2.jpg",
      mobileImage: "/assets/BannerImages/MobileProductPage/M-jelly%202.jpg"
    }
  ],
  
  // Common section data
  commonSection: {
    title: "Petroleum Jelly / Petrolatum / Soft Paraffin",
    description: "Petroleum Jelly is an ointment-like, homogenous, highly refined semi-solid with a delicate balance between liquid and solid hydrocarbons for skin-care application and topical formulations.\n Our product maintains a good structure during processing and congeals to form a smooth surface while packing, which adds to aesthetic value, and it has the ability to resist moisture, prevent decolorization and retain oil content even at elevated temperatures.",
    additionalInfo: "It is available in the following colours: bright snow-white, off-white, pearl-white, Lily, Pale-yellow, bright-yellow and amber.",
    brochureUrl: "/brochures/petroleum-jelly-brochure.pdf"
  },

  // New Applications section structure
  applicationsSection: {
    productName: "petroleum jelly",
    applications: "White/Yellow petroleum jelly find varied applications as an excipient in cosmetic and pharmaceutical formulations; such as the following:",
    finalProductUtilization: [
      "Ointments",
      "Pain balms", 
      "Cosmetic creams",
      "Foot care creams",
      "Hair food formulations",
      "Eye applicaps",
      "Gauze dressings",
      "Skin protectants",
      "Dental adhesive",
      "General-purpose lubricant"
    ]
  },

  // // Packaged responsibly section
  // packagedResponsibly: {
  //   packagingOptions: [
  //     {
  //       icon: "bag",
  //       type: "Bags",
  //       weight: "25 kg/35kg"
  //     },
  //     {
  //       icon: "box", 
  //       type: "Cartons",
  //       weight: "25 kg/35kg"
  //     }
  //   ]
  // },

  // Key features data
  keyFeatures: {
  heading: "Key features of Petroleum Jelly from us",
    features: [
      {
        icon: "/assets/Icons/Property 1=Compliance.png",
        title: "Pharmacopoeial compliance",
        items: [
          "Indian Pharmacopoeia (IP)",
          "British Pharmacopoeia (BP)",
          "United States Pharmacopoeia (USP)",
          "European Pharmacopoeia (Ph. Eur.)",
          "Japanese Pharmacopoeia (JP)"
        ]
      },
      {
        icon: "/assets/Icons/Property 1=Compliance.png",
        title: "Other compliances",
        items: [
          "21 CFR 172.880",
          "ICH Q3C (R4) for residual solvents",
          "USP <467> for residual solvents",
          "TSE/BSE free",
          "Halal & Kosher"
        ]
      }
    ]
  },

  // Related products section - Now using actual product images
  relatedProducts: {
    relatedProducts: [
      {
        name: "Mineral Oil",
        image: "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg"
      },
      {
        name: "Microcrystalline Wax",
        image: "/assets/RELATED PROD IMG/NEW IMAGES/microcrystalline wax.jpg"
      },
      {
        name: "Hard Paraffin Wax",
        image: "/assets/RELATED PROD IMG/NEW IMAGES/paraffinwax.jpg"
      }
    ]
  }
};

export default petroleumJellyData;
