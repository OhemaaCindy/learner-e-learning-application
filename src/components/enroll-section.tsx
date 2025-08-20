import { useLearnerEnrollment } from "@/hooks/learner-auth-hook";
import type { Track } from "@/types/track.type";
import {
  Calendar,
  Clock,
  GraduationCap,
  LoaderCircle,
  User,
} from "lucide-react";
import toast from "react-hot-toast";
// import { redirect } from "react-router";
// import { useNavigate } from "react-router";

interface EnrollmentProps {
  details: Track;
  id: string;
}

const EnrollSection = ({ details, id }: EnrollmentProps) => {
  // const navigate = useNavigate();

  const {
    mutate: enrollLearner,
    isPending,
    error,
    isError,
    // data,
  } = useLearnerEnrollment();

  const handleEnrollment = () => {
    const enrollmentDetails = {
      track: id as string,
      paystackCallbackUrl: "http://localhost:5173/checkout",
      amount: details.price,
    };
    console.log("🚀 ~ handleEnrollment ~ data:", enrollmentDetails);
    enrollLearner(enrollmentDetails, {
      onSuccess(res) {
        console.log("🚀 ~ onSuccess ~ res:", res);
        toast.success("Enrollment successful");
        // redirect(res.transactionUrl);
        window.location.href = res.transactionUrl;
      },
      onError() {
        toast.error("Failed to enroll.Please try again later");
      },
    });
  };

  return (
    <div className="w-full pb-4 bg-white">
      <div className=" px-7 py-5  flex flex-col  items-center justify-center">
        <img
          src={details?.image}
          alt="image"
          className="w-70 h-70 object-cover"
        />
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base text-center">
          Course Details
        </h3>
      </div>

      <div className="flex flex-col justify-center w-70 mx-auto  ">
        <div className="flex items-center justify-between p-2 ">
          <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />

          <span className="font-semibold text-sm sm:text-base ">
            {details?.duration}
          </span>
        </div>

        <div className="flex items-center justify-between border-t p-2">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
            <span className="text-gray-600 text-sm sm:text-base">Courses</span>
          </div>
          <span className="font-semibold text-sm sm:text-base ">
            {details?.courses.length}
          </span>
        </div>

        <div className="flex items-center justify-between border-t p-2">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
            <span className="text-gray-600 text-sm sm:text-base">Date</span>
          </div>
          {/* <span className="font-semibold text-sm sm:text-base ">
            {details?.createdAt}
          </span> */}
        </div>

        <div className="flex items-center justify-between border-t p-2">
          <div className="flex items-center space-x-2">
            <User className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
            <span className="text-gray-600 text-sm sm:text-base">
              Instructor
            </span>
          </div>
          <span className="font-semibold text-sm sm:text-base">
            {details?.instructor}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center border-t pt-4 sm:pt-6 mt-4 sm:mt-6">
          <div className="text-center sm:mb-6">
            <span className="text-2xl sm:text-3xl font-semibold ">
              ${details?.price}
            </span>
          </div>
          <button
            className="w-70 bg-[#01589A] hover:bg-blue-300 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base cursor-pointer"
            onClick={handleEnrollment}
            disabled={isPending}
          >
            {isPending ? (
              <span className="animate-spin text-white flex items-center justify-center">
                <LoaderCircle />{" "}
              </span>
            ) : (
              "Enroll"
            )}
          </button>
        </div>
        {isError && error && (
          <ul className="text-rose-500 mt-2 bg-rose-100 border border-rose-500 rounded-lg px-8 py-2 list-disc">
            {error.errors.map((err, index) => (
              <li key={index}>{err.message}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EnrollSection;
