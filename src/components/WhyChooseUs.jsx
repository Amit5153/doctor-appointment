import React from "react";
import { CalendarCheck, ShieldCheck, Headphones, HeartHandshake, Globe, Clock } from "lucide-react";

const features = [
  {
    title: "Easy Booking",
    description: "Book appointments in just a few clicks.",
    icon: <CalendarCheck size={40} />,
  },
  {
    title: "Verified Doctors",
    description: "Choose from a list of experienced professionals.",
    icon: <ShieldCheck size={40} />,
  },
  {
    title: "24/7 Support",
    description: "We’re here to assist you anytime.",
    icon: <Headphones size={40} />,
  },
  {
    title: "Global Accessibility",
    description: "Access healthcare services from anywhere.",
    icon: <Globe size={40} />,
  },
  {
    title: "Emergency Services",
    description: "Quick assistance for urgent medical needs.",
    icon: <Clock size={40} />,
  },
  {
    title: "Personalized Care",
    description: "Receive customized treatment plans.",
    icon: <HeartHandshake size={40} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 italic">
          Why <span className="text-blue-600">Choose Us?</span>
        </h2>
        <p className="text-lg italic text-gray-600 max-w-2xl mx-auto mb-10">
          Experience seamless appointment booking with top-tier healthcare professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col items-center border border-gray-200"
            >
              <div className="p-4 rounded-full mb-4 bg-blue-500 text-white shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 italic">{feature.title}</h3>
              <p className="text-gray-600 italic text-center mt-2">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-12 text-center">
           <h3 className="text-2xl font-bold mb-4 italic">OUR SERVICES  <span className="text-blue-600">ACROSS THE WORLD</span></h3>
          {/* <div className="flex justify-center space-x-4"></div> */}
         
        </div>

        {/* Stats Section */}
        <div className="mt-12 flex justify-center space-x-8">
          <div>
            <p className="text-2xl font-bold text-yellow-800 dark:text-white">500+</p>
            <p className="text-gray-600 dark:text-gray-400">Doctors</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-800 dark:text-white">10,000+</p>
            <p className="text-gray-600 dark:text-gray-400">Patients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-800 dark:text-white">50,000+</p>
            <p className="text-gray-600 dark:text-gray-400">Appointments</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
