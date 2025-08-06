import React from "react";
import FloatingSidebar from "../../Common/FloatingSidebar";
import { productsNavigationData } from "./productsNavigationData";

export default function ProductPageLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Banner - Full Width */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(251, 146, 60, 0.9) 0%, rgba(249, 115, 22, 0.9) 50%, rgba(245, 101, 101, 0.9) 100%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Petroleum Jelly
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Purity for Every Application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                Request Info →
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg">
                Download Brochure ↓
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumbs - Positioned at top-left of banner */}
        <div className="absolute top-6 left-6 z-20">
          <nav className="text-white text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="hover:text-orange-300 transition-colors">Home</a></li>
              <li>/</li>
              <li><a href="/products" className="hover:text-orange-300 transition-colors">Products</a></li>
              <li>/</li>
              <li className="text-orange-300">Petroleum Jelly</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Area - After Banner */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {children}
      </div>

      {/* Mobile Navigation - Bottom right floating button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
} 