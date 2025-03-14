import React, { useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { useFormik } from "formik";
import { loginValues } from "../../init/authentication/authentication";
import { signInSchema } from "../../schema/authentication/authenticationSchema";
import { NavLink, useNavigate } from "react-router";
import { FiLoader } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Logo } from "../../assets/export";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate=useNavigate("")
  const { loading, postData } = useLogin();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: loginValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          email: values?.email,
          password: values?.password,
        };
        navigate("/dashboard")
        // postData("/admin/login", false, null, data, processLogin);

        // Use the loading state to show loading spinner
        // Use the response if you want to perform any specific functionality
        // Otherwise you can just pass a callback that will process everything
      },
    });
  return (
    <div className="mt-10">
      <img src={Logo} alt="orange_logo" className="w-[128px] mx-auto mb-4 relative z-10" />
      <div className="w-full h-auto relative z-10 backdrop-blur-[50px] flex flex-col items-center p-6 justify-center  md:h-[400px] bg-[#13131399] rounded-[19px]">
        <div className="w-auto flex flex-col justify-center items-center">
          <h2 className="text-[24px] font-bold leading-[36px] text-white">
            Sign In
          </h2>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
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
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none  rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.email && touched?.email
                  ? "border-red-500"
                  : "border-[#F4F4F4] "
              }`}
              placeholder="Email Address"
            />
            {errors.email && touched.email ? (
              <p className="text-red-700 text-sm font-medium">{errors.email}</p>
            ) : null}
          </div>

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
                placeholder="Password"
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

          <div className="w-full -mt-1  flex items-center justify-between">
            <div className="flex">
              <input
                type="checkbox"
                className="border-gray-200 rounded-[8px] w-[20px] h-[20px]"
                id="remember-me"
              />
              <label
                htmlFor="remember-me"
                className="text-sm text-white font-normal ms-3"
              >
                Remember me
              </label>
            </div>

            <NavLink
              to={"/auth/forgotpassword"}
              className="text-[#2F7EF7] text-[16px] font-medium leading-[21px]"
            >
              Forgot Password?
            </NavLink>
          </div>

          <button
            type="submit"
            className="w-full h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            <span>Log In</span>
            {loading && <FiLoader className="animate-spin text-lg " />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
