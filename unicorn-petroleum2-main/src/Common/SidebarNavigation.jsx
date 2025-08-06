import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const SidebarNavigation = ({ navigationData, title = "Products" }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const location = useLocation();

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (item) => {
    return location.pathname === item.link || 
           (item.subItems && item.subItems.some(sub => location.pathname === sub.link));
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      
      <nav className="space-y-1">
        {navigationData.categories.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between">
              <Link
                to={item.link}
                className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(item)
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
              
              {item.hasSubItems && (
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  {expandedItems.includes(item.id) ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
            
            {/* Sub-items */}
            {item.hasSubItems && expandedItems.includes(item.id) && (
              <div className="ml-4 mt-1 space-y-1">
                {item.subItems.map((subItem, index) => (
                  <Link
                    key={index}
                    to={subItem.link}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      location.pathname === subItem.link
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNavigation; 