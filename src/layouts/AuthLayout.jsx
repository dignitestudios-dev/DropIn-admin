import React from "react";
import { Outlet } from "react-router";
import { LogInBg, LogInMapMarker } from "../assets/export";

const AuthLayout = () => {
  return (
    <div className=" min-h-screen bg-[#050505] flex flex-col justify-center items-center auth_bg p-4 md:py-8">
      <div className="fixed inset-0 z-[1]">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2fb4f71b] via-transparent to-[#2fb4f74e] opacity-30" />
        {/* Animated Shapes - Responsive sizes */}
        <div className="absolute bottom-0 -left-20  w-[20rem]  lg:h-[15rem] bg-[#2F7EF7] rounded-full blur-3xl " />
        <div className="absolute top-0 -right-20  w-[15rem]  lg:h-[15rem] bg-[#2FB4F7] rounded-full blur-3xl " />
        {/* Glass Layer with reduced blur on mobile */}
        <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]" />
      </div>

      <div className="relative w-[100%] flex justify-center ">
        <img
          src={LogInBg}
          alt="LogInBg"
          className="w-[95%] mx-auto shadow-2xl h-[330px] z-[5] backdrop-blur-[50px] rounded-[15px]  absolute"
        />
      </div>
      <Outlet />
      <div>
        <img src={LogInMapMarker} alt="LogInMap Marker" className="w-52 absolute right-5 bottom-0 z-10 "/>
      </div>
    </div>
  );
};

export default AuthLayout;
