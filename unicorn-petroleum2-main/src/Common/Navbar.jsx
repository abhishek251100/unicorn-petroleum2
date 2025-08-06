import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { headerData } from "../Data/headerData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Contact Bar */}
      <div className="bg-orange-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Contact us on :</span>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-orange-500" />
              <span className="text-gray-700">{headerData.contactBar.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-orange-500" />
              <span className="text-gray-700">{headerData.contactBar.email}</span>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors">
            WhatsApp Us
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-orange-500">{headerData.navigation.logo.text}</h1>
                <p className="text-xs text-gray-600">{headerData.navigation.logo.tagline}</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {headerData.navigation.menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        <span>{item.name}</span>
                        <FiChevronDown className={`text-sm transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
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
                      className="text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon */}
            <div className="hidden md:flex items-center">
              <FiSearch className="text-gray-500 text-xl cursor-pointer hover:text-orange-500 transition-colors" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              {headerData.navigation.menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  <Link
                    to={item.link}
                    className="block text-gray-700 hover:text-orange-500"
                    onClick={() => setIsOpen(false)}
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