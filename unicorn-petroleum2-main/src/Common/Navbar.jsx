import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside any dropdown
      const dropdowns = document.querySelectorAll('.dropdown-container');
      let clickedOutside = true;
      
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
          clickedOutside = false;
        }
      });
      
      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const menuItems = [
    {
      name: "About",
      link: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", link: "/about" },
        { name: "Mission & Vision", link: "/about" },
        { name: "Leadership", link: "/about" }
      ]
    },
    {
      name: "Products",
      link: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Petroleum Jelly", link: "/products/petroleum-jelly" },
        { name: "White Mineral Oils", link: "/products" },
        { name: "Microcrystalline Wax", link: "/products" },
        { name: "Paraffin Wax", link: "/products" },
        { name: "Natural Beeswax", link: "/products" },
        { name: "Emulsifying Wax", link: "/products" },
        { name: "D-Panthenol", link: "/products" },
        { name: "Preservatives", link: "/products" },
        { name: "Surfactants", link: "/products" },
        { name: "UV Filters", link: "/products" }
      ]
    },
    {
      name: "Applications",
      link: "/applications",
      hasDropdown: true,
      dropdownItems: [
        { name: "Pharmaceutical", link: "/applications" },
        { name: "Cosmetic", link: "/applications" },
        { name: "Personal Care", link: "/applications" },
        { name: "Industrial", link: "/applications" }
      ]
    },
    { name: "Quality", link: "/quality", hasDropdown: false },
    { name: "Reach", link: "/reach", hasDropdown: false },
    { name: "Contact", link: "/contact", hasDropdown: false }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#F5CD99] py-2 px-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-black font-bold">Contact us on :</span>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-black" />
              <span className="text-black">+91 22 4232 4121</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-black" />
              <span className="text-black">info@unicornpetro.co.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#c68127]/45 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-[#F5CD99]/20 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-orange-500">unicorn</h1>
                <p className="text-xs text-gray-600">Innovating always...</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative dropdown-container">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center space-x-1 text-black transition-colors relative group"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <FiChevronDown className={`text-sm transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md py-2 z-50 border border-gray-300">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.link}
                              className="block px-6 py-4 text-base font-semibold text-black hover:bg-[#EDA94E]/10 border-b border-gray-200 last:border-b-0 flex items-center justify-between"
                              onClick={() => {
                                setActiveDropdown(null);
                                // Scroll to top when navigating
                                window.scrollTo(0, 0);
                              }}
                            >
                              <span className="flex-1">{dropdownItem.name}</span>
                              <span className="text-black font-bold ml-6">&gt;</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-black transition-colors relative group"
                      onClick={() => {
                        // Scroll to top when navigating
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon and WhatsApp Button */}
            <div className="hidden md:flex items-center space-x-4">
              <FiSearch className="text-black text-xl cursor-pointer hover:text-orange-500 transition-colors" />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition-colors">
                WhatsApp Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black">
                {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              {menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  <Link
                    to={item.link}
                    className="block text-black hover:text-orange-500"
                    onClick={() => {
                      setIsOpen(false);
                      // Scroll to top when navigating
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
