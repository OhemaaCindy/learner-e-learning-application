import { Clock, Calendar, Star, GraduationCap } from "lucide-react";

export const TrackDetailsPage = () => {
  return (
    <div className="relative">
      <div className="bg-[#01589A]">
        <div className="max-w-7xl mx-auto">
          <div className=" text-white py-3 sm:py-4   ">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm">
              <a href="/" className="hover:text-blue-200 truncate">
                Home
              </a>
              <span className="text-blue-300 flex-shrink-0">›</span>
              <a href="/tracks" className="hover:text-blue-200 truncate">
                Tracks
              </a>
              <span className="text-blue-300 flex-shrink-0">›</span>
              <span className="font-medium truncate">Software Development</span>
            </nav>
          </div>

          {/* Hero Section */}
          <div className=" text-white">
            <div className=" py-8 sm:py-12">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                    Software Development Track
                  </h1>
                  <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                    Unlock your potential with comprehensive training in modern
                    software development. Become a Full-Stack Web Developer with
                    a single comprehensive course covering HTML, CSS,
                    JavaScript, Node, React, PostgreSQL, Web3, and DApps.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm">
                    <div>
                      <span className="text-blue-200">Instructor</span>
                      <p className="font-semibold">John Doe</p>
                    </div>
                    <div>
                      <span className="text-blue-200">Enrolled students</span>
                      <p className="font-semibold">50</p>
                    </div>
                    <div>
                      <span className="text-blue-200">1 review</span>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 max-w-7xl mx-auto">
        <div className="">
          {/* Header Navigation */}

          {/* Main Content */}
          <div className=" py-8 sm:py-12">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Left Column - Course Content */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                    What you'll learn
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                    <p>
                      Build 16 web development projects for your portfolio,
                      ready to apply for junior developer jobs.
                    </p>
                    <p>
                      After the course you will be able to build ANY website you
                      want.
                    </p>
                    <p>
                      Build fully-fledged websites and web apps for your startup
                      or business.
                    </p>
                    <p>
                      Master frontend development with React, Next.js, HTML,
                      CSS, Vue and Angular
                    </p>
                    <p>
                      Master backend development with Node, PHP, Python etc.
                    </p>
                  </div>
                </div>

                {/* Related Courses */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                    Explore related courses
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Data Science Course */}
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <img
                          src="/track-image.png"
                          alt="image"
                          className="w-30 h-30 object-cover"
                        />

                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base sm:text-lg mb-2">
                            Data Science Mastery
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            Equip yourself with the skills to analyze,
                            interpret, and leverage data, becoming an expert.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cloud Computing Course */}
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <img
                          src="/track-image.png"
                          alt="image"
                          className="w-30 h-30 object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base sm:text-lg mb-2">
                            Cloud Computing
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            Gain hands-on experience in cloud architecture,
                            preparing you to manage scalable solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-50 bottom-80">
        <div className=" px-7 py-5 bg-white flex flex-col justify-center">
          <img
            src="/track-image.png"
            alt="image"
            className="w-70 h-70 object-cove"
          />
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base text-center">
            Course Details
          </h3>
        </div>

        <div className="w-70 flex flex-col ml-10 ">
          <div className="flex items-center w-70 justify-between ">
            <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />

            <span className="font-semibold text-sm sm:text-base mb-5">
              12 weeks
            </span>
          </div>

          <div className="flex items-center w-70 justify-between border-t">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
              <span className="text-gray-600 text-sm sm:text-base">
                Courses
              </span>
            </div>
            <span className="font-semibold text-sm sm:text-base mb-5">4</span>
          </div>

          <div className="flex items-center w-70 justify-between border-t">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
              <span className="text-gray-600 text-sm sm:text-base">Date</span>
            </div>
            <span className="font-semibold text-sm sm:text-base mb-5">
              03/2025
            </span>
          </div>

          <div className="flex flex-col justify-center items-center border-t pt-4 sm:pt-6 mt-4 sm:mt-6">
            <div className="text-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-semibold ">
                $350.00
              </span>
            </div>
            <button className="w-70 bg-[#01589A] hover:bg-blue-300 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base cursor-pointer">
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
