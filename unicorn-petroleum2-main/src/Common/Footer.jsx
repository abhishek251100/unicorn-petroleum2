import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { footerData } from "../Data/footerData";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Branding & Socials */}
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-orange-500">{footerData.brand.logo}</h2>
                <p className="text-sm text-gray-600">{footerData.brand.tagline}</p>
              </div>
              <p className="text-gray-600 mb-4">
                {footerData.brand.description}
              </p>
              <div>
                <p className="text-sm text-gray-600 mb-2">{footerData.brand.socialMedia.title}</p>
                <div className="flex space-x-3">
                  {footerData.brand.socialMedia.links.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="text-orange-500 hover:text-orange-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.platform === "LinkedIn" ? (
                        <FaLinkedin className="text-xl" />
                      ) : social.platform === "Facebook" ? (
                        <FaFacebook className="text-xl" />
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">{footerData.quickLinks.title}</h3>
              <ul className="space-y-2">
                {footerData.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">{footerData.contact.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FiPhone className="text-orange-500 mr-3" />
                  <span className="text-gray-600 text-sm">
                    {footerData.contact.phone.primary} | {footerData.contact.phone.secondary}
                  </span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-orange-500 mr-3" />
                  <span className="text-gray-600 text-sm">
                    {footerData.contact.email.primary} | {footerData.contact.email.secondary}
                  </span>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-orange-500 mr-3 mt-1" />
                  <span className="text-gray-600 text-sm">
                    {footerData.contact.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <span className="text-gray-500">Map Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              {footerData.bottomBar.copyright}
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              {footerData.bottomBar.legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-white hover:text-orange-300 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 