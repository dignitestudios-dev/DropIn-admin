import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router";
import { Logo } from "../../assets/export";
import { useFormik } from "formik";
import { ForgotSchema } from "../../schema/authentication/authenticationSchema";
import { forgotValues } from "../../init/authentication/authentication";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { SuccessToast } from "../../components/global/Toaster";
export default function ForgotPassword() {
  const navigate = useNavigate("");
  const [loading,setloading]=useState(false)
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: forgotValues,
      validationSchema: ForgotSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          setloading(true)
          // Send email for password reset
          const response = await axios.post(
            "/auth/send-reset-otp",
           
            {
              email: values.email,
            }
          );
          console.log(response, "response");
          if (response?.status === 200) {
            sessionStorage.setItem("email", values.email);
            navigate("/auth/verifyOtp");
            SuccessToast(response?.data?.message);
          }
          // Navigate to OTP verificatio
        } catch (error) {
          ErrorToast(
            error.response?.data?.message || "Failed to send reset email"
          );
        } finally {
          setloading(false)
        }
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
          <NavLink to={"/auth/login"}>
            <FaArrowLeftLong size={24} className="text-white" />
          </NavLink>

          <h2 className="text-[24px] font-bold mx-auto leading-[36px] text-white">
            Forgot Password
          </h2>
        </div>
        <p className="font-normal text-[13px] leading-[19px] text-[#FFFFFF] mt-3 text-center">
          Enter your registered email address to recover your <br /> password.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor="email"
              className="text-white font-medium text-sm leading-[21px]"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.email && touched?.email
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
              placeholder="Email Address"
            />
            {errors.email && touched.email ? (
              <p className="text-red-700 text-sm font-medium">{errors.email}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            {loading ? <FiLoader size={20} className="animate-spin" /> : <span>Send Otp</span>}
          </button>
        </form>
      </div>
    </div>
  );
}
