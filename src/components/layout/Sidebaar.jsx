import { NavLink, useLocation } from "react-router";
import { sidebarData } from "../../static/Sidebar";
import { Logo } from "../../assets/export";
import { IoMdClose } from "react-icons/io";

const Sidebaar = ({ toggleModal }) => {
  const location = useLocation();
  console.log(location, "location");

  return (
    <div className="w-full h-full overflow-y-auto  py-3 flex flex-col gap-3 ">
      <div className="flex justify-end px-4" >
        <button
          onClick={() =>{
            toggleModal()
            alert("hi")
            }}
          className="lg:hidden block"
        >
          <IoMdClose className="text-2xl" color="white" />
        </button>
      </div>
      <div className="flex justify-center">
        <img
          src={Logo}
          loading="lazy"
          alt="logo-organization"
          className="w-[50px]"
        />
      </div>
      {sidebarData?.map((sidebar) => {
        return (
          <NavLink
            key={sidebar?.link}
            className={({ isActive }) =>
              isActive
                ? "text-sm] border w-full h-12 flex items-center gap-5 px-3 justify-start border-[#2F7EF7] bg-[#2F7EF7] text-white rounded-sm font-medium "
                : "text-sm w-full h-12 flex items-center gap-5 px-3 justify-start rounded-sm font-medium  text-white"
            }
            to={sidebar?.link}
          >
            <img
              src={
                location?.pathname == sidebar.link
                  ? sidebar?.whiteIcon
                  : sidebar?.icon
              }
              className="w-8 "
              alt=""
            />
            <span>{sidebar?.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebaar;
