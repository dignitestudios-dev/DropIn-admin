import { CiSearch } from "react-icons/ci";
import { beardGuy, chat, notificationDrodown } from "../../assets/export";
import { IoMdArrowDropdown } from "react-icons/io";
import NotificationDropdown from "../global/NotificationDropdown";
import { useState } from "react";
import ProfileDropdown from "../global/ProfileDropdown";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const navigate = useNavigate("");
  return (
    <div className="w-full h-full">
      <div className="w-full h-full  px-4 flex justify-between items-center">
        <div className="hidden sm:flex">
          <div className="relative">
            <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
              <CiSearch color="white" />
            </div>
            <input
              type="text"
              className="block w-auto sm:w-[350px] h-[50px] px-3 text-sm text-white border border-[#F4F4F480] bg-transparent rounded-[14px] "
              placeholder="Search"
              required=""
            />
          </div>
        </div>
        <div className="flex relative items-center px-1 justify-end w-full gap-4">
          {/* <div>
            <button onClick={() => setIsOpen(!isOpen)} className="">
              <img src={notificationDrodown} className="w-6" alt="" />
            </button>
            {isOpen && (
              <div className="absolute left-0 lg:left-44 shadow-lg overflow-auto   p-3 top-20 bg-[#0E0E0E] h-[300px] w-[400px] rounded-[15px] ">
                <NotificationDropdown />
              </div>
            )}
          </div> */}
          {/* <div>
            <button
              className="focus:outline-none"
              onClick={() => navigate("/chat")}
            >
              <img src={chat} className="w-6" alt="" />
            </button>
          </div> */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setisProfileOpen(!isProfileOpen)}
          >
            <img
              src={beardGuy}
              className="rounded-full w-8 h-8 lg:h-12 lg:w-12"
              alt=""
            />
            <div className="lg:block hidden">
              <h4 className="font-[400] text-[12px] lg:text-[16px] text-white">
                Austin Robertson
              </h4>
              <span className="font-[400] text-[10px] lg:text-[13px] text-white">
                Administrator
              </span>
            </div>
            <div>
              <IoMdArrowDropdown className="text-white " size={25} />
            </div>
          </div>
        </div>
      </div>

      {isProfileOpen && (
        <div className="fixed right-10 shadow-lg overflow-auto   p-5 top-30 bg-[#0E0E0E]  w-[200px] rounded-[15px] ">
          <ProfileDropdown />
        </div>
      )}
    </div>
  );
};

export default Navbar;
