import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const testimonials = [
    {
      quote: "ZORT transformed my betting strategy. The AI insights helped me increase my win rate by 62% in just three months. The slip scanning is flawless!",
      name: "Marcus T.",
      role: "Professional Sports Bettor",
      stats: "89% accuracy verified"
    },
    {
      quote: "As a data scientist, I'm blown away by ZORT's analytics. The real-time predictions are scarily accurate. This is the edge I've been searching for.",
      name: "Dr. Sarah K.",
      role: "Data Analyst",
      stats: "10,000+ bets tracked"
    },
    {
      quote: "The multi-slip scanning saves me hours each week. My betting portfolio management went from chaotic to crystal clear overnight with ZORT's dashboard.",
      name: "Jamal R.",
      role: "Hedge Fund Manager",
      stats: "72% ROI improvement"
    }
  ];

  const handleSwipe = (event, info) => {
    if (info.offset.x > 50) {
      prevTestimonial();
    } else if (info.offset.x < -50) {
      nextTestimonial();
    }
  };

  const nextTestimonial = async () => {
    await controls.start({ x: -50, opacity: 0 });
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    controls.set({ x: 50, opacity: 0 });
    controls.start({ x: 0, opacity: 1 });
  };

  const prevTestimonial = async () => {
    await controls.start({ x: 50, opacity: 0 });
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    controls.set({ x: -50, opacity: 0 });
    controls.start({ x: 0, opacity: 1 });
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20" id="testimonials">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-green-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-900/15 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-green-900/30 text-green-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Trusted by Professionals
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-green-300">Users Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from bettors who've transformed their results.
          </p>
        </div>

        {/* Swipeable Testimonial */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ x: 0, opacity: 1 }}
            animate={controls}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl touch-pan-y select-none"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <svg className="w-10 h-10 mb-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-100 mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center text-green-300 font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 w-full">
                  <div className="text-green-300 text-3xl font-bold mb-2">
                    {testimonials[currentIndex].stats.split(' ')[0]}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">
                    {testimonials[currentIndex].stats.split(' ').slice(1).join(' ')}
                  </div>
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="text-xs text-gray-400 ml-2">Verified User</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-600 text-gray-300 hover:border-green-300 hover:text-green-300 transition-all"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-green-300 w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-600 text-gray-300 hover:border-green-300 hover:text-green-300 transition-all"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {['10K+', '95%', '24/7', '1.2K'].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center"
            >
              <div className="text-green-300 text-2xl md:text-3xl font-bold">{stat}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wider">
                {index === 0
                  ? 'Bets Analyzed'
                  : index === 1
                  ? 'Accuracy Rate'
                  : index === 2
                  ? 'Support'
                  : 'Active Users'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
