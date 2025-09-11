// import { checkAuthUser } from "@/services/auth-services";
// import type { CheckAuthResponse } from "@/types/auth.type";
// import { useQuery } from "@tanstack/react-query";
// import Cookies from "js-cookie";
// import { Navigate, Outlet } from "react-router";

// const Protectedlayout = () => {
//   const { data } = useQuery<CheckAuthResponse, Error>({
//     queryKey: ["get-info"],
//     queryFn: checkAuthUser,
//     enabled: !!Cookies.get("token"),
//   });

//   const user = data?.user;

//   return user ? <Outlet /> : <Navigate to="/" />;
// };

// export default Protectedlayout;

import { checkAuthUser } from "@/services/auth-services";
import type { CheckAuthResponse } from "@/types/auth.type";
import { useQuery } from "@tanstack/react-query";
// import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

const Protectedlayout = () => {
  // const token = Cookies.get("token");

  const { data, isLoading, isError, error } = useQuery<
    CheckAuthResponse,
    Error
  >({
    queryKey: ["get-info"],
    queryFn: checkAuthUser,
    // enabled: !!Cookies.get("token"),
  });
  // console.log("🍪 Token from cookie:", token);

  // console.log("Query data:", data); // Add this
  // console.log("Query loading:", isLoading); // Add this
  // console.log("Query error:", isError);

  if (isLoading) {
    return <div></div>;
  }

  // If error or no user data, redirect
  if (isError || !data?.user) {
    console.log(error || "no user found");
    return <Navigate to="/" />;
  }

  // if (!token) {
  //   return <Navigate to="/" />;
  // }

  // User is authenticated, show protected content
  return <Outlet />;
};

export default Protectedlayout;
