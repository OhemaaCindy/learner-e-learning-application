import React from "react";
import { ArrowUp, Linkedin, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#01589A] flex justify-between px-48 py-10">
        <div className="flex items-center space-x- mb-6">
          <img src="/logo2.png" alt="logo" className=" h-15 md:w-50" />
        </div>
        {/* Menu Section */}

        <div className="flex   w-150  gap-30 ">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Menu</h3>
            <ul className="space-y-2 text-white">
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

          <div>
            {/* Contact Section */}
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-white">
              <p className="hover:text-blue-200 transition-colors duration-200 cursor-pointer">
                +23341002000
              </p>
              <p className="text-sm">New Reiss, Ghana, Accra</p>
            </div>
          </div>

          {/* Social Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Social</h3>
            <div className="space-y-2 text-white">
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 underline "
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
      </footer>

      <div className="border-t border-blue-500/30 bg-[#01589A]">
        <div className="container mx-auto px-25 py-4 ">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-white">
              <span className="text-lg">©</span>
              <span>copyright 2025 - G-client, All rights reserved</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 group  pr-15 pl-4 text-white"
            >
              <span className="text-sm ">Back to top</span>
              <ArrowUp
                size={16}
                className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
{
  /* Bottom Bar */
}
