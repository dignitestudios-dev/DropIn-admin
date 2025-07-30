import { useFormik } from "formik";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { UpdatePasswordValues } from "../../init/authentication/authentication";
import { UpdateSchema } from "../../schema/authentication/authenticationSchema";
import UpdatePasswordSuccessfully from "../../components/authentication/UpdatePasswordSuccessFully";
import useApp, { AppContext } from "../../context/AppContext";
import axios from "../../axios";
import { FiLoader } from "react-icons/fi";
import { ErrorToast } from "../../components/global/Toaster";
export default function InAppChangedPassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [IsNewPassword, setIsNewPassword] =
    useState(false);
  const [isReEnterPassword, setIsReEnterPassword] =
    useState(false);
    const {updatePasswordSuccessfully,setUpdatePasswordSuccessfully}=useApp(AppContext);
    const [loading,setloading]=useState(false)
    
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: UpdatePasswordValues,
      validationSchema: UpdateSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          if (values.newPassword !== values.reEnterPassword) {
            ErrorToast("Passwords do not match");
            return;
          }
          setloading(true)
          const payload = {
            currentPassword: values.oldPassword,
            newPassword: values.newPassword,
          };
          const response = await axios.post("auth/change-password", payload);
          if (response.status === 200) {
            // Optionally call setUpdatePasswordSuccessfully(true) or show a toast
            setUpdatePasswordSuccessfully(true);
            // Optionally reset form or navigate
            action.resetForm();
          } else {
            // Handle error
            console.error("Password change failed", response.data?.message);
          }
        } catch (error) {
          // Handle error
          console.error("Password change error", error.response?.data?.message || error.message);
        } finally {
          setloading(false)
        }
      },
    });
  return (
    <div className="h-[75vh]">
      <h3 className="font-[500] text-[28px] text-white">Change Password</h3>
      <div className="bg-[#13131399] rounded-[15px] px-3 py-3 mt-2 backdrop-blur-[50] h-full ">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Old Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.oldPassword && touched?.oldPassword
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="oldPassword"
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="Old Password"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
              >
                {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <p className="text-[#FFFFFF] text-sm font-normal">
              You must enter current password in order to change your password.
            </p>
            {errors.oldPassword && touched.oldPassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.oldPassword}
              </p>
            ) : null}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              New Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.newPassword && touched?.newPassword
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
            >
              <input
                type={IsNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="New Password"
              />
              <button
                type="button"
                onClick={() => setIsNewPassword((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
              >
                {IsNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.newPassword && touched.newPassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.newPassword}
              </p>
            ) : null}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Re-enter Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.reEnterPassword && touched?.reEnterPassword
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
            >
              <input
                type={isReEnterPassword ? "text" : "password"}
                id="reEnterPassword"
                name="reEnterPassword"
                value={values.reEnterPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="Re-enter Password"
              />
              <button
                type="button"
                onClick={() => setIsReEnterPassword((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
              >
                {isReEnterPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.reEnterPassword && touched.reEnterPassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.reEnterPassword}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full h-[49px] rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            {loading ? <FiLoader size={20} className="animate-spin" /> : <span>Save</span>}
          </button>
        </form>
      </div>
      <UpdatePasswordSuccessfully/>
    </div>
  );
}
