import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Logo } from "../../assets/export";
import { FaArrowLeftLong } from "react-icons/fa6";
import CountDown from "../../components/authentication/CountDown";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef([]);
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const navigate=useNavigate("");
  const handleRestart = () => {
    setSeconds(30);
    setIsActive(true);
  };
  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (pastedData.length === otp.length) {
      setOtp(pastedData.split(""));
    }
    e.preventDefault();
  };
  
  return (
    <div className="mt-10">
      <img
        src={Logo}
        alt="orange_logo"
        className="w-[128px] mx-auto mb-4 relative z-10"
      />
      <div className="w-full h-auto relative z-10 backdrop-blur-[50px] flex flex-col  p-6 justify-center  bg-[#13131399] rounded-[19px]">
        <div className="w-auto flex  items-center">
          <NavLink to={"/auth/forgotpassword"} >
            <FaArrowLeftLong size={24} className="text-white" />
          </NavLink>

          <h2 className="text-[24px] font-bold mx-auto leading-[36px] text-white">
            Verification
          </h2>
        </div>
        <p className="font-normal text-[13px] leading-[19px] text-[#FFFFFF] mt-3 text-center">
          Enter the OTP sent to loremipsum@outlook.com <br />
        </p>

        <form onSubmit={(e)=>{
          e.preventDefault();
          navigate("/auth/changePassword")
        }} className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4">
          <div className="w-full h-auto flex justify-start items-center gap-4">
            {otp.map((_, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  ref={(el) => (inputs.current[index] = el)}
                  className="w-[50px] h-[50px] rounded-[14px] bg-transparent outline-none text-center border-[1px] border-[#F4F4F4] text-white text-2xl focus-within:border-[#2F7EF7] flex items-center justify-center"
                />
              );
            })}
          </div>
          <p className="font-normal text-[13px] flex gap-2 leading-[19px] text-[#FFFFFF] mt-3 mx-auto">
            Didn't get OTP?{" "}
            {isActive ? (
              <CountDown
                isActive={isActive}
                setIsActive={setIsActive}
                seconds={seconds}
                setSeconds={setSeconds}
              />
            ) : (
              <button
                type="button"
                onClick={handleRestart}
                className="outline-none text-[13px] border-none text-[#199BD1] font-bold"
              >
                Resend Otp
              </button>
            )}
          </p>
          <button
            type="submit"
            className="w-full h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}
