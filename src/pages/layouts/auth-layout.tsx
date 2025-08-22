import { checkAuthUser } from "@/services/auth-services";
import type { CheckAuthResponse } from "@/types/auth.type";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

const Protectedlayout = () => {
  const { data } = useQuery<CheckAuthResponse, Error>({
    queryKey: ["get-info"],
    queryFn: checkAuthUser,
    enabled: !!Cookies.get("token"),
  });

  const user = data?.user;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default Protectedlayout;
