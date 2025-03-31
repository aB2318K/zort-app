import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import ScrollToTop from './ScrollToTop';
import PageCurtain from './components/PageCurtain';

const App = () => {
  return (
    <Router>
      <PageCurtain />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;