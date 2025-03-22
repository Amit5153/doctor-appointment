import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex-grow flex items-center justify-center relative overflow-hidden bg-blue-50">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="text-center text-white relative z-10 p-6">
        {/* Doctor Illustration */}
        <img
          src="/images/9432602.jpg"
          alt="Doctor Illustration"
          className="w-48 mx-auto mb-6 rounded-full"
         loading="lazy"
        />

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Book Your Doctor Appointment Online</h1>

        {/* Subheading */}
        <p className="text-lg mb-8">
          Fast, reliable, and easy-to-use platform to book appointments with the best doctors.
        </p>

        {/* Search Bar */}
 

        {/* Call-to-Action Button */}
        <a
          href="/doctor-availability"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors animate-pulse"
        >
          Find a Doctor
        </a>

       

        {/* Testimonial Carousel */}
        <div className="mt-12 text-center">
  <h3 className="text-2xl font-extrabold text-zinc-300 dark:text-white mb-6 italic">
    What Our Patients Say
  </h3>
  <div className="flex flex-wrap justify-center gap-6">
    {/* Testimonial 1 */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 w-72">
      <p className="text-gray-700 dark:text-gray-300 italic">
        "Great service! Highly recommended."
      </p>
      <div className="mt-4 flex items-center space-x-3">
        <img
          src="/images/john-doe.jpg"
          alt="John Doe"
          className="w-11 h-12 rounded-full shadow-md"
        />
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          - lucy aana
        </p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 w-72">
      <p className="text-gray-700 dark:text-gray-300 italic">
        "Easy to use and very reliable."
      </p>
      <div className="mt-4 flex items-center space-x-3">
        <img
          src="/images/jane-smith.jpg"
          alt="Jane Smith"
          className="w-12 h-12 rounded-full shadow-md"
        />
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          - Jane Smith
        </p>
      </div>
    </div>
  </div>
</div>


 

      </div>
    </section>
  );
};

export default HeroSection;