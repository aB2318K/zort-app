import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageCurtain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 2800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={`curtain-${location.key}`}
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          exit={{ y: '-100%' }}
          transition={{
            delay: 1.5,
            duration: 1.3,
            ease: [0.12, 0.23, 0.06, 0.99]
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 to-gray-950 flex flex-col items-center justify-center"
        >

          <motion.div 
            className="absolute bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              delay: 0,
              duration: 2.3,
              ease: "linear"
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.4,
              duration: 0.8,
              ease: [0.22, 0.61, 0.36, 1]
            }}
            className="relative"
          >
            <div className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
              ZORT
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageCurtain;