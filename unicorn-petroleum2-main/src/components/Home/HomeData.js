export const homeData = {
  // Icon Road Hero (new)
  iconRoadHero: {
    heading: "Our strengths",
    subheading: "Excellence built on six decades of expertise and trust",
    centerLogo: "",
    ctaText: "Request info",
    items: [
      {
        icon: "/assets/Icons/Property 1=Trophy.png",
        title: "Six decades of expertise",
        description:
          "Pioneering quality ingredients for the cosmetic and pharmaceutical world since 1964",
        image: "/assets/about/Artboard 3.jpg"
      },
      {
        icon: "/assets/Icons/Property 1=Flask.png",
        title: "Custom tailored formulations",
        description:
          "Seamless procurement, personalized support — delivering quality raw materials from India to the world",
        image: "/assets/about/Artboard 2.jpg"
      },
      {
        icon: "/assets/Icons/Property 1=Thermal.png",
        title: "Petrochemical specialties",
        description:
          "High-performance petrochemicals and specialties refined to meet the needs of various industries",
        image: "/assets/about/Artboard 1.jpg"
      }
    ]
  },
  // Hero
  hero: {
    title: "Pioneering Excellence in Petroleum Specialties for 6+ Decades",
    subtitle: "",
    primaryButton: "Explore Products ",
    primaryButtonLink: "/products",
    secondaryButton: "Why Choose Us?",
    secondaryButtonLink: "/about",
    backgroundImage: "/assets/hero-bg-home.jpg",
    primaryButtonColor: "#E99322",
    secondaryButtonColor: "#E99322",
    // Slider configuration for multiple banners
    slider: [
      {
        title: "Pioneering Excellence in Petroleum Specialties for 6+ Decades",
        subtitle: "",
        image: "/assets/hero-bg-home.jpg",
        mobileImage: "/assets/hero-bg-home.jpg"
      },
      {
        title: "",
        subtitle: "",
        image: "/assets/BannerImages/HomeBannerDesktop2.jpg",
        mobileImage: "/assets/BannerImages/HomeBannerMobile2.jpg"
      },
      // {
      //   // ChemExpo banner: image-only slide (no title/subtitle)
      //   title: "",
      //   subtitle: "",
      //   // Use URL-encoded path so spaces don't break background-image
      //   image: "/assets/BannerImages/Chem%20Expo%20Exhibition.jpeg",
      //   mobileImage: "/assets/BannerImages/Chem%20Expo%20Exhibition.jpeg"
      // }
    ]
  },

  // Our strengths
  strengths: {
    heading: "Our Strengths",
    subheading: "Excellence built on six decades of expertise and trust",
    cards: [
      {
        icon: "/assets/Icons/Property 1=Trophy.png",
        title: "Six Decades Expertise and trust",
        description:
          "Pioneering quality ingredients for the cosmetic and pharmaceutical world since 1964",
        link: "/about", // Internal link
      },
      {
        icon: "/assets/Icons/Property 1=Flask.png",
        title: "Custom tailored formulationsEXACT KNOWLEDGE",
        description:
          "Innovating raw materials that power global cosmetic & pharma brands",
        link: "/quality", // Internal link
      },
      {
        icon: "/assets/Icons/Property 1=Handshake.png",
        title: "Customer-Centric Approach",
        description:
          "Seamless procurement, personalized support delivering quality raw materials from India to the world",
        link: "/contact", // Internal link
      },
    ],
    buttonText: "View All Strengths →",
    buttonLink: "/about", // Internal link
  },

  // Product portfolio
  products: {
    heading: "Our core product portfolio",
    subheading: "Where Innovation Meets Quality - Since 1964",
    cards: [
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/Petroleumjelly.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/Petroleumjelly.jpg",
        title: "Petroleum Jelly",
        description:
          "A highly refined semi-solid hydrocarbon base offering excellent stability and superior oil retention, with a controlled melting range and no decolourization to ensure consistent purity and performance.",
        buttonText: "View Details →",
        link: "/products/petroleum-jelly", // Internal link
      },
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/WhiteMineraloil.jpg",
        title: "White Mineral Oils",
        description:
          "A highly refined, clear and odourless liquid hydrocarbon with low PAH content offering excellent lubricity and formulation flexibility across multiple viscosity grades, featuring a high viscosity index and very low PAH content for consistent, reliable performance.",
        buttonText: "View Details →",
        link: "/products/white-mineral-oils", // Internal link
      },
      {
        image: "/assets/RELATED PROD IMG/Lanolin.jpg",
        hoverImage: "/assets/RELATED PROD IMG/lanolin1.jpg",
        title: "Lanolin",
        description:
          "Highly refined, high-purity wool wax alcohol complex with controlled odor and color offering excellent emolliency and water-binding capacity for dermatological and topical formulations.",
        buttonText: "View Details →",
        link: "/products/lanolin", // Internal link
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/microcrystalline wax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/micro2.jpg",
        title: "Microcrystalline Wax",
        description:
          "A thoroughly refined hydrocarbon wax with fine crystalline structure, offering enhanced oil retention, superior flexibility, cohesion, and structural integrity in semi-solid systems and binding performance for ointments, sticks, and balm formulations for cosmetic and pharmaceutical applications.",
        buttonText: "View Details →",
        link: "/products/microcrystalline-wax",
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/paraffinwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/paraffin2.jpg",
        title: "Hard Paraffin Wax",
        description:
          "A high-purity solid hydrocarbon wax with a high melting point and low oil content, suitable for coatings, candles, and industrial processing applications, offering excellent thermal stability for molding and surface protection uses.",
        buttonText: "View Details →",
        link: "/products/paraffin-wax",
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Naturalbeeswax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/beeswax2.jpg",
        title: "Natural Beeswax",
        description:
          "A naturally derived, ester-rich purified beeswax with controlled color and minimal impurities, offering excellent plasticity, enhanced film formation, and emulsification support while delivering reliable structure in lipsticks, balms, creams, and other topical formulations.",
        buttonText: "View Details →",
        link: "/products/natural-beeswax",
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/emulsifyingwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/emulsifying2.jpg",
        title: "Emulsifying Wax",
        description:
          "An optimised emulsifying system designed to create stable oil-in-water and water-in-oil emulsions with consistent viscosity, ensuring uniform dispersion, enhanced texture, and long-term stability in cosmetic and pharmaceutical base formulations.",
        buttonText: "View Details →",
        link: "/products/emulsifying-wax",
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Speciality chemicals.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/SpecialityChemicals.jpg",
        title: "D-panthenol",
        description:
          "Provitamin B5 derivative with high purity and pharmacopeial compliance, offering humectant action, enhanced moisturisation, skin repair, and conditioning performance in topical formulations.",
        buttonText: "View Details →",
        link: "/products/d-panthenol",
      },
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/surfactant.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/surfactant.jpg",
        title: "Surfactants",
        description:
          "Engineered surface-active compounds in powder and liquid form that deliver efficient emulsification, wetting, and detergency in home and personal care formulations, while offering optimised foaming and dispersing performance through controlled HLB values ensuring effective cleaning.",
        buttonText: "View Details →",
        link: "/products/surfactants", // Internal link
      },
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/Preservative.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/preservative.jpg",
        title: "Preservatives",
        description:
          "Broad-spectrum antimicrobial preservation systems formulated to maintain microbiological stability and extend shelf life in regulated applications, carefully engineered for seamless compatibility across both aqueous and emulsion-based formulations.",
        buttonText: "View Details →",
        link: "/products/preservatives", // Internal link
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/uvfilters.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/uvFilters.jpg",
        title: "UV Filters",
        description:
          "Photostable UV-absorbing agents that deliver reliable broad-spectrum protection against UVA and UVB radiation, helping enhance SPF performance while maintaining overall formulation stability.",
        buttonText: "View Details →",
        link: "/products/uv-filters",
      },
    ],
    buttonText: "View All Products →",
    buttonLink: "/products", // Internal link
  },

  // Industries
  industries: {
    heading: "Catering to diverse industries worldwide",
    subheading: "Shaping the future of cosmetic & pharmaceutical ingredients",
    mobileTwoCols: true,
    desktopCols: 3,
    // Disable sub text under cards for this section
    showDescriptions: false,
    cards: [
      {
        icon: "/assets/Icons/Property 1=pharma.png",
        label: "Pharmaceutical",
        hoverDescription: "Petroleum jellies, mineral oil, waxes and specialty chemicals",
        link: "/applications/pharmaceutical",
      },
      {
        icon: "/assets/Icons/Property 1=cosmetic.png",
        label: "Cosmetic",
        hoverDescription: "Petroleum jellies, mineral oil, waxes, UV filters and specialty chemicals",
        link: "/applications/cosmetics",
      },
      {
        icon: "/assets/Icons/Property 1=herbal.png",
        label: "Personal Care",
        hoverDescription: "Petroleum jellies, mineral oil, waxes, emulsifiers and specialty chemicals",
        link: "/applications/personal-care",
      },
      {
        icon: "/assets/Icons/Bulk.png",
        label: "Home Care",
        hoverDescription: "Oils, waxes, preservatives and specialty chemicals",
        link: "/applications/home-care", // Internal link to home care application page
      },
      {
        icon: "/assets/Icons/Property 1=petro.png",
        label: "Textile",
        hoverDescription: "Lubricants, protective coatings and specialty chemicals",
        link: "/applications/textile",
      },
      {
        icon: "/assets/Icons/Property 1=lube.png",
        label: "Lubricants",
        hoverDescription: "Oils, waxes and protective coatings",
        link: "/applications/lubricants",
      },
      // {
      //   icon: "/assets/Icons/Property 1=agro.png",
      //   label: "Agrochemical",
      //   hoverDescription: "Carrier oils, coating and formulation agents",
      //   link: "/applications/agrochemical", // Internal link to agrochemical application page
      // },
    ],
    centerLastRow: true,
  },

  // Quality standards
  qualityStandards: {
    heading: "Globally Recognized Quality & Safety Standards",
    subheading: "Driven by quality, trusted for generations.",
    certifications: [
      { name: "FDA", fullName: "FOOD AND DRUG ADMINISTRATION" },
      { name: "WHO-GMP", fullName: "GOOD MANUFACTURING PRACTICE" },
      { name: "ISO 9001:2015", fullName: "ISO 9001:2015" },
      { name: "HALAL", fullName: "HALAL" },
      { name: "REACH", fullName: "REACH" },
      { name: "PHARMEXCIL", fullName: "pharmexcil" },
      { name: "POLLUTION CONTROL BOARD", fullName: "POLLUTION CONTROL BOARD" },
    ],
    linkText: "View All Certifications →",
    linkUrl: "/about", // Internal link
  },

  // News
  news: {
    heading: "Latest News & Company Updates",
    cards: [
      {
        date: "20/06/25",
        image:
          "/assets/RELATED PROD IMG/parabens.png",
        title: "Unicorn Petro Exhibits at ChemExpo India 2025",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkText: "Read More →",
        linkUrl: "/news/chemexpo-2025", // Internal link
      },
      {
        date: "20/06/25",
        image:
          "/assets/RELATED PROD IMG/sodium-salphate.png",
        title: "New Grade Launch: Ophthalmic-Ready Jelly Now in Production",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkText: "Read More →",
        linkUrl: "/news/ophthalmic-jelly-launch", // Internal link
      },
      // {
      //   date: "20/06/25",
      //   image:
      //     "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
      //   title:
      //     "Inside Our Labs: Innovations in High-Purity Petroleum Jelly Grades",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      //   linkText: "Read More →",
      //   linkUrl: "/news/lab-innovations", // Internal link
      // },
      // {
      //   date: "20/06/25",
      //   image:
      //     "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      //   title:
      //     "Sustainability in Petrochemicals: Our Roadmap to Greener Practices",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      //   linkText: "Read More →",
      //   linkUrl: "/news/sustainability-roadmap", // Internal link
      // },
    ],
    buttonText: "View All News →",
    buttonLink: "/news", // Internal link
  },

  // Company statement
  statement: {
    heading: "Unicorn Petroleum Industries Pvt. Ltd.",
    subheading: "60+ Years of Excellence, Innovation, and Trust",
    text: "Global Ingredients. Indian Expertise. Trusted Worldwide",
    linkText: "Learn More About Us →",
    linkUrl: "/about", // Internal link
  },

  // Call to action
  cta: {
    heading: "Ready to Partner with Unicorn Petroleum?",
    subtitle:
      "Contact us today for custom formulations, bulk orders, or technical inquiries.",
    primaryButton: "Contact Sales",
    primaryButtonLink: "/contact", // Internal link
    secondaryButton: "Request Sample",
    secondaryButtonLink: "/contact#quote-form-section", // Internal link with anchor
  },
};

export default homeData;
