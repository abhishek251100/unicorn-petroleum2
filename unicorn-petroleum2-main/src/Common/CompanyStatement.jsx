import React from 'react';

const CompanyStatement = () => {
  return (
    <section className="py-12">
      <div className="w-full">
        {/* Company Name and Subtitle */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unicorn Petroleum Industries Pvt. Ltd.
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-800">
            60+ Years of Excellence, Innovation, and Trust
          </h2>
        </div>

        {/* Company Description Paragraphs */}
        <div className="mb-6 px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Unicorn Petroleum Industries Pvt. Ltd., together with Eastern Petroleum, is a pioneer in manufacturing high-quality raw materials and specialty ingredients for the cosmetic, pharmaceutical, and personal care industries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over five decades of expertise, advanced manufacturing facilities, and a commitment to excellence, we deliver reliable products and seamless procurement solutions to customers across India and worldwide.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default CompanyStatement; 