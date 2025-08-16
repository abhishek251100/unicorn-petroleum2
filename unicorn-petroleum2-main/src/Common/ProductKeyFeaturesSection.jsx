import React from "react";

const ProductKeyFeaturesSection = ({ data }) => {
  const { title, features } = data;

  // Calculate how many cards should be in the last row
  const cardsPerRow = 4; // 4 cards per row
  const totalCards = features.length;
  const fullRows = Math.floor(totalCards / cardsPerRow);
  const cardsInLastRow = totalCards % cardsPerRow;
  const isLastRowIncomplete = cardsInLastRow > 0;

  return (
    <section>
      <h3 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">
        {title || "Key Features"}
      </h3>
      
      <div className="space-y-8">
        {/* Full Rows */}
        {Array.from({ length: fullRows }, (_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {features.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow).map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="text-orange-500 mr-3 text-2xl">{feature.icon}</span>
                  {feature.title}
                </h4>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-orange-500 mr-3 text-lg">•</span>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Last Row (if incomplete) - Centered */}
        {isLastRowIncomplete && (
          <div className="flex justify-center">
            <div className={`grid grid-cols-1 lg:grid-cols-${cardsInLastRow} gap-8`}>
              {features.slice(fullRows * cardsPerRow).map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="text-orange-500 mr-3 text-2xl">{feature.icon}</span>
                    {feature.title}
                  </h4>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-orange-500 mr-3 text-lg">•</span>
                        <span className="text-gray-600 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductKeyFeaturesSection;
