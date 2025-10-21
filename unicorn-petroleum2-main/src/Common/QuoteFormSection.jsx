import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function QuoteFormSection({ mode = "quote", title }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    countryName: "",
    gradeQuality: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {title || (mode === "contact" ? "Send us a message" : "Request a Quote or Sample")}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Country Name */}
            <div>
              <input
                type="text"
                name="countryName"
                placeholder="Enter Country Name"
                value={formData.countryName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Grade/Quality or Subject depending on mode */}
            {mode === "contact" ? (
              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select Subject</option>
                  <option>General enquiry</option>
                  <option>Sales</option>
                  <option>Support</option>
                </select>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  name="gradeQuality"
                  placeholder="Enter Grade/Quality Needed"
                  value={formData.gradeQuality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            )}
          </div>

          {/* Message */}
          <div className="mb-8">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#E99322] text-white px-8 py-4 rounded-lg hover:bg-[#E99322]/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
            >
              {mode === "contact" ? "Send Message" : "Submit Enquiry"}
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
} 