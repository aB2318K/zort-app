import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="border-t border-gray-800 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-5 py-12 sm:py-16">
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1 space-y-4"
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-300">ZORT</span>
              <span className="ml-2 text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                AI ANALYTICS
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced betting intelligence powered by machine learning.
            </p>
            <div className="flex space-x-4">
              {[FiTwitter, FiInstagram, FiLinkedin, FiGithub].map((Icon, index) => (
                <motion.button
                  key={index}
                  onClick={handleClick}
                  whileHover={{ y: -3, color: '#6EE7B7' }}
                  className="text-gray-400 hover:text-green-300 transition-colors"
                  aria-label={`Social media link ${index}`}
                >
                  <Icon size={18} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-gray-200 font-medium text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Testimonials'].map((item, index) => (
                <li key={index}>
                  <motion.button 
                    onClick={handleClick}
                    whileHover={{ x: 3, color: '#6EE7B7' }}
                    className="text-gray-400 hover:text-green-300 text-xs sm:text-sm transition-colors flex items-start"
                  >
                    <span className="w-1 h-1 bg-green-300 rounded-full mt-2 mr-2"></span>
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-gray-200 font-medium text-base sm:text-lg">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API Status', 'Blog'].map((item, index) => (
                <li key={index}>
                  <motion.button 
                    onClick={handleClick}
                    whileHover={{ x: 3, color: '#6EE7B7' }}
                    className="text-gray-400 hover:text-green-300 text-xs sm:text-sm transition-colors flex items-start"
                  >
                    <span className="w-1 h-1 bg-green-300 rounded-full mt-2 mr-2"></span>
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1 space-y-4"
          >
            <h3 className="text-gray-200 font-medium text-base sm:text-lg">Contact</h3>
            <div className="flex items-start">
              <FiMail className="text-green-300 mt-0.5 mr-3 flex-shrink-0" size={16} />
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Email us</p>
                <button 
                  onClick={handleClick}
                  className="text-gray-300 hover:text-green-300 text-xs sm:text-sm transition-colors break-all"
                >
                  zortsupport@test.co.uk
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-b border-gray-800 my-8 sm:my-12"
        />

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-xs sm:text-sm text-center sm:text-left"
          >
            © {currentYear} ZORT. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-6"
          >
            {['Privacy Policy', 'Terms', 'Cookies'].map((item, index) => (
              <button 
                key={index} 
                onClick={handleClick}
                className="text-gray-500 hover:text-green-300 text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
