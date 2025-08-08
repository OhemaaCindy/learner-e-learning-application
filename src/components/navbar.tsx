import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "#" },
    { name: "Tracks", href: "#" },
  ];

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    // navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <img src="/logo.png" alt="logo" className="w-20 h-8" />
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              className="flex items-center space-x-2 text-[#01589A] border border-[#01589A] hover:bg-blue-50 px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer"
              onClick={handleLogin}
            >
              <span>Login</span>
              <img src="/blue-arrow.png" alt="arrow" className="h-4 w-4" />
            </button>
            <button
              className="flex items-center space-x-2 bg-[#01589A] text-white hover:bg-[#015777] px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 shadow-sm cursor-pointer"
              onClick={handleRegister}
            >
              <span>sign up</span>
              <img
                src="/white-arrow.png"
                alt="arrow"
                className="h-4 w-4 text-[#ffffff]"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="pt-4 pb-2 space-y-3">
            <button
              className="w-full flex items-center justify-center space-x-2 text-[#01589A] border border-[#01589A]  hover:bg-blue-50 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Login</span>
              <img src="/blue-arrow.png" alt="arrow" className="h-4 w-4" />
            </button>
            <button
              className="w-full flex items-center justify-center space-x-2 bg-[#01589A] text-white hover:bg-[#015777] px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>sign up</span>
              <img
                src="/white-arrow.png"
                alt="arrow"
                className="h-4 w-4 text-[#ffffff]"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
