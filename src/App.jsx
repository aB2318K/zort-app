import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import ScrollToTop from './ScrollToTop';
import PageCurtain from './components/PageCurtain';

const App = () => {
  const [isCurtainLoaded, setIsCurtainLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCurtainLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PageCurtain />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={isCurtainLoaded ? <HomePage /> : null} />
        <Route path="/contact" element={isCurtainLoaded ?<Contact /> : null} />
      </Routes>
    </Router>
  );
};

export default App;
