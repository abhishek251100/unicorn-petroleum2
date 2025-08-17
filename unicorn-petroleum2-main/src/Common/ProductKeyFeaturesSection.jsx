import React from "react";

const ProductKeyFeaturesSection = ({ data }) => {
  const { title, features } = data;

  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-8 tracking-tight text-center">
        {title || "Key Features"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 max-w-sm mx-auto w-full"
          >
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-50 rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-xl">{feature.icon}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h4>
            </div>

            <ul className="space-y-2 pl-4">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-orange-500 mr-2 text-sm">•</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductKeyFeaturesSection;
