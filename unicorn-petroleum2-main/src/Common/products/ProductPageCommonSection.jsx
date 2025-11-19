import React from "react";

const ProductPageCommonSection = ({ data }) => {
  const handleRequestInfo = () => {
    const quoteSection = document.getElementById('quote-form-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {data.title || "Product Title"}
          </h1>
          
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {data.description || "Product description will come from the product's JSON file."}
            </p>
            {data.additionalInfo && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.additionalInfo}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button 
            onClick={handleRequestInfo}
            className="bg-[#E99322] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#E99322]/90 transition-all duration-300 flex items-center gap-2"
          >
            <span>Request Info</span>
            <span className="text-base sm:text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPageCommonSection;
