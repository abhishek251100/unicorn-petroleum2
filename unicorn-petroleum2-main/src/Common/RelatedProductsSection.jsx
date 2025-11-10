import React from "react";
import { Link } from "react-router-dom";
import { getProductPath } from "../Data/productLinks";

const RelatedProductsSection = ({ data }) => {
  if (!data || !data.relatedProducts || data.relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Related products
          </h2>
          <p className="text-xl text-gray-600">
            Explore other relevant products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.relatedProducts.map((product, index) => {
            return (
            <div
              key={index}
              className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Mobile: Image on top, text below */}
              <div className="md:hidden">
                <div className="w-full h-48 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e)=>{ e.target.style.display='none'; const fallback=e.target.nextSibling; if(fallback && fallback.dataset.fallback==='1'){ fallback.style.display='flex'; } }}
                  />
                  <div data-fallback="1" className="hidden absolute inset-0 bg-gray-200 items-center justify-center">
                    <span className="text-gray-600 font-semibold">{product.name}</span>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                    {product.name}
                  </h3>
                  <Link to={product.link || getProductPath(product.name)} className="bg-[#E99322] text-white px-5 py-2 rounded-full font-medium hover:bg-[#E99322] transition-all duration-300 inline-flex items-center whitespace-nowrap min-w-[150px] justify-center">
                    View Details
                  </Link>
                </div>
              </div>

              {/* Desktop: Side-by-side layout */}
              <div className="hidden md:grid h-36" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="h-full w-full relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e)=>{ e.target.style.display='none'; const fallback=e.target.nextSibling; if(fallback && fallback.dataset.fallback==='1'){ fallback.style.display='flex'; } }}
                  />
                  <div data-fallback="1" className="hidden absolute inset-0 bg-gray-200 items-center justify-center">
                    <span className="text-gray-600 font-semibold">{product.name}</span>
                  </div>
                </div>
                
                <div className="h-full">
                  <div className="w-full h-full px-6 py-3 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight min-h-[2.25rem] flex items-center justify-center">
                      {product.name}
                    </h3>
                    <div className="mt-auto w-full flex justify-center">
                      <Link to={product.link || getProductPath(product.name)} className="bg-[#E99322] text-white px-5 py-2 rounded-full font-medium hover:bg-[#E99322] transition-all duration-300 inline-flex items-center whitespace-nowrap min-w-[150px] justify-center">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;
