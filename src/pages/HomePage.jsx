import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features/Features';
import FeatureList from '../components/FeatureList';
import QandA from '../components/QandA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-920 text-white font-sans">
        <Navbar />
        <Hero />
        <Features />
        <FeatureList />
        <Testimonials />
        <QandA />
        <Footer />
    </div>
  );
};

export default HomePage;