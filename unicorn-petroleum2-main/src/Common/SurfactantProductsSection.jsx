import React from "react";

const SurfactantProductsSection = ({ data }) => {
  if (!data || !data.products || data.products.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Surfactant Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-[#E99322] hover:shadow-lg transition-all duration-300 overflow-hidden h-48"
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
                  <div className="w-full h-full px-6 py-4 flex flex-col justify-start">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
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

export default SurfactantProductsSection;
