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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email content
      const emailContent = `
New ${mode === "contact" ? "Contact" : "Quote"} Request from Unicorn Petroleum Website

Contact Details:
- Name: ${formData.fullName}
- Company: ${formData.companyName || 'Not provided'}
- Email: ${formData.email}
- Mobile: ${formData.mobileNumber || 'Not provided'}
- Country: ${formData.countryName || 'Not provided'}
${mode === "quote" ? `- Grade/Quality: ${formData.gradeQuality || 'Not specified'}` : ''}
- Subject: ${formData.subject || 'Not provided'}

Message:
${formData.message}

---
This email was sent from the Unicorn Petroleum website contact form.
Sender's email: ${formData.email}
Timestamp: ${new Date().toLocaleString()}
      `;

      // For production, you would integrate with an email service like:
      // - EmailJS
      // - Formspree
      // - Netlify Forms
      // - Custom backend API
      
      // For now, we'll simulate the email sending process
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // In production, replace this with actual email service integration
      console.log("Email would be sent to:", {
        to: "info@unicornpetro.co.in, manan@unicornpetro.co.in",
        from: formData.email,
        subject: `${mode === "contact" ? "Contact" : "Quote"} Request from ${formData.fullName}`,
        content: emailContent
      });

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        mobileNumber: "",
        countryName: "",
        gradeQuality: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {title || (mode === "contact" ? "Send us a message" : "Request a Quote or Sample")}
          </h2>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            <p className="font-semibold">Thank you! Your message has been sent successfully.</p>
            <p className="text-sm">We'll get back to you within 24 hours.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            <p className="font-semibold">Sorry, there was an error sending your message.</p>
            <p className="text-sm">Please try again or contact us directly.</p>
          </div>
        )}

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                  disabled={isSubmitting}
                >
                  <option value="">Select Subject</option>
                  <option value="General enquiry">General enquiry</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Quality inquiry">Quality inquiry</option>
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
                  disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center mx-auto ${
                isSubmitting 
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-[#E99322] text-white hover:bg-[#E99322]/90'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  {mode === "contact" ? "Send Message" : "Submit Enquiry"}
                  <FiArrowRight className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}