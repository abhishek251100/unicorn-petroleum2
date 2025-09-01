import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function FloatingSidebar({ navigationData }) {
  const location = useLocation();

  const isActive = (itemLink) => {
    return location.pathname === itemLink;
  };

  return (
    <div className="lg:sticky lg:top-8 lg:self-start">
             <div className="bg-white shadow-xl rounded-sm border-2 border-gray-300">
         <div className="space-y-0">
          {navigationData.categories.map((item, index) => (
            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
              <Link
                to={item.link}
                className={`block px-6 py-4 transition-all duration-300 ${
                  isActive(item.link)
                    ? 'bg-[#EDA94E] text-white'
                    : 'text-black hover:bg-[#EDA94E]/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold flex-1" style={{ fontFamily: 'Segoe UI' }}>{item.name}</span>
                  <span className={`font-bold text-lg ml-6 ${isActive(item.link) ? 'text-white' : 'text-black'}`}>
                    {isActive(item.link) ? '⌄' : '>'}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 