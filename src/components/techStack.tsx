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

const TechStackSection: React.FC = () => {
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
    <div className="relative bg-[#01589A] py-16 px-4 sm:px-6 lg:px-4 mb-10 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-60 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight w-full ">
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
          <div className=" bg-[url('/techStack-bg.png')]   bg-no-repeat   h-full"></div>
          <div className="absolute left-230 top-50 bg-[url('/mobile.png')]  bg-no-repeat h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
