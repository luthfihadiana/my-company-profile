import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-10 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Company</h3>
          <p className="text-sm leading-relaxed">
            We are committed to delivering the best products and services to
            help businesses thrive and grow. Our focus is on innovation,
            reliability, and customer satisfaction.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <p className="text-sm mb-4">
            Stay connected with us on social media for the latest updates.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white-700 rounded-full hover:bg-gray-600"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white-700 rounded-full hover:bg-gray-600"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white-700 rounded-full hover:bg-gray-600"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white-700 rounded-full hover:bg-gray-600"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-white-500 border-t border-white-700 pt-6">
        &copy; {new Date().getFullYear()} Our Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
