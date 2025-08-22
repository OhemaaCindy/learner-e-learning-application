import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <div className="max-w-md p-6">
        <img
          src="/not-found.png"
          alt="Not Found"
          className="mx-auto mb-6 w-48"
        />

        <Link
          to="/"
          className="px-6 py-2 rounded-2xl bg-[#02589A] text-white font-medium shadow hover:bg-blue-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
