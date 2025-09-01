import React from "react";

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
          {data.relatedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-[#EDA94E] hover:shadow-lg transition-all duration-300 overflow-hidden h-36"
            >
              <div className="grid h-full" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="h-full w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="h-full">
                  <div className="w-full h-full px-6 py-3 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight min-h-[2.25rem] flex items-center justify-center">
                      {product.name}
                    </h3>
                    <div className="mt-auto w-full flex justify-center">
                      <button className="bg-[#EDA94E] text-white px-5 py-2 rounded-full font-medium hover:bg-[#E99322] transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap min-w-[150px] justify-center">
                        View Details
                        <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;
