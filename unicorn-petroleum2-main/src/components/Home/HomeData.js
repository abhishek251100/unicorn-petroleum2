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
        image: "/assets/about/Manifacturing img1.png"
      },
      {
        icon: "/assets/Icons/Property 1=Flask.png",
        title: "Custom tailored formulations",
        description:
          "Seamless procurement, personalized support — delivering quality raw materials from India to the world",
        image: "/assets/RELATED PROD IMG/Paraffin Wax.png"
      },
      {
        icon: "/assets/Icons/Property 1=Thermal.png",
        title: "Petrochemical specialties",
        description:
          "High-performance petrochemicals and specialties refined to meet the needs of various industries",
        image: "/assets/RELATED PROD IMG/Mineral Oil.png"
      }
    ]
  },
  // Hero
  hero: {
    title: "Pioneering Excellence in Petroleum Specialties for 6+ Decades",
    subtitle:
      "Your trusted partner for quality-assured ingredients for Pharma, Cosmetics, and Industry",
    primaryButton: "Explore Products ",
    secondaryButton: "Why Choose Us?",
    backgroundImage: "/assets/hero-bg-home.jpg",
    primaryButtonColor: "#E99322",
    secondaryButtonColor: "#E99322",
  
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
          "/assets/HomePageImg/P2_Home.png",
        title: "Petroleum Jelly",
        description:
          "High-purity, pharma and cosmetic-grade jelly with consistent texture, ideal for skincare and medical formulations",
        buttonText: "Explore More →",
        link: "/products/petroleum-jelly", // Internal link
      },
      {
        image:
          "/assets/HomePageImg/P1_Home.png",
        title: "White Mineral Oils",
        description:
          "Colorless, odorless oil refined for food, pharma, and cosmetic applications; available in light and heavy grades.",
        buttonText: "Explore More →",
        link: "/products/white-mineral-oils", // Internal link
      },
      {
        image:
          "/assets/HomePageImg/P3_Home.png",
        title: "Preservatives",
        description:
          "Effective antimicrobial preservatives widely used in personal care, pharmaceutical, and cosmetic formulations",
        buttonText: "Explore More →",
        link: "/products/preservatives", // Internal link
      },
      {
        image:
          "/assets/HomePageImg/P4_Home.png",
        title: "Natural Beeswax",
        description:
          "Natural wax with excellent binding and emulsifying properties, ideal for skincare, balms, and topical applications",
        buttonText: "Explore More →",
        link: "/products/natural-beeswax", // Internal link
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
        link: "/applications#pharmaceutical", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=cosmetic.png",
        label: "Cosmetic",
        link: "/applications#cosmetic", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=petro.png",
        label: "Bulk Chemicals",
        link: "/applications#bulk-chemicals", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=fmcg.png",
        label: "Personal Care",
        link: "/applications#personal-care", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=lube.png",
        label: "Lubricants",
        link: "/applications#lubricants", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=agro.png",
        label: "Agrochemical",
        link: "/applications#agrochemical", // Internal link with anchor
      },
      {
        icon: "/assets/Icons/Property 1=Custom.png",
        label: "Textile",
        link: "/applications#textile", // Internal link with anchor
      },
    ],
    buttonText: "View All Applications →",
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
    linkUrl: "/quality", // Internal link
  },

  // News
  news: {
    heading: "Latest News & Company Updates",
    cards: [
      {
        date: "20/06/25",
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
        title: "Unicorn Petro Exhibits at ChemExpo India 2025",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkText: "Read More →",
        linkUrl: "/news/chemexpo-2025", // Internal link
      },
      {
        date: "20/06/25",
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
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
