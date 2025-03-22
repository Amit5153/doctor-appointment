import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-blue-600 text-2xl font-bold italic">
          Doctor Booking
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 transition font-semibold text-lg font-mono"
            >
              {link.label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 transition font-semibold text-lg font-mono"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex justify-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Navigation Links
const navLinks = [
  { label: "Calendar", path: "/calendar" },
  { label: "Book Appointment", path: "/book-appointment" },
  { label: "Appointments", path: "/appointments" },
  { label: "Doctor Availability", path: "/doctor-availability" },
  { label: "Doctor Login", path: "/doctor-login" },
  { label: "User Login", path: "/user-login" },
];

export default Navbar;
