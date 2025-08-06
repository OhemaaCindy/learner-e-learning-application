import React from "react";
import { ArrowUp, Linkedin, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#01589A] text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo2.png" alt="logo" className="w-full h-20" />
            </div>
          </div>

          {/* Menu Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="hover:text-blue-200 transition-colors duration-200 cursor-pointer">
                +23341002000
              </p>
              <p className="text-sm">New Reiss, Ghana, Accra</p>
            </div>
          </div>

          {/* Social Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 underline"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 underline"
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-lg">©</span>
              <span>copyright 2025 - G-client, All rights reserved</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp
                size={16}
                className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
