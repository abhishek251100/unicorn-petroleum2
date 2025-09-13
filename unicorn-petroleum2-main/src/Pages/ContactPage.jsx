import React, { useState } from "react";
import BannerWithNavigation from "../Common/BannerWithNavigation";
import QualityStandardsSection from "../Common/QualityStandardsSection";
import QuoteFormSection from "../Common/QuoteFormSection";

const ContactPage = () => {
  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Contact" }];

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    countryName: "",
    subject: "",
    message: "",
    notRobot: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with your backend or email service here
    // For now, just log the payload
    console.log("Contact form submitted", formData);
    alert("Thank you! We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen">
      <BannerWithNavigation
        title="Get in touch with us"
        subtitle="We're here to assist with your inquiries."
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Contact information - styled per screenshot with border, icons, and map */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">Contact information</h2>
          <div className="border-2 border-blue-200 rounded-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="space-y-6 text-gray-700">
                <div className="flex">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Main Office Address:</p>
                    <p>Unit No. 1 'Riddhi Siddhi', Corporate Park, VN Purav Marg, Chembur, Mumbai, 400071, India.</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Phone Numbers:</p>
                    <p>+91-22-42324121, +91-22-42324122</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Email Addresses:</p>
                    <p>info@unicornpetro.co.in, manan@unicornpetro.co.in</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Working Hours:</p>
                    <p>Monday–Friday, 9 AM – 6 PM IST</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Unicorn map"
                  src="https://www.google.com/maps?q=Corporate%20Park%20VN%20Purav%20Marg%20Chembur%20Mumbai&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form (common component for uniformity) */}
      <QuoteFormSection mode="contact" title="Send us a message" />

      {/* Certifications strip for consistent footer context */}
      <QualityStandardsSection />
    </div>
  );
};

export default ContactPage;
