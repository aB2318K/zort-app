import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const navItems = [
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQs", id: "qanda" },
    { name: "Contact", path: "/contact" } 
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          if (window.innerWidth < 768) setIsOpen(false);
          setVisible(false);
        } else {
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
  
    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleNavClick = (item) => {
    if (item.path) {
      
      navigate(item.path);
    } else {
      
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ 
          type: "tween",
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.4
        }}
        className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50"
        style={{ height: '4rem' }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center cursor-pointer"
              >
                <span className="text-2xl font-bold text-green-300 mr-2">ZORT</span>
                <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                  AI ANALYTICS
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 h-full">
              {navItems.map((item) => (
                <div key={item.name || item.id} onClick={() => handleNavClick(item)}>
                  <motion.div
                    whileHover={{ y: -2, color: "#6EE7B7" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-green-300 cursor-pointer transition-colors flex items-center h-full"
                  >
                    {item.name}
                  </motion.div>
                </div>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(110, 231, 183, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-300 hover:bg-green-200 text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg transition-all"
              >
                Sign In
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX size={24} className="text-green-300" />
              ) : (
                <FiMenu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden fixed w-full z-40 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
            style={{ top: '4rem' }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name || item.id} onClick={() => handleNavClick(item)}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="block px-4 py-3 text-gray-300 hover:text-green-300 rounded-lg cursor-pointer"
                  >
                    {item.name}
                  </motion.div>
                </div>
              ))}
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-300 text-gray-900 px-6 py-3 rounded-full font-medium shadow-lg"
              >
                Sign In
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-0"></div>
    </>
  );
};

export default Navbar;