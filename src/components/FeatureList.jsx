import React from "react";
import { FaRocket, FaChartLine, FaBrain, FaLock } from "react-icons/fa";

const featureItems = [
  {
    title: "Quick Bet Analysis",
    description:
      "Our proprietary AI algorithms process thousands of data points in milliseconds to evaluate betting opportunities with 95% accuracy. Get instant assessments of value bets and potential risks.",
    icon: <FaRocket className="text-green-400 text-xl" />
  },
  {
    title: "Real-Time Tracking",
    description:
      "Monitor your betting performance with live dashboards that update instantly. Track ROI, win rates, and bankroll changes across all your active wagers with millisecond precision.",
    icon: <FaChartLine className="text-green-400 text-xl" />
  },
  {
    title: "Smart AI Insights",
    description:
      "Our machine learning models analyze your historical performance to identify patterns and provide personalized recommendations to optimize your betting strategy and maximize returns.",
    icon: <FaBrain className="text-green-400 text-xl" />
  },
  {
    title: "Secure & Private",
    description:
      "All data is protected with 256-bit AES encryption, the same standard used by financial institutions. We never share your betting activity or personal information with third parties.",
    icon: <FaLock className="text-green-400 text-xl" />
  }
];

const FeatureList = () => {
  return (
    <section className="relative py-14 md:py-18" id="features">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-green-900/20 text-green-400 px-4 py-2 rounded-full text-xs font-semibold tracking-wider mb-4">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Unock Your <span className="text-green-300">Betting Potentials</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional-grade tools designed to give you the analytical edge in sports betting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              style={{ minHeight: '250px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-700 flex-shrink-0 group-hover:bg-green-400/10 group-hover:border-green-400/30 transition-colors w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
