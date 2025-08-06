import React from 'react';

const CompanyStatement = ({ text }) => {
  return (
    <section className="py-12 px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {text}
        </h2>
      </div>
    </section>
  );
};

export default CompanyStatement; 