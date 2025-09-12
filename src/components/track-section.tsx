// import { allTracks } from "@/services/track-services";
// import type { TrackResponse } from "@/types/track.type";
// import { useQuery } from "@tanstack/react-query";
import { allTracks } from "@/services/track-services";
import { Calendar } from "lucide-react";
import { TrackSectionShimmer } from "./skeleton";
import { TrackResponse } from "@/types/track.type";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
// import { TrackSectionShimmer } from "./skeleton";
// import { Link } from "react-router";
// import { Button } from "./ui/button";

const TrackSection = () => {
  // Array of colors to cycle through
  const courseColors = [
    "bg-[#ECFDF3] text-[#027A48]",
    "bg-[#F3F0FB] text-[#6941C6]",
    "bg-[#F0F9FF] text-[#026AA2]",
    "bg-[#F8F9FC] text-[#363F72]",
    "bg-[#F7EDF6] text-[#C11574]",
    "bg-[#E9F3FB] text-[#175CD3]",
    "bg-[#FFF4ED] text-[#B93815]",
    "bg-[#FFF1F3] text-[#C01048]",
  ];

  // Function to get color based on card and course index
  const getCourseColor = (cardIndex: number, courseIndex: number) => {
    const colorIndex = (cardIndex * 2 + courseIndex) % courseColors.length;
    return courseColors[colorIndex];
  };

  // const trackCards = [
  //   {
  //     id: 1,
  //     image:
  //       "https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?b=1&s=612x612&w=0&k=20&c=bOgdeSmL8pEwoX91v2j0r5Qyln9IIhn779PzZBqqFdc=",
  //     price: "100",
  //     name: "Networking & Security",
  //     courses: [{ title: "Ethical Hacking" }],
  //     duration: "1 week",
  //   },
  //   {
  //     id: 2,
  //     image: "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg",
  //     price: "3500",
  //     name: "Web Development",
  //     courses: [{ title: "React.js" }, { title: "html,css" }],
  //     duration: "6 weeks",
  //   },
  //   {
  //     id: 3,
  //     image: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg",
  //     price: "500",
  //     name: "IT Support & Administration",
  //     courses: [{ title: "Computer Hardware" }],
  //     duration: "2 weeks",
  //   },
  //   {
  //     id: 4,
  //     image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
  //     price: "700",
  //     name: "Data & Cloud Computing",
  //     courses: [{ title: "Database Management" }],
  //     duration: "8 weeks",
  //   },
  // ];
  const { data, isLoading } = useQuery<TrackResponse, Error>({
    queryKey: ["get-all-tracks"],
    queryFn: allTracks,
  });

  // Show shimmer while loading
  if (isLoading) {
    return <TrackSectionShimmer />;
  }

  const trackDetails = data?.tracks.slice(0, 4) || [];
  console.log("🚀 ~ TracksPage ~ trackDetails:", trackDetails);

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-center">
        Our solutions
      </h1>
      <p className="font-semibold mb-10 text-center max-w-3xl text-nowrap">
        Create your account quickly with just your email or social media login,
        then explore a wide range
      </p>

      <Link
        to="/tracks"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full cursor-pointer"
      >
        {trackDetails.map((item, cardIndex) => (
          <div
            key={item.id}
            className="w-full h-80 flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white mb-10"
          >
            <div className="h-40 relative flex items-center justify-center">
              <img
                src={item.image}
                alt="track image"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg text-sm font-semibold text-gray-800">
                ${item.price}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {item.duration}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.courses.slice(0, 2).map((course, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCourseColor(
                      cardIndex,
                      index
                    )}`}
                  >
                    {course.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default TrackSection;
