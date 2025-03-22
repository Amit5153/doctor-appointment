import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white text-center p-6 mt-6">
      {/* Marquee Animated Text */}
      <p className="whitespace-nowrap animate-marquee text-sm mb-4">
        &copy; {new Date().getFullYear()} Doctor Appointments | All Rights Reserved 🚀
      </p>

      {/* Quick Links */}
      <nav className="mb-4">
        <ul className="flex justify-center space-x-6 text-sm font-medium">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
        <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
        <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
        <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
      </div>
    </footer>
  );
}
