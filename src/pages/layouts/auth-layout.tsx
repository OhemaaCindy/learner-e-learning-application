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
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

const Protectedlayout = () => {
  const { data, isLoading, isError } = useQuery<CheckAuthResponse, Error>({
    queryKey: ["get-info"],
    queryFn: checkAuthUser,
    enabled: !!Cookies.get("token"),
  });

  console.log("Query data:", data); // Add this
  console.log("Query loading:", isLoading); // Add this
  console.log("Query error:", isError);

  if (!Cookies.get("token")) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If error or no user data, redirect
  if (isError || !data?.user) {
    return <Navigate to="/" />;
  }

  // User is authenticated, show protected content
  return <Outlet />;
};

export default Protectedlayout;
