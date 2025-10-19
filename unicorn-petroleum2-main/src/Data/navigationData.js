// Centralized navigation data for all sections
export const navigationData = {
  about: {
    title: "About Us",
    link: "/about"
  },
  applications: {
    title: "Applications",
    categories: [
      { id: 'pharmaceutical', name: 'Pharmaceutical', link: '/applications/pharmaceutical' },
      { id: 'cosmetics', name: 'Cosmetics', link: '/applications/cosmetics' },
      { id: 'bulk-chemical', name: 'Bulk Chemical', link: '/applications/bulk-chemical' },
      { id: 'personal-care', name: 'Personal Care', link: '/applications/personal-care' },
      { id: 'lubricants', name: 'Lubricants', link: '/applications/lubricants' },
      { id: 'agrochemical', name: 'Agrochemical', link: '/applications/agrochemical' },
      { id: 'textile', name: 'Textile', link: '/applications/textile' }
    ]
  },
  products: {
    title: "Products",
    categories: [
      { id: 'petroleum-jelly', name: 'Petroleum Jelly', link: '/products/petroleum-jelly' },
      { id: 'white-mineral-oils', name: 'White Mineral Oils', link: '/products/white-mineral-oils' },
      { id: 'microcrystalline-wax', name: 'Microcrystalline Wax', link: '/products/microcrystalline-wax' },
      { id: 'paraffin-wax', name: 'Paraffin Wax', link: '/products/paraffin-wax' },
      { id: 'natural-beeswax', name: 'Natural Beeswax', link: '/products/natural-beeswax' },
      { id: 'emulsifying-wax', name: 'Emulsifying Wax', link: '/products/emulsifying-wax' },
      { id: 'd-panthenol', name: 'D-Panthenol', link: '/products/d-panthenol' },
      { id: 'preservatives', name: 'Preservatives', link: '/products/preservatives' },
      { id: 'surfactants', name: 'Surfactants', link: '/products/surfactants' },
      { id: 'uv-filters', name: 'UV Filters', link: '/products/uv-filters' }
    ]
  }
};

// Helper function to get navigation data by section
export const getNavigationData = (section) => {
  return navigationData[section] || null;
};

export default navigationData;
