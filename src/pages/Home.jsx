import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      <HeroSection/>
      <WhyChooseUs/>
      {/* Hero Section */}
     

      {/* Features Section */}


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;