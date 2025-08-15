// import { Calendar } from "lucide-react";

// const TrackSection = () => {
//   const cardDetails = [
//     {
//       id: 1,
//       image: "/card1-bg.png",
//       amount: "$400",
//       course: "Software Engineering",
//       duration: "7 weeks",
//     },
//     {
//       id: 2,

//       image: "/card2-bg.png",
//       amount: "$350",
//       course: "Cloud Computing",
//       duration: "7 weeks",
//     },
//     {
//       id: 3,

//       image: "/card3-bg.png",
//       amount: "$400",
//       course: "Data Science",
//       duration: "7 weeks",
//     },
//     {
//       id: 4,

//       image: "/card4-bg.png",
//       amount: "$250",
//       course: "UI/UX",
//       duration: "7 weeks",
//     },
//   ];

//   return (
//     <div className="flex flex-col justify-center items-center mt-10 mb-10 max-w-7xl mx-auto">
//       <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
//         Our solutions
//       </h1>
//       <p className="font-semibold mb-10">
//         Create your account quickly with just your email or social media login,
//         then explore a wide range
//       </p>
//       <div className="flex gap-5">
//         {cardDetails.map((item) => (
//           <div
//             key={item.id}
//             className="w-75  h-80 flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white  mb-10"
//           >
//             <div className={`h-40  relative flex items-center justify-center`}>
//               <img
//                 src={item.image}
//                 alt="track image"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg text-sm font-semibold text-gray-800">
//                 {item.amount}
//               </div>
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-900 mb-2">
//                 {item.course}
//               </h3>
//               <div className="flex items-center text-gray-600 text-sm mb-3">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 {item.duration}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrackSection;

import { Calendar } from "lucide-react";

const TrackSection = () => {
  const cardDetails = [
    {
      id: 1,
      image: "/card1-bg.png",
      amount: "$400",
      course: "Software Engineering",
      duration: "7 weeks",
    },
    {
      id: 2,
      image: "/card2-bg.png",
      amount: "$350",
      course: "Cloud Computing",
      duration: "7 weeks",
    },
    {
      id: 3,
      image: "/card3-bg.png",
      amount: "$400",
      course: "Data Science",
      duration: "7 weeks",
    },
    {
      id: 4,
      image: "/card4-bg.png",
      amount: "$250",
      course: "UI/UX",
      duration: "7 weeks",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-center">
        Our solutions
      </h1>
      <p className="font-semibold mb-10 text-center max-w-2xl">
        Create your account quickly with just your email or social media login,
        then explore a wide range
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
        {cardDetails.map((item) => (
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
                {item.amount}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.course}
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {item.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackSection;
