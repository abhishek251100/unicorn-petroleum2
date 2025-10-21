import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from './ProductPageLayout';
import { productsData } from './productsData';
import { productsNavigationData } from './productsNavigationData';

export default function ProductsPageIndex() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Add entrance animation to the container
    if (containerRef.current) {
      containerRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  // Flatten all products including sub-items for comprehensive display
  const getAllProducts = () => {
    const allProducts = [];
    productsNavigationData.categories.forEach(category => {
      // Add main category
      allProducts.push({
        ...category,
        isMainCategory: true,
        description: getCategoryDescription(category.id)
      });
      
      // Add sub-items if they exist
      if (category.subItems) {
        category.subItems.forEach(subItem => {
          allProducts.push({
            ...subItem,
            isMainCategory: false,
            parentCategory: category.name,
            description: getSubItemDescription(subItem.id)
          });
        });
      }
    });
    return allProducts;
  };

  const getCategoryDescription = (categoryId) => {
    const descriptions = {
      'petroleum-jelly': 'Versatile emollient and protective agent for skin care applications',
      'white-mineral-oils': 'High-quality mineral oils for various industrial and cosmetic uses',
      'microcrystalline-wax': 'Fine-grained wax with excellent binding and coating properties',
      'paraffin-wax': 'Versatile wax products for multiple industrial applications',
      'natural-beeswax': 'Pure natural wax with excellent emulsifying properties',
      'emulsifying-wax': 'Specialized wax for creating stable emulsions',
      'd-panthenol': 'Provitamin B5 for enhanced skin conditioning and healing',
      'preservatives': 'Antimicrobial agents to extend product shelf life',
      'surfactants': 'Surface-active agents for cleaning and emulsification',
      'uv-filters': 'UV protection agents for sun care formulations'
    };
    return descriptions[categoryId] || 'High-quality product for various applications';
  };

  const getSubItemDescription = (subItemId) => {
    const descriptions = {
      'light-mineral-oil': 'Light viscosity mineral oil for cosmetic and pharmaceutical applications',
      'heavy-mineral-oil': 'Heavy viscosity mineral oil for industrial lubrication',
      'soft-paraffin': 'Soft consistency paraffin wax for topical applications',
      'hard-paraffin': 'Hard consistency paraffin wax for industrial uses',
      'parabens': 'Traditional preservative system for cosmetic products',
      'phenoxyethanol': 'Broad-spectrum preservative with excellent compatibility',
      'anionic': 'Anionic surfactants for effective cleaning and foaming',
      'nonionic': 'Nonionic surfactants for gentle cleaning applications',
      'organic-filters': 'Organic UV filters for broad-spectrum sun protection',
      'inorganic-filters': 'Inorganic UV filters for physical sun protection'
    };
    return descriptions[subItemId] || 'Specialized product variant with unique properties';
  };

  const allProducts = getAllProducts();

  return (
    <ProductPageLayout title="Our Products" subtitle="Comprehensive range of high-quality petroleum and specialty products">
      <div ref={containerRef} className="space-y-12">
        {/* Hero Section */}
        <section className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {productsData.hero.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {productsData.hero.subtitle}
          </p>
        </section>

        {/* All Products Grid */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Complete Product Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product, index) => (
              <Link 
                key={product.id} 
                to={product.link} 
                className={`group block border-[1.5px] border-[#EDA94E] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-stagger-in animate-stagger-${(index % 6) + 1}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#E99322] transition-colors">
                      {product.name}
                    </h4>
                    {product.parentCategory && (
                      <p className="text-sm text-[#E99322] font-medium mb-2">
                        {product.parentCategory}
                      </p>
                    )}
                  </div>
                  <div className="text-[#E99322] text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-[#E99322] group-hover:text-[#E99322]/80">
                    {product.isMainCategory ? 'View Category' : 'View Product'}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E99322]/10 group-hover:bg-[#E99322]/20 flex items-center justify-center transition-colors">
                    <span className="text-[#E99322] text-sm">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories Overview */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Product Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.categories.map((cat, index) => (
              <Link 
                key={cat.id} 
                to={cat.link} 
                className={`group block border-[1.5px] border-[#EDA94E] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-stagger-in animate-stagger-${(index % 6) + 1}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#E99322] transition-colors">
                    {cat.name}
                  </h4>
                  <div className="text-[#E99322] text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cat.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-[#E99322] group-hover:text-[#E99322]/80">
                    Explore Category
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E99322]/10 group-hover:bg-[#E99322]/20 flex items-center justify-center transition-colors">
                    <span className="text-[#E99322] text-sm">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-[#E99322]/5 to-[#EDA94E]/5 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help Choosing the Right Product?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your specific needs and applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-[#E99322] text-white font-semibold rounded-lg hover:bg-[#E99322]/90 transition-colors"
            >
              Contact Our Experts
            </Link>
            <Link 
              to="/applications" 
              className="inline-flex items-center px-6 py-3 border-[1.5px] border-[#EDA94E] text-[#E99322] font-semibold rounded-lg hover:bg-[#E99322]/5 transition-colors"
            >
              View Applications
            </Link>
          </div>
        </section>
      </div>
    </ProductPageLayout>
  );
}
