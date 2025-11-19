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
    subtitle:
      "Your trusted partner for quality-assured ingredients for Pharma, Cosmetics, and Industry",
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
        subtitle: "Your trusted partner for quality-assured ingredients for Pharma, Cosmetics, and Industry",
        image: "/assets/hero-bg-home.jpg",
        mobileImage: "/assets/hero-bg-home.jpg"
      },
      {
        title: "",
        subtitle: "",
        image: "/assets/BannerImages/HomeBannerDesktop2.jpg",
        mobileImage: "/assets/BannerImages/HomeBannerMobile2.jpg"
      }
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
    heading: "Our Core Product Portfolio",
    subheading: "Where Innovation Meets Quality - Since 1964",
    cards: [
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/Petroleumjelly.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/Petroleumjelly.jpg",
        title: "Petroleum Jelly",
        description:
          "Pharma and cosmetic-grade jelly, ideal for skincare and topical formulations.",
        buttonText: "View Details →",
        link: "/products/petroleum-jelly", // Internal link
      },
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/WhiteMineraloil.jpg",
        title: "White Mineral Oils",
        description:
          "Ideal blending base and lubricant oil utilised across various industry applications",
        buttonText: "View Details →",
        link: "/products/white-mineral-oils", // Internal link
      },
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/surfactant.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/surfactant.jpg",
        title: "Surfactants",
        description:
          "Versatile foaming and wetting agent across wide range of cleaning and personal care products",
        buttonText: "View Details →",
        link: "/products/surfactants", // Internal link
      },
      {
        image:
          "/assets/RELATED PROD IMG/NEW IMAGES/Preservative.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/preservative.jpg",
        title: "Preservatives",
        description:
          "Effective antimicrobial substances crucial for extending shelf life of items in the food, pharmaceutical and cosmetics industry",
        buttonText: "View Details →",
        link: "/products/preservatives", // Internal link
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/uvfilters.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/uvFilters.jpg",
        title: "UV Filters",
        description:
          "Used in personal care products, shielding skin against UVA and UVB rays and their harmful effects",
        buttonText: "View Details →",
        link: "/products/uv-filters",
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Naturalbeeswax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/waxes.jpg",
        title: "Waxes",
        description:
          "Range of waxes, from paraffin and microcrystalline to natural beeswax and emulsifying wax, tailored for custom product needs",
        buttonText: "View Details →",
        link: "/products",
      },
      {
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Speciality chemicals.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/SpecialityChemicals.jpg",
        title: "Specialty Chemicals",
        description:
          "Substances refined for special usecases across niche industries, including panthenol",
        buttonText: "View Details →",
        link: "/products",
      },
    ],
    buttonText: "View All Products →",
    buttonLink: "/products", // Internal link
  },

  // Industries
  industries: {
    heading: "Catering to Diverse Industries Worldwide",
    subheading: "Shaping the future of cosmetic & pharmaceutical ingredients",
    mobileTwoCols: true,
    cards: [
      {
        icon: "/assets/Icons/Property 1=pharma.png",
        label: "Pharmaceutical",
        hoverDescription: "Petroleum jellies, mineral oil, waxes and specialty chemicals",
        link: "/applications#pharmaceutical", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=cosmetic.png",
        label: "Cosmetic",
        hoverDescription: "Petroleum jellies, mineral oil, waxes, UV filters and specialty chemicals",
        link: "/applications#cosmetic", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=herbal.png",
        label: "Personal Care",
        hoverDescription: "Petroleum jellies, mineral oil, waxes, emulsifiers and specialty chemicals",
        link: "/applications#personal-care", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Bulk.png",
        label: "Home Care",
        hoverDescription: "Oils, waxes, preservatives and specialty chemicals",
        link: "/applications#home-care", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=petro.png",
        label: "Textile",
        hoverDescription: "Lubricants, protective coatings and specialty chemicals",
        link: "/applications#textile", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=lube.png",
        label: "Lubricants",
        hoverDescription: "Oils, waxes and protective coatings",
        link: "/applications#lubricants", // Internal link with anchor
      },
    ],
    buttonText: "View All Applications",
    buttonLink: "/applications", // Internal link
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
    secondaryButtonLink: "/contact#sample-request", // Internal link with anchor
  },
};

export default homeData;
