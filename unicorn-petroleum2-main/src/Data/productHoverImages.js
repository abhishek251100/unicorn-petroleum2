// Central registry for product hover images
// Key by stable product name or slug used across cards
// Using existing RELATED PROD IMG images as hover images

// Universal hover image - use this same image for all products
const UNIVERSAL_HOVER_IMAGE = "/assets/RELATED PROD IMG/Petroleum jelly.png";

export const productHoverImages = {
  "Petroleum Jelly": "/assets/RELATED PROD IMG/Petroleum Jelly (2).png",
  "White Mineral Oils": "/assets/RELATED PROD IMG/Mineral Oil.png",
  "Microcrystalline Wax": "/assets/RELATED PROD IMG/New Hover Images/micro2.jpg",
  "Paraffin Wax": "/assets/RELATED PROD IMG/New Hover Images/paraffin2.jpg",
  "Natural Beeswax": "/assets/RELATED PROD IMG/New Hover Images/beeswax2.jpg",
  "Emulsifying Wax": "/assets/RELATED PROD IMG/New Hover Images/emulsifying2.jpg",
  "D-Panthenol": "/assets/RELATED PROD IMG/D-Panthenol.png",
  "Preservatives": "/assets/RELATED PROD IMG/Frame 531 (4).png",
  "Surfactants": "/assets/RELATED PROD IMG/sodium-salphate.png",
  "UV Filters": "/assets/RELATED PROD IMG/ExtraUV/Frame 531 (12).png",
  "UV Filters (dermatological)": "/assets/RELATED PROD IMG/ExtraUV/Frame 531 (12).png",
  "UV Filters (makeup/SPF)": "/assets/RELATED PROD IMG/ExtraUV/Frame 531 (13).png",
  "Waxes": "/assets/RELATED PROD IMG/Beeswax2 (2).png",
  "Specialty Chemicals": "/assets/RELATED PROD IMG/sodium-salphate.png",
  "Mineral Oil": "/assets/RELATED PROD IMG/Mineral Oil.png",
};

// Always return a valid hover image - use universal fallback if product-specific image doesn't exist
export const getProductHoverImage = (name) => {
  const specificImage = productHoverImages[name];
  // Return specific image if it exists, otherwise use universal hover image
  return specificImage || UNIVERSAL_HOVER_IMAGE;
};

// Export universal hover image for direct use
export { UNIVERSAL_HOVER_IMAGE };


