import React from "react";

interface TechButtonProps {
  name: string;
  highlighted?: boolean;
}

const TechButton: React.FC<TechButtonProps> = ({
  name,
  highlighted = false,
}) => {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
        ${
          highlighted
            ? "border-red-400 text-red-400 bg-red-400/10 hover:bg-red-400/20"
            : "border-blue-300 text-blue-100 bg-blue-400/20 hover:bg-blue-400/30"
        }
        text-sm font-medium min-w-[100px]
      `}
    >
      {name}
    </button>
  );
};

const TechStackFooter: React.FC = () => {
  const technologies = [
    { name: "ReactJs", highlighted: false },
    { name: "NextJs", highlighted: false },
    { name: "NodeJs", highlighted: false },
    { name: "Django", highlighted: true },
    { name: "MongoDB", highlighted: false },
    { name: "VueJs", highlighted: false },
    { name: "AWS", highlighted: false },
    { name: "Azure", highlighted: false },
    { name: "PowerBI", highlighted: false },
    { name: "Python", highlighted: false },
    { name: "Excel", highlighted: false },
    { name: "Tableau", highlighted: true },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                What will be next step
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
                Discover our diverse stack of solutions, including software
                development, data science, and cloud tools. Sign up today and
                kickstart your journey!
              </p>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <TechButton
                  key={index}
                  name={tech.name}
                  highlighted={tech.highlighted}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative">
            <div className="relative z-10">
              {/* Desktop Monitor */}
              <div className="bg-gray-800 rounded-t-xl p-1 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-t-lg overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-600 ml-4">
                      www.yoursite.com
                    </div>
                  </div>
                  {/* Website Content */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-100 p-6">
                    <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full mb-3"></div>
                      <h3 className="text-sm font-semibold mb-2">
                        Unlock Your Potential with Industry-Leading Courses!
                      </h3>
                      <p className="text-xs opacity-90">
                        Transform your career with our comprehensive programs
                      </p>
                      <button className="bg-white text-blue-600 px-3 py-1 rounded text-xs mt-2 font-medium">
                        Get Started
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700">
                        Our solutions
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white/60 h-8 rounded"></div>
                        <div className="bg-white/60 h-8 rounded"></div>
                        <div className="bg-white/60 h-8 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Monitor Stand */}
                <div className="bg-gray-700 h-6 rounded-b-xl"></div>
                <div className="bg-gray-600 w-20 h-3 rounded-full mx-auto"></div>
              </div>

              {/* Mobile Phone */}
              <div className="absolute -bottom-8 -left-8 bg-gray-900 rounded-2xl p-1 shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <div className="bg-white rounded-xl overflow-hidden w-24 h-48">
                  {/* Phone Header */}
                  <div className="bg-blue-600 h-16 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                  {/* Phone Content */}
                  <div className="p-2 space-y-2">
                    <div className="bg-gray-100 h-3 rounded"></div>
                    <div className="bg-gray-100 h-3 rounded w-3/4"></div>
                    <div className="bg-blue-100 h-4 rounded"></div>
                    <div className="bg-gray-100 h-2 rounded"></div>
                    <div className="bg-gray-100 h-2 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Tablet */}
              <div className="absolute -top-4 -right-4 bg-gray-800 rounded-xl p-1 shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="bg-white rounded-lg overflow-hidden w-32 h-24">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full p-2">
                    <div className="bg-white/20 rounded h-full flex flex-col justify-between p-2">
                      <div>
                        <div className="w-4 h-1 bg-white/60 rounded mb-1"></div>
                        <div className="w-6 h-1 bg-white/60 rounded"></div>
                      </div>
                      <div className="bg-white/30 rounded px-2 py-1">
                        <div className="w-3 h-1 bg-white/80 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl transform scale-150"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TechStackFooter;
