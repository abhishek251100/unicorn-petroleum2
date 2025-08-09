export const homeData = {
  // Hero Section
  hero: {
    title: "Pioneering Excellence in Petroleum Specialties for 6+ Decades",
    subtitle: "Your trusted partner for quality-assured ingredients for Pharma, Cosmetics, and Industry",
    primaryButton: "Explore Products →",
    secondaryButton: "Why Choose Us?",
    backgroundImage: "/assets/hero-bg.jpg",
    primaryButtonColor: "#E99322",
    secondaryButtonColor: "#E99322",
    // For local images, use: backgroundImage: "/assets/hero-bg.jpg"
    // For external images, use: backgroundImage: "https://images.unsplash.com/..."
  },

  // Our Strengths Section
  strengths: {
    heading: "Our Strengths",
    subheading: "Excellence built on five decades of expertise and trust",
    cards: [
      {
        icon: "🏆",
        title: "60+ Years of Expertise",
        description: "Pioneering quality ingredients for the cosmetic and pharmaceutical world since 1964",
        link: "/about", // Internal link
      },
      {
        icon: "🧪",
        title: "State-of-the-Art R&D & QA",
        description: "Innovating raw materials that power global cosmetic & pharma brands",
        link: "/quality", // Internal link
      },
      {
        icon: "🤝",
        title: "Customer-Centric Approach",
        description: "Seamless procurement, personalized support — delivering quality raw materials from India to the world",
        link: "/contact", // Internal link
      },
    ],
    buttonText: "View All Strengths →",
    buttonLink: "/about", // Internal link
  },

  // Product Portfolio Section
  products: {
    heading: "Our Core Product Portfolio",
    subheading: "Where Innovation Meets Quality - Since 1964",
    cards: [
      {
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        title: "Petroleum Jelly",
        description: "High-purity, pharma and cosmetic-grade jelly with consistent texture, ideal for skincare and medical formulations",
        buttonText: "Explore More →",
        link: "/products/petroleum-jelly", // Internal link
      },
      {
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
        title: "White Mineral Oils",
        description: "Colorless, odorless oil refined for food, pharma, and cosmetic applications; available in light and heavy grades.",
        buttonText: "Explore More →",
        link: "/products/white-mineral-oils", // Internal link
      },
      {
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
        title: "Preservatives",
        description: "Effective antimicrobial preservatives widely used in personal care, pharmaceutical, and cosmetic formulations",
        buttonText: "Explore More →",
        link: "/products/preservatives", // Internal link
      },
      {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        title: "Natural Beeswax",
        description: "Natural wax with excellent binding and emulsifying properties, ideal for skincare, balms, and topical applications",
        buttonText: "Explore More →",
        link: "/products/natural-beeswax", // Internal link
      },
    ],
    buttonText: "View All Products →",
    buttonLink: "/products", // Internal link
  },

  // Industries Section
  industries: {
    heading: "Catering to Diverse Industries Worldwide",
    subheading: "Shaping the Future of Cosmetic & Pharma Ingredients",
    cards: [
      { 
        icon: "🏥", 
        label: "Pharmaceutical",
        link: "/applications#pharmaceutical" // Internal link with anchor
      },
      { 
        icon: "💄", 
        label: "Cosmetic",
        link: "/applications#cosmetic" // Internal link with anchor
      },
      { 
        icon: "🧪", 
        label: "Bulk Chemicals",
        link: "/applications#bulk-chemicals" // Internal link with anchor
      },
      { 
        icon: "🧴", 
        label: "Personal Care",
        link: "/applications#personal-care" // Internal link with anchor
      },
      { 
        icon: "⚙️", 
        label: "Lubricants",
        link: "/applications#lubricants" // Internal link with anchor
      },
      { 
        icon: "🌱", 
        label: "Agrochemical",
        link: "/applications#agrochemical" // Internal link with anchor
      },
      { 
        icon: "🧵", 
        label: "Textile",
        link: "/applications#textile" // Internal link with anchor
      },
    ],
    buttonText: "View All Applications →",
    buttonLink: "/applications", // Internal link
  },

  // Quality Standards Section
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

  // News Section
  news: {
    heading: "Latest News & Company Updates",
    cards: [
      {
        date: "20/06/25",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
        title: "Unicorn Petro Exhibits at ChemExpo India 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkText: "Read More →",
        linkUrl: "/news/chemexpo-2025", // Internal link
      },
      {
        date: "20/06/25",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        title: "New Grade Launch: Ophthalmic-Ready Jelly Now in Production",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkText: "Read More →",
        linkUrl: "/news/ophthalmic-jelly-launch", // Internal link
      },
      {
        date: "20/06/25",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
        title: "Inside Our Labs: Innovations in High-Purity Petroleum Jelly Grades",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkText: "Read More →",
        linkUrl: "/news/lab-innovations", // Internal link
      },
      {
        date: "20/06/25",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        title: "Sustainability in Petrochemicals: Our Roadmap to Greener Practices",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkText: "Read More →",
        linkUrl: "/news/sustainability-roadmap", // Internal link
      },
    ],
    buttonText: "View All News →",
    buttonLink: "/news", // Internal link
  },

  // Company Statement
  statement: {
    heading: "Unicorn Petroleum Industries Pvt. Ltd.",
    subheading: "60+ Years of Excellence, Innovation, and Trust",
    text: "Global Ingredients. Indian Expertise. Trusted Worldwide",
    linkText: "Learn More About Us →",
    linkUrl: "/about", // Internal link
  },

  // Call to Action Section
  cta: {
    heading: "Ready to Partner with Unicorn Petroleum?",
    subtitle: "Contact us today for custom formulations, bulk orders, or technical inquiries.",
    primaryButton: "Contact Sales",
    primaryButtonLink: "/contact", // Internal link
    secondaryButton: "Request Sample",
    secondaryButtonLink: "/contact#sample-request", // Internal link with anchor
  },
};

export default homeData;
