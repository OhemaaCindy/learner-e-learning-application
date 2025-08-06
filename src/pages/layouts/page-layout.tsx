import { Outlet } from "react-router";
import Navbar from "../../components/navbar";

const PageLayout = () => {
  return (
    <div className="bg-red-800">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default PageLayout;
