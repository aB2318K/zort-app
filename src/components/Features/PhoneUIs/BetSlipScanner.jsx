import { motion } from 'framer-motion';

const BetSlipScanner = () => {
  return (
    <div className="h-full w-full bg-gray-950 flex flex-col p-5 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-white">
          <span className="text-green-400">AI</span> <span className="text-red-400">Scanner</span>
        </h2>
        <div className="text-xs text-green-400 bg-gray-800 px-2 py-1 rounded flex items-center">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-1 animate-pulse"></span>
          LIVE
        </div>
      </div>

      {/* Main Card */}
      <div className="flex-1 bg-gray-900 rounded-xl p-5 flex flex-col">
        {/* Match Info */}
        <div className="flex justify-between items-center group">
          <div>
            <p className="text-gray-400 text-sm mb-1">Premier League</p>
            <h3 className="text-white text-xl font-medium">
              LIV <span className="text-gray-500">vs</span> ARS
            </h3>
          </div>
          <div className="bg-gray-800 px-3 py-2 rounded-lg group-hover:bg-gradient-to-r group-hover:from-green-400/20 group-hover:to-red-400/20 transition-colors">
            <p className="text-green-400 font-bold group-hover:text-red-400 transition-colors">1.85</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-green-400/20 via-gray-700 to-red-400/20" />

        {/* Bet Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-400 text-sm">Stake</p>
            <p className="text-white">$50.00</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">To Win</p>
            <p className="text-white">$92.50</p>
          </div>
        </div>

        {/* Scanning Animation */}
        <div className="mt-auto">
          <div className="relative h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear'
              }}
              className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-green-400 to-red-400"
            />
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-red-400 rounded-full animate-pulse" />
            <p className="text-gray-400 text-sm">
              <span className="text-green-400">Analyzing</span> <span className="text-red-400">patterns</span>
            </p>
          </div>
        </div>
      </div>

      {/* Accuracy Indicator */}
      <div className="mt-6 flex justify-center">
        <div className="bg-gray-800 px-4 py-2 rounded-full border border-green-400/20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400/0 via-red-400 to-green-400/0"></div>
          <p className="text-white text-sm">
            <span className="text-green-400 font-medium">95%</span> <span className="text-red-400">/</span> Accuracy
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetSlipScanner;
