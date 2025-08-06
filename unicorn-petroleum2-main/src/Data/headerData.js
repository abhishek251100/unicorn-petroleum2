export const headerData = {
  // Contact Bar Data
  contactBar: {
    phone: "+91 22 4232 4121",
    email: "info@unicornpetro.co.in",
    onlineStatus: true
  },

  // Navigation Data
  navigation: {
    logo: {
      text: "unicorn",
      tagline: "Innovating always..."
    },
    menuItems: [
      {
        name: "About",
        link: "/about",
        hasDropdown: true,
        dropdownItems: [
          { name: "Our Story", link: "/about/story" },
          { name: "Mission & Vision", link: "/about/mission" },
          { name: "Leadership", link: "/about/leadership" }
        ]
      },
      {
        name: "Products",
        link: "/products",
        hasDropdown: true,
        dropdownItems: [
          { name: "Petroleum Jelly", link: "/products/petroleum-jelly" },
          { name: "White Mineral Oils", link: "/products/white-mineral-oils" },
          { name: "Microcrystalline Wax", link: "/products/microcrystalline-wax" },
          { name: "Paraffin Wax", link: "/products/paraffin-wax" },
          { name: "Natural Beeswax", link: "/products/natural-beeswax" },
          { name: "Emulsifying Wax", link: "/products/emulsifying-wax" },
          { name: "D-Panthenol", link: "/products/d-panthenol" },
          { name: "Preservatives", link: "/products/preservatives" },
          { name: "Surfactants", link: "/products/surfactants" },
          { name: "UV Filters", link: "/products/uv-filters" }
        ]
      },
      {
        name: "Applications",
        link: "/applications",
        hasDropdown: true,
        dropdownItems: [
          { name: "Pharmaceutical", link: "/applications/pharmaceutical" },
          { name: "Cosmetic", link: "/applications/cosmetic" },
          { name: "Personal Care", link: "/applications/personal-care" },
          { name: "Industrial", link: "/applications/industrial" }
        ]
      },
      {
        name: "Quality",
        link: "/quality",
        hasDropdown: false
      },
      {
        name: "Reach",
        link: "/reach",
        hasDropdown: false
      },
      {
        name: "Contact",
        link: "/contact",
        hasDropdown: false
      }
    ]
  }
};

export default headerData; 