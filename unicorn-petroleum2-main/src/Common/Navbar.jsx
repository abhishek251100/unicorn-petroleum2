import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdowns = document.querySelectorAll('.dropdown-container');
      let clickedOutside = true;
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) clickedOutside = false;
      });
      if (clickedOutside) setActiveDropdown(null);
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileDropdowns({});
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { name: "About", link: "/about", hasDropdown: false },
    {
      name: "Products",
      link: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Petroleum Jelly", link: "/products/petroleum-jelly" },
        { name: "White Mineral Oils", link: "/products/white-mineral-oils" },
        { name: "Microcrystalline Wax", link: "/products/microcrystalline-wax" },
        { name: "Paraffin Wax", link: "/products/paraffin-wax" },
        { name: "Natural Beeswax", link: "/products/natural-beeswax" },
        { name: "Emulsifying Wax", link: "/products/emulsifying-wax" },
        { name: "D-Panthenol", link: "/products/d-panthenol" },
        { name: "Preservatives", link: "/products/preservatives" },
        { name: "Surfactants", link: "/products/surfactants" },
        { name: "UV Filters", link: "/products/uv-filters" }
      ]
    },
    {
      name: "Applications",
      link: "/applications/pharmaceutical",
      hasDropdown: true,
      dropdownItems: [
        { name: "Pharmaceutical", link: "/applications/pharmaceutical" },
        { name: "Cosmetics", link: "/applications/cosmetics" },
        { name: "Bulk Chemical", link: "/applications/bulk-chemical" },
        { name: "Personal Care", link: "/applications/personal-care" },
        { name: "Lubricants", link: "/applications/lubricants" },
        { name: "Agrochemical", link: "/applications/agrochemical" },
        { name: "Textile", link: "/applications/textile" }
      ]
    },
    { name: "Quality", link: "/quality", hasDropdown: false },
    { name: "Reach", link: "/reach", hasDropdown: false },
    { name: "Contact", link: "/contact", hasDropdown: false }
  ];

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? 'shadow-2xl' : 'shadow-none'}`}>
      {/* Top Contact Bar */}
      <div className="bg-[#F5CD99] py-2 px-4">
        <div className="max-w-7xl mx-auto px-4 text-xs sm:text-sm">
          <div className="w-full flex items-center justify-between sm:justify-end sm:gap-4">
            <span className="text-black font-bold hidden sm:inline">Contact us on :</span>
            <div className="flex items-center space-x-2"> 
              <FiPhone className="text-black text-sm" />
              <span className="text-black text-xs sm:text-sm">+91 22 4232 4121</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-black text-sm" />
              <h3 className="text-black text-xs sm:text-sm">info@unicornpetro.co.in</h3>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-transparent backdrop-blur-xl py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <img src="/assets/logo 1.png" alt="Unicorn logo" className="h-9 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative dropdown-container">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center space-x-1 text-gray-800 transition-colors relative group"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <FiChevronDown className={`text-sm transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md py-2 z-50 border border-gray-300">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.link}
                              className="flex px-6 py-4 text-base font-semibold text-black hover:bg-[#EDA94E]/10 border-b border-gray-200 last:border-b-0 items-center justify-between"
                              onClick={() => {
                                setActiveDropdown(null);
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
                      className="text-gray-800 transition-colors relative group"
                      onClick={() => { window.scrollTo(0, 0); }}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon and WhatsApp Button */}
            <div className="hidden md:flex items-center space-x-4">
              <FiSearch className="text-gray-800 text-xl cursor-pointer hover:text-[#E99322] transition-colors" />
              <button className="bg-[#E99322] text-white px-4 py-2 rounded-full text-sm hover:bg-[#E99322]/90 transition-colors">
                WhatsApp Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-300/30 bg-black/10 backdrop-blur-sm rounded-b-lg">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-300/30 last:border-b-0">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(index)}
                        className="w-full text-left px-4 py-3 text-gray-800 hover:text-[#E99322]/80 flex items-center justify-between"
                      >
                        <span className="font-semibold">{item.name}</span>
                        <FiChevronDown className={`text-sm transition-transform ${mobileDropdowns[index] ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdowns[index] && (
                        <div className="bg-black/20 backdrop-blur-sm border-t border-gray-300/30">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.link}
                              className="block px-8 py-3 text-sm text-gray-800 hover:text-[#E99322]/80 hover:bg-black/20 border-b border-gray-300/30 last:border-b-0"
                              onClick={() => { setIsOpen(false); setMobileDropdowns({}); window.scrollTo(0, 0); }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="block px-4 py-3 text-gray-800 hover:text-[#E99322]/80 font-semibold"
                      onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="px-4 py-3 border-t border-gray-300/30 mt-4">
                <button className="w-full bg-[#E99322] text-white px-4 py-2 rounded-full text-sm hover:bg-[#E99322]/90 transition-colors flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-lg" />
                  WhatsApp Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
