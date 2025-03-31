import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 py-5 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-green-900/30 text-green-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact <span className="text-green-300">Our Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about our platform? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700 flex-shrink-0 text-green-300">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm">zortsupport@test.co.uk</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700 flex-shrink-0 text-green-300">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm">+44 123456789</p>
                <p className="text-gray-300 text-sm">Mon-Fri: 9am-5pm GMT</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700 flex-shrink-0 text-green-300">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm">123 London</p>
                <p className="text-gray-300 text-sm">UK, NE1 234</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-300 hover:bg-green-200 text-gray-900 px-6 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
