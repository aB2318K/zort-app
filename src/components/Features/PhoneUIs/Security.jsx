import { motion } from 'framer-motion';

const Security = () => {
  return (
    <div className="h-full w-full bg-gray-950 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1)_0%,transparent_70%)]"></div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          background: [
            'conic-gradient(from 180deg, rgba(74,222,128,0.2) 0%, rgba(239,68,68,0.2) 100%)',
            'conic-gradient(from 180deg, rgba(74,222,128,0.3) 0%, rgba(239,68,68,0.3) 100%)',
            'conic-gradient(from 180deg, rgba(74,222,128,0.2) 0%, rgba(239,68,68,0.2) 100%)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="relative w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700"
      >
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="absolute"
          animate={{
            rotate: [0, 5, -5, 0],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path
            d="M30 2L2 15v30l28 13 28-13V15L30 2z"
            fill="none"
            stroke="url(#shieldGradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.div
          animate={{
            y: [0, -2, 0],
            textShadow: [
              '0 0 0px rgba(74,222,128,0)',
              '0 0 8px rgba(74,222,128,0.5)',
              '0 0 0px rgba(74,222,128,0)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              stroke="url(#lockGradient)"
            />
            <defs>
              <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-6"
      >
        <h3 className="text-white font-bold text-lg mb-1">
          <span className="text-green-400">Quantum</span>{' '}
          <span className="text-red-400">Encryption</span>
        </h3>
        <p className="text-gray-400 text-sm">Military-grade protection</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {[
          {
            label: "256-bit AES",
            color: "from-green-400/20 to-green-400/10",
            border: "border-green-400/30"
          },
          {
            label: "Zero Trust",
            color: "from-red-400/20 to-red-400/10",
            border: "border-red-400/30"
          }
        ].map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`bg-gradient-to-b ${badge.color} ${badge.border} border rounded-lg p-2 text-center backdrop-blur-sm`}
          >
            <p className="text-white text-xs font-mono tracking-tight">
              {badge.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
        <p className="text-xs text-gray-400">ACTIVE PROTECTION</p>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0.1, 0],
          scale: [1, 1.5, 2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)"
        }}
      />
    </div>
  );
};

export default Security;