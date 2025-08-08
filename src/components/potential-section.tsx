import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left column - Text content */}
          <div className="text-white space-y-6 max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Unlock Your Potential with
              <span className="block text-blue-100">
                Industry-Leading Courses!
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-xl">
              "Join thousands of learners gaining real-world skills and
              advancing their careers. Our expert-led courses are designed to
              empower you to succeed."
            </p>

            <div className="pt-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                Get started
              </button>
            </div>
          </div>

          {/* Right column - Professional woman image placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Professional woman illustration */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  {/* Head/Face area */}
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full mx-auto mb-6 relative">
                    {/* Glasses */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-6 border-2 border-amber-600 rounded-full bg-transparent">
                      <div className="absolute left-1 top-1 w-5 h-4 bg-white/30 rounded-full"></div>
                      <div className="absolute right-1 top-1 w-5 h-4 bg-white/30 rounded-full"></div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="w-32 h-40 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg mx-auto relative">
                    {/* Shirt/clothing details */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-white rounded-sm"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-gray-400 rounded-lg"></div>
                  </div>

                  {/* Backpack */}
                  <div className="absolute top-20 right-2 w-12 h-16 bg-gray-700 rounded-lg transform rotate-12">
                    <div className="w-8 h-2 bg-gray-600 rounded mx-auto mt-2"></div>
                    <div className="w-6 h-1 bg-gray-600 rounded mx-auto mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-300/15 rounded-full blur-2xl animate-pulse"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
