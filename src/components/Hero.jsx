import React from 'react';
import heroImage from "../assets/heroimage.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-5 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Text content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="max-w-lg text-center md:text-left">
            <div className="mb-6">
              <span className="inline-block bg-green-900/30 text-green-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                AI-Powered Analytics
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevate your betting strategy with <span className="text-green-300">data-driven</span> insights
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our advanced AI analyzes thousands of data points to give you real-time predictions, 
                trend analysis, and personalized recommendations to maximize your success rate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <button className="bg-green-300 hover:bg-green-200 text-gray-900 px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Get Started Now
              </button>
              <button className="border border-green-300 text-green-300 hover:bg-green-900/30 px-8 py-3 rounded-full font-medium text-lg transition-all">
                See How It Works
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>Real-time analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>95% prediction accuracy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-green-900/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-green-900/20 rounded-full blur-xl"></div>
            <img 
              src={heroImage}
              alt="AI Betting Analytics Dashboard"
              className="relative w-full h-auto object-contain rounded-xl shadow-2xl transition-all"
            />          
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2 md:p-3 shadow-lg">
              <div className="text-green-300 font-bold text-lg md:text-xl">+89%</div>
              <div className="text-xs text-gray-300">Win rate</div>
            </div>
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2 md:p-3 shadow-lg">
              <div className="text-green-300 font-bold text-lg md:text-xl">24/7</div>
              <div className="text-xs text-gray-300">Live updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;