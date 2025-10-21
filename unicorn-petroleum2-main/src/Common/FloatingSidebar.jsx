import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function FloatingSidebar({ navigationData }) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isActive = (itemLink) => {
    return location.pathname === itemLink;
  };

  const isSubItemActive = (subItems) => {
    return subItems && subItems.some(subItem => location.pathname === subItem.link);
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className={`lg:sticky lg:top-8 lg:self-start transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="bg-white shadow-xl rounded-sm border border-gray-400 animate-fade-in-up">
        <div className="space-y-0">
          {navigationData.categories.map((item, index) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isExpanded = expandedItems[item.id];
            const isItemActive = isActive(item.link) || isSubItemActive(item.subItems);
            
            return (
              <div key={item.id} className="border-b border-gray-400 last:border-b-0">
                <Link
                  to={item.link}
                  className={`block px-6 py-4 transition-all duration-300 ${
                    isItemActive
                      ? 'bg-[#E99322] text-white'
                      : 'text-black hover:bg-[#E99322]/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold flex-1" style={{ fontFamily: 'Segoe UI' }}>
                      {item.name}
                    </span>
                    {hasSubItems ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpanded(item.id);
                        }}
                        className={`font-bold text-lg ml-6 transition-transform duration-200 ${
                          isItemActive ? 'text-white' : 'text-black'
                        } ${isExpanded ? 'rotate-90' : ''}`}
                      >
                        ⌄
                      </button>
                    ) : (
                      <span className={`font-bold text-lg ml-6 ${isItemActive ? 'text-white' : 'text-black'}`}>
                        {isItemActive ? '⌄' : '>'}
                      </span>
                    )}
                  </div>
                </Link>
                
                {/* Sub-items */}
                {hasSubItems && (
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subItem.id}
                        to={subItem.link}
                        className={`block px-8 py-3 text-sm transition-all duration-300 border-l-2 ${
                          isActive(subItem.link)
                            ? 'bg-[#E99322]/20 text-[#E99322] border-[#E99322]'
                            : 'text-gray-600 hover:bg-gray-50 border-transparent hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{subItem.name}</span>
                          <span className={`text-xs ${
                            isActive(subItem.link) ? 'text-[#E99322]' : 'text-gray-400'
                          }`}>
                            {isActive(subItem.link) ? '●' : '○'}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 