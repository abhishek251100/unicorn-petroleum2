// Map human-friendly product names to router paths
// Extend as needed

export const productNameToPath = {
  "Petroleum Jelly": "/products/petroleum-jelly",
  "White Mineral Oils": "/products/white-mineral-oils",
  "Surfactants": "/products/surfactants",
  "Preservatives": "/products/preservatives",
  "UV Filters": "/products/uv-filters",
  "Emulsifying Wax": "/products/emulsifying-wax",
  "Microcrystalline Wax": "/products/microcrystalline-wax",
  "Paraffin Wax": "/products/paraffin-wax",
  "Natural Beeswax": "/products/natural-beeswax",
  "D-Panthenol": "/products/d-panthenol",
};

export const getProductPath = (name) => productNameToPath[name] || "/products";


