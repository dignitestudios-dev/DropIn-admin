import React from "react";
import useApp, { AppContext } from "../../context/AppContext";
import { Checkbox } from "../../assets/export";
import { useNavigate } from "react-router";
const LogOutModal = () => {
  const { logOutModal,setLogOutModal } = useApp(AppContext);
  const navigate=useNavigate(""); 
  return (
    logOutModal && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#1313131A] backdrop-blur-[100px] w-[470px] h-[280px]  rounded-lg ">
          <div className="flex items-center flex-col justify-center gap-y-4 h-full">
            <div  className="flex flex-col gap-y-2 items-center" >
              <img src={Checkbox} alt="" />
              <h3 className="text-2xl text-white" >Log Out</h3>
            </div>
          <p className="text-center text-wrap text-[#E5DDDD]" >Are you sure you want to logout?</p>
          <div className="flex items-center justify-center gap-5 " >
            <button onClick={()=>{
              setLogOutModal(!logOutModal)
            }} className="bg-[#0E0E0E] text-white text-sm px-4 py-1 rounded-[14px] w-[180px] h-[44px]">No</button>
            <button onClick={()=>{  
               setLogOutModal(!logOutModal)                          
              navigate("/auth/login")                             
            }}  className="w-[180px] h-[44px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium">Yes</button>
            
          </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LogOutModal;
