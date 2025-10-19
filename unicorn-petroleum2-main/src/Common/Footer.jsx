import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Company Tagline */}
      <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 pb-6 sm:pb-8 md:pb-10 px-4">
            Global Ingredients. Indian Expertise. Trusted Worldwide
          </p>
        </div>

      {/* Main Footer */}
      <footer className="bg-[#F8DEBA]">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Company Branding & Socials */}
            <div>
              <div className="mb-4">
                <Link to="/" className="inline-flex items-center gap-1.5">
                  <img src="/assets/logo 1.png" alt="Unicorn logo" className="h-10 w-auto" />
                  <img src="/assets/logo 2.png" alt="Unicorn logo" className="h-11 w-24 pt-1" />
                </Link>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Your trusted partner for specialty products and sourcing solutions from India
              </p>
              <div>
                <p className="text-sm text-gray-600 mb-2">Follow us on:</p>
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com/company/unicorn-petroleum"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://facebook.com/unicornpetroleum"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="ml-12">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/applications"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quality"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Quality
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reach"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Global Reach
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Feel free to contact us on
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FiPhone className="text-orange-500 mr-3" />
                  <span className="text-gray-600 text-sm">
                    +91 22 4232 4121 | +91 22 4232 4122
                  </span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-orange-500 mr-3" />
                  <span className="text-gray-600 text-sm">
                    manan@unicornpetro.co.in | info@unicornpetro.co.in
                  </span>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Unit No. 1 'Ridhi Sidhi', Corporate Park, CST Road, Che
                    Mumbai 400071, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-xs sm:text-sm text-center md:text-left">
              Copyright © 2020 Unicorn. All rights reserved.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-2 md:mt-0">
              <Link
                to="/privacy"
                className="text-white hover:text-orange-300 transition-colors text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white hover:text-orange-300 transition-colors text-xs sm:text-sm"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 