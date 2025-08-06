import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiSearch, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { headerData } from '../Data/headerData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="w-full">
      {/* Contact Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Contact Info */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <FiPhone className="text-green-400" />
                <span>Contact us on:</span>
                <span className="font-medium">{headerData.contactBar.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="text-green-400" />
                <span>{headerData.contactBar.email}</span>
              </div>
            </div>

            {/* Right: Online Status & Search */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs">Online</span>
              </div>
              <button className="text-gray-300 hover:text-white">
                <FiSearch size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-orange-500">
                {headerData.navigation.logo.text}
              </Link>
              <div className="ml-2 text-sm text-gray-600">
                {headerData.navigation.logo.tagline}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {headerData.navigation.menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <FiChevronDown size={14} />}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-2">
                        <Link to={item.link} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          {item.name} Details
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="hidden md:block">
              <a
                href={headerData.navigation.whatsappButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp size={16} />
                <span>{headerData.navigation.whatsappButton.text}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {headerData.navigation.menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <a
                    href={headerData.navigation.whatsappButton.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaWhatsapp size={16} />
                    <span>{headerData.navigation.whatsappButton.text}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header; 