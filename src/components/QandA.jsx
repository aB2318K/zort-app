import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const QandA = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const qaData = [
    {
      question: "How do I get started with ZORT?",
      answer: "Simply open the ZORT app and point your camera at any bet slip - no sign up required. Our intuitive interface guides you through the process."
    },
    {
      question: "What types of bet slips can I scan?",
      answer: "Our AI works with both physical and digital bet slips. Just take a photo using your phone's camera and we'll handle the rest."
    },
    {
      question: "How fast is the processing?",
      answer: "Our AI provides instant processing, immediately extracting all bet details including odds, stakes, and potential returns."
    },
    {
      question: "Can I track my betting performance?",
      answer: "Absolutely! View your organized bets and track your performance over time through our interactive dashboard with 85% accuracy rate."
    },
    {
      question: "What makes ZORT different?",
      answer: "With multi-slip scanning capability and over 10,000+ bets tracked, ZORT provides the most comprehensive analytics for serious bettors."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-20" id="qanda">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block bg-green-900/30 text-green-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
          FAQs
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Your Questions <span className="text-green-300">Answered</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Everything you need to know about using ZORT's powerful betting analytics platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {qaData.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-700 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm"
          >
            <motion.button
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              onClick={() => toggleQuestion(index)}
              initial={false}
            >
              <h3 className="text-lg md:text-xl font-medium text-gray-100">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4 text-green-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-gray-300">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">Still have questions?</p>
        <button
          onClick={handleContactClick}
          className="border border-green-300 text-green-300 hover:bg-green-900/30 px-8 py-3 rounded-full font-medium text-lg transition-all"
        >
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default QandA;
