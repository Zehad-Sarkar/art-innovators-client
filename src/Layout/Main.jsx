import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-100vh">
        <Outlet></Outlet>
      </div>
      {/* <div className="h-[900px]">
        <Outlet></Outlet>
      </div> */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
