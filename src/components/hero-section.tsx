import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative ">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0  bg-[url('/home-bg.jpg')] bg-cover bg-center bg-no-repeat "></div>
      <div className="absolute inset-0  opacity-30 bg-gradient-to-r from-sky-800 from-10% via-sky-700 via-30% "></div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="text-white space-y-6 max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Unlock Your Potential with Industry-Leading Courses!
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed max-w-xl">
              "Join thousands of learners gaining real-world skills and
              advancing their careers. Our expert-led courses are designed to
              empower you to succeed."
            </p>

            <div className="pt-4">
              <button className="bg-[#01589A] hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
