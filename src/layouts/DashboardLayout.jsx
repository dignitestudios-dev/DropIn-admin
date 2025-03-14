import { Outlet } from "react-router";
import { useEffect, useRef, useState } from "react";
import NoInternetModal from "../components/global/NoInternet";
import Navbar from "../components/layout/Navbar";
import Sidebaar from "../components/layout/Sidebaar";
import LogOutModal from "../components/authentication/LogOutModal";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const DashboardLayout = () => {
  const [openNoInternet, setOpenNoInternet] = useState(false);
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  useEffect(() => {
    if (!navigator.onLine) {
      setOpenNoInternet(true);
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-start bg-[#050505] p-3 items-start overflow-hidden">
      <div className="fixed inset-0 z-1">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2fb4f71b] via-transparent to-[#2fb4f74e] opacity-30" />
        {/* Animated Shapes - Responsive sizes */}
        <div className="absolute bottom-0 -left-20  w-[40rem]  lg:h-[20rem] bg-[#2F7EF7] rounded-full blur-4xl  opacity-30" />
        <div className="absolute top-0 -right-20  w-[30rem]  lg:h-[20rem] bg-[#2FB4F7] rounded-full blur-4xl opacity-30" />
        {/* Glass Layer with reduced blur on mobile */}
        <div className="absolute inset-0 backdrop-blur-[120px] sm:backdrop-blur-[120px]" />
      </div>
      <div
        onClick={toggleModal}
        className={`w-screen h-screen fixed  top-0 left-0 transition-all duration-500  ${
          isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:static  z-50 lg:z-auto px-3 lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 lg:h-full `}
      >
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 transition-all duration-200  ${
            isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:static backdrop-blur-[50px] w-[60%] z-50 lg:z-auto lg:w-60 xl:w-72 flex flex-col gap-3 items-center rounded-2xl rounded-tr-none justify-start py-0 h-full
 bg-[#131313bb]`}
        >
          <Sidebaar />
        </div>
      </div>

      <div className="w-full relative h-[calc(100%-4.5rem)] lg:w-[calc(100%-15rem)] xl:w-[calc(100%-18rem)]   ">
        <div className="sticky h-[90px] rounded-2xl rounded-tl-none rounded-bl-none backdrop-blur-[50px] bg-[#131313bb] flex items-center justify-between lg:justify-end z-20">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden block"
          >
            <HiOutlineMenuAlt2 className="text-2xl ml-2" color="white" />
          </button>
          <Navbar />
        </div>
        <div className="p-4  overflow-auto h-full ">
          <NoInternetModal isOpen={openNoInternet} />
          <LogOutModal />
          <Outlet />
        </div>
      </div>
    </div>
    // <div className="w-full h-screen bg-[#050505] flex flex-col justify-start items-start px-3 py-3">
    //   <div className="w-full bg-[#13131399] h-10 rounded-md p-8 ">
    //     <Navbar />
    //   </div>
    //   <img src={NoInternetImage} alt="" className="hidden" />
    //   <div className="w-full h-screen flex justify-start items-start">
    //     <div className="w-60 h-[calc(100%-2.5rem)] bg-[#13131399] ">
    //       <Sidebaar />
    //     </div>
    //     <div className="w-[calc(100%-15rem)] h-[calc(100%-2.5rem)] p-4 ">
    //       <NoInternetModal isOpen={openNoInternet} />
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DashboardLayout;
