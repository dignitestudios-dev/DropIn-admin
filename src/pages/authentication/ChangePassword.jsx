import React, { useState } from "react";

import { Logo } from "../../assets/export";
import { useFormik } from "formik";
import { ChangedValues } from "../../init/authentication/authentication";
import { ChangedSchema } from "../../schema/authentication/authenticationSchema";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function ChangePassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const navigate=useNavigate("");
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ChangedValues,
      validationSchema: ChangedSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        navigate("/auth/login")
        const data = {};
      },
    });
  return (
    <div className="mt-10">
      <img
        src={Logo}
        alt="orange_logo"
        className="w-[128px] mx-auto mb-4 relative z-10"
      />
      <div className="w-full h-auto relative z-10 backdrop-blur-[50px] flex flex-col  p-6 justify-center  bg-[#13131399] rounded-[19px]">
        <div className="w-auto flex  items-center">
          <h2 className="text-[24px] font-bold mx-auto leading-[36px] text-white">
            Create New Password
          </h2>
        </div>
        <p className="font-normal text-[13px] leading-[19px] text-[#FFFFFF] mt-3 text-center">
          Enter new password to reset.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.password && touched?.password
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[16px] font-normal leading-[20.4px]"
                placeholder="Enter your password here"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
              >
                {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && touched.password ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.password}
              </p>
            ) : null}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
            Confirm Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.confirmpassword && touched?.confirmpassword
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
            >
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                id="confirmpassword"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[16px] font-normal leading-[20.4px]"
                placeholder="Enter confirm  password here"
              />
              <button
                type="button"
                onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
              >
                {isConfirmPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.confirmpassword}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            <span>Change Password</span>
          </button>
        </form>
      </div>
    </div>
  );
}
