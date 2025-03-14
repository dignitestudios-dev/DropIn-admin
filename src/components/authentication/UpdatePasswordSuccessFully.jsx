import React, { useEffect } from "react";
import cookie from "js-cookie";
import { RiLogoutCircleRLine } from "react-icons/ri";
import useApp, { AppContext } from "../../context/AppContext";
import { Checkbox } from "../../assets/export";
const UpdatePasswordSuccessfully = () => {
  const { setUpdatePasswordSuccessfully, updatePasswordSuccessfully } =
    useApp(AppContext);

  useEffect(() => {
    if (updatePasswordSuccessfully) {
      const timer = setTimeout(() => {
        setUpdatePasswordSuccessfully(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [updatePasswordSuccessfully, setUpdatePasswordSuccessfully]);

  return (
    updatePasswordSuccessfully && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#1313131A] backdrop-blur-[100px] w-[400px] h-[250px] rounded-[15px] ">
          <div className="flex items-center flex-col justify-center gap-y-4 h-full">
            <div className="flex flex-col gap-y-2 items-center">
              <img src={Checkbox} alt="CheckBox" />
              <h3 className="text-2xl text-white">Password Changed </h3>
            </div>
            <p className="text-center text-wrap text-[#E5DDDD]">
              Your Password have successfully Changed
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdatePasswordSuccessfully;
