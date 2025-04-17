import { motion } from 'framer-motion';

const PhoneMockup = ({ children, isActive = true }) => {
  return (
    <motion.div 
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.7
      }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="relative w-[250px] h-[500px] sm:w-[270px] sm:h-[540px] md:w-[300px] md:h-[600px] mx-auto"
    >
      {/* Outer frame */}
      <div className="absolute inset-0 bg-gray-700 rounded-[50px] border-8 border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Inner screen */}
        <div className="absolute inset-[8px] rounded-[42px] overflow-hidden bg-black shadow-inner">
          {children}
        </div>
        {/* Top notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl shadow-md" />
        {/* Side buttons */}
        <div className="absolute right-[-2px] top-16 h-20 w-[4px] bg-gray-700 rounded-l-md shadow-sm" />
        <div className="absolute right-[-2px] top-36 h-14 w-[4px] bg-gray-700 rounded-l-md shadow-sm" />
        {/* Front camera */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-700 rounded-full" />
        </div>
        {/* Bottom speaker */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-700 rounded-full opacity-50" />
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
