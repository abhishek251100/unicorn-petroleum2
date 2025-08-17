import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Company Tagline */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Global Ingredients. Indian Expertise. Trusted Worldwide
          </h3>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Branding & Socials */}
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-orange-500">unicorn</h2>
                <p className="text-sm text-gray-600">Innovating always...</p>
              </div>
              <p className="text-gray-600 mb-4">
                Your trusted partner for specialty products and sourcing
                solutions from India.
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
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/applications"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Applications
                  </a>
                </li>
                <li>
                  <a
                    href="/quality"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Quality
                  </a>
                </li>
                <li>
                  <a
                    href="/reach"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Global Reach
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Contact Us
                  </a>
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
                  <FiMapPin className="text-orange-500 mr-3 mt-1" />
                  <span className="text-gray-600 text-sm">
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
            <p className="text-white text-sm">
              Copyright © 2020 Unicorn. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a
                href="/privacy"
                className="text-white hover:text-orange-300 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white hover:text-orange-300 transition-colors text-sm"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 