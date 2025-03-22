import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Features from './featues_section';
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
    
      <Navbar />
      <HeroSection/>
      <Features/>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Easy Booking</h3>
              <p className="text-gray-600">Book appointments in just a few clicks.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Verified Doctors</h3>
              <p className="text-gray-600">Choose from a list of verified and experienced doctors.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600">We’re here to help you anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;