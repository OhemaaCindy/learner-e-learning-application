import { Calendar, Clock, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router";

const EnrollSection = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/checkout");
  };
  return (
    <div className="w-full pb-4 bg-white">
      <div className=" px-7 py-5  flex flex-col  items-center justify-center">
        <img
          src="/track-image.png"
          alt="image"
          className="w-70 h-70 object-cover"
        />
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base text-center">
          Course Details
        </h3>
      </div>

      <div className="flex flex-col justify-center w-70 mx-auto  ">
        <div className="flex items-center justify-between ">
          <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />

          <span className="font-semibold text-sm sm:text-base mb-5">
            12 weeks
          </span>
        </div>

        <div className="flex items-center justify-between border-t">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
            <span className="text-gray-600 text-sm sm:text-base">Courses</span>
          </div>
          <span className="font-semibold text-sm sm:text-base mb-5">4</span>
        </div>

        <div className="flex items-center justify-between border-t">
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
            <span className="text-2xl sm:text-3xl font-semibold ">$350.00</span>
          </div>
          <button
            className="w-70 bg-[#01589A] hover:bg-blue-300 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base cursor-pointer"
            onClick={handleRoute}
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollSection;
