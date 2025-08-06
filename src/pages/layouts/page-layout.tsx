import { Outlet } from "react-router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import TechStackFooter from "../../components/techStack";

const PageLayout = () => {
  return (
    <div className="bg-red-800">
      <Navbar />

      <Outlet />
      {/* <TechStackFooter /> */}
      <Footer />
    </div>
  );
};

export default PageLayout;
