import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from './ProductPageLayout';
import { productsData } from './productsData';

export default function ProductsPageIndex() {
  return (
    <ProductPageLayout>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{productsData.hero.title}</h2>
        <p className="text-gray-600">{productsData.hero.subtitle}</p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.categories.map((cat) => (
            <Link key={cat.id} to={cat.link} className="block border rounded-xl p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h4>
              <p className="text-gray-600 mb-2">{cat.description}</p>
              <div className="text-sm text-[#E99322]">View →</div>
            </Link>
          ))}
        </div>
      </section>
    </ProductPageLayout>
  );
}
