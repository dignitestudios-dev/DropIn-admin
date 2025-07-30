import { useFormik } from "formik";
import Modal from "react-modal";
import { notificationValues } from "../../../init/app/App";
import { notificationSchema } from "../../../schema/app/AppSchema";
import { IoMdClose } from "react-icons/io";
import { SuccessToast } from "../../global/Toaster";
import { useState } from "react";
import axios from "../../../axios";
const CreateNotification = ({ isOpen, setIsOpen,getNotificationList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: notificationValues,
      validationSchema: notificationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        setIsLoading(true);
        setError('');
        
        const data = { title: values.title, description: values.detail };
        try {
          const response = await axios.post(`/notification/create-notification`, data);
          if (response.status === 200) {
            action.resetForm(); // Reset the form
            setIsOpen(false);
           SuccessToast('Notification created successfully');
           getNotificationList()
          }
        } catch (error) {
          console.error("Error creating notification:", error);
          setError('Failed to create notification. Please try again.');
        } finally {
          setIsLoading(false);
        }
      },
    });
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Page Not Found"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      className="flex items-center justify-center border-none outline-none z-[1000] "
      overlayClassName="fixed inset-0 bg-transparent z-[1000] flex justify-center items-center"
    >
      <div className="bg-[#13131399] w-[490px] px-4 py-6 backdrop-blur-[50px]  rounded-[16px] shadow-lg">
        <div className="flex justify-between mt-3 items-center">
          <h3 className="font-[700] text-[24px]  text-white ">
            Create Notification
          </h3>
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose className="text-white text-2xl" />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="w-full mt-3 flex flex-col justify-start items-start "
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none  rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.title && touched?.title
                  ? "border-red-500"
                  : "border-[#F4F4F4] "
              }`}
              placeholder="Enter Title"
            />
            {errors.title && touched.title ? (
              <p className="text-red-700 text-sm font-medium">{errors.title}</p>
            ) : null}
          </div>
          <div className="w-full h-auto mt-4 flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Detail
            </label>
            <textarea
              rows={8}
              id="detail"
              name="detail"
              value={values.detail}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full py-2 border-[0.8px] bg-transparent outline-none  rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.detail && touched?.detail
                  ? "border-red-500"
                  : "border-[#F4F4F4] "
              }`}
              placeholder="Enter Detail"
            />
            {errors.detail && touched.detail ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.detail}
              </p>
            ) : null}
          </div>
          <button
          onClick={handleSubmit}
          disabled={isLoading || !values.title || !values.detail}
            type="submit"
            className="w-full h-[49px] mt-4 rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              "Save"
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateNotification;
