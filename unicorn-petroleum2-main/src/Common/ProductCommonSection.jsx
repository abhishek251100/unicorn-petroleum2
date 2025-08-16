import React from "react";

const ProductPageCommonSection = ({ data }) => {
  const handleRequestInfo = () => {
    // Scroll to the quote form section (common on all product pages)
    const quoteSection = document.getElementById('quote-form-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadBrochure = () => {
    // Download the specific product brochure (different for each product)
    if (data.brochureUrl) {
      window.open(data.brochureUrl, '_blank');
    }
  };

  return (
    <section className="py-12 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
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

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleRequestInfo}
            className="bg-[#EDA94E] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#EDA94E]/90 transition-colors flex items-center space-x-2"
          >
            <span>Request Info</span>
            <span className="text-xl">→</span>
          </button>
          
          <button 
            onClick={handleDownloadBrochure}
            className="bg-white text-black border-2 border-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
          >
            <span>Download Brochure</span>
            <span className="text-xl">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPageCommonSection;
