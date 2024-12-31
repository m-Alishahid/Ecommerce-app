import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; 
import { IconBaseProps } from "react-icons";

const Footer: React.FC = () => {
  const MenuIcon = HiMenu as React.ComponentType<IconBaseProps>;
  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              Welcome to our MediCraft, your number one source for quality products. We're dedicated to providing you the best of services with a focus on reliability, customer service, and uniqueness.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#shop" className="hover:text-red-500">Shop</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500">Contact Us</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-500">FAQ</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-red-500">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-red-500">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <span>Email: </span>
                <a href="mailto:support@ecommerce.com" className="hover:text-red-500">example@gmail.com</a>
              </li>
              <li>
                <span>Phone: </span>
                <a href="tel:+123456789" className="hover:text-red-500">xxx-xxx-xxx</a>
              </li>
              <li>
                <span>Address: </span>
                123 Medicraft St., City, Country
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
           <span className="text-2xl"> <FaFacebookF /> </span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <span className="text-2xl"><FaTwitter /></span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <span className="text-2xl"><FaInstagram  /></span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
           <span className="text-2xl"><FaLinkedinIn  /></span>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
          &copy; {new Date().getFullYear()} MediCraft All Rights Reserved.
        </div>
        <div className="text-center font-semibold">
          Developed by: Ali Shahid
        </div>
      </div>
    </footer>
  );
};

export default Footer;
