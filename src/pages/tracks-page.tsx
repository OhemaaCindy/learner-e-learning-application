import { CourseCard } from "@/components/track-cards";
import { Monitor, BarChart3, Cloud, Search } from "lucide-react";

const TracksPage = () => {
  const courses = [
    {
      title: "Software Development",
      description:
        "Unlock your potential with comprehensive training in modern software development",
      rating: 4.0,
      price: "$350",
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-300",
      icon: Monitor,
      iconColor: "text-blue-600",
    },
    {
      title: "Data Science Mastery",
      description:
        "Equip yourself with the skills to analyze, interpret, and leverage data.",
      rating: 4.0,
      price: "$350",
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-300",
      icon: BarChart3,
      iconColor: "text-purple-600",
    },
    {
      title: "Cloud Computing Expertise",
      description:
        "Gain hands-on experience in cloud preparing you to manage scalable..",
      rating: 4.0,
      price: "$350",
      bgColor: "bg-gradient-to-br from-orange-200 to-orange-300",
      icon: Cloud,
      iconColor: "text-orange-600",
    },
  ];
  return (
    <div className="bg-[#02589A]">
      <div className=" max-w-7xl mx-auto  text-white p-10 flex justify-center ">
        <div className="font-bold text-lg">Tracks</div>
      </div>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto ">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Track"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Top Tracks</h1>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksPage;
