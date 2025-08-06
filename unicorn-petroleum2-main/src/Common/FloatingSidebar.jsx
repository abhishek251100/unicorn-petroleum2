import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function FloatingSidebar({ navigationData }) {
  const [expandedItems, setExpandedItems] = useState([]);
  const location = useLocation();

  const toggleItem = (itemId) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (itemLink) => {
    return location.pathname === itemLink;
  };

  return (
    <div className="sticky top-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Products</h3>
        <div className="space-y-2">
          {navigationData.categories.map((item) => (
            <div key={item.id}>
              {item.hasSubItems ? (
                <div>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left ${
                      isActive(item.link) 
                        ? 'bg-orange-500 text-white shadow-lg' 
                        : 'text-gray-700 hover:bg-orange-50 hover:shadow-md'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <FiChevronDown className={`text-sm transition-transform duration-300 ${
                      expandedItems.includes(item.id) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {expandedItems.includes(item.id) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.link}
                          className={`block p-3 rounded-lg text-sm transition-all duration-300 ${
                            isActive(subItem.link)
                              ? 'bg-orange-500 text-white shadow-md'
                              : 'text-gray-600 hover:bg-orange-50 hover:shadow-sm'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={`block p-3 rounded-xl transition-all duration-300 ${
                    isActive(item.link)
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-orange-50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    {isActive(item.link) ? (
                      <FiChevronRight className="text-sm" />
                    ) : (
                      <FiChevronDown className="text-sm" />
                    )}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 