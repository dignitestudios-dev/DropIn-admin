import { useFormik } from "formik";
import Modal from "react-modal";
import { categorySchema } from "../../../schema/app/AppSchema";
import { IoMdClose } from "react-icons/io";
import { categoryValues } from "../../../init/app/App";
import { music, uploadIcon } from "../../../assets/export";
import { useState } from "react";
const EditCategory = ({ isOpen, setIsOpen }) => {
  const [imagePreview, setImagePreview] = useState(uploadIcon); // State for image preview
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: categoryValues,
      validationSchema: categorySchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {};
      },
    });

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Log file path (or use the file object if needed)
      console.log("Selected file:", file);
      // Set image preview if the file is an image
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImagePreview(fileReader.result); // Set preview URL
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Page Not Found"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      className="flex items-center justify-center border-none outline-none z-[1000] "
      overlayClassName="fixed inset-0 bg-transparent z-[1000] flex justify-center items-center"
    >
      <div className="bg-[#13131399] w-[490px] px-4 py-4 pb-6 backdrop-blur-[50px]  rounded-[16px] shadow-lg">
        <div className="flex justify-between  items-center">
          <h3 className="font-[700] text-[24px]  text-white ">Edit Category</h3>
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
              htmlFor="pic"
              className="text-white flex items-center gap-3 font-medium  text-sm leading-[21px]"
            >
              <img
                src={imagePreview}
                className="w-20 h-20 cursor-pointer rounded-full"
                alt="uploadIcon"
              />
              <p>Add Category Icon</p>
            </label>
            <input
              type="file"
              id="pic"
              name="pic"
              value={values.pic}
              onChange={(e) => {
                handleChange(e);
                handleFileChange(e);
              }}
              onBlur={handleBlur}
              className={` hidden`}
            />
            {errors.pic && touched.pic ? (
              <p className="text-red-700 text-sm font-medium">{errors.pic}</p>
            ) : null}
          </div>
          <div className="w-full mt-4 h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Category name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none  rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.name && touched?.name
                  ? "border-red-500"
                  : "border-[#F4F4F4] "
              }`}
              placeholder="Enter Category name"
            />
            {errors.name && touched.name ? (
              <p className="text-red-700 text-sm font-medium">{errors.name}</p>
            ) : null}
          </div>
          <div className="w-full mt-4 h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Sub Category
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none  rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.name && touched?.name
                  ? "border-red-500"
                  : "border-[#F4F4F4] "
              }`}
              placeholder="Enter Category name"
            />
            {errors.name && touched.name ? (
              <p className="text-red-700 text-sm font-medium">{errors.name}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full h-[49px] mt-4 rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            Save
          </button>
        </form>
        <div className="inline-flex mt-3 w-full sm:w-auto flex-nowrap items-center bg-[#434343]  rounded-full p-1.5">          
          <div className="whitespace-nowrap text-xs font-medium text-white">
            Music Festivals
          </div>
          <div className="ms-2.5 inline-flex w-full justify-end items-center size-5 rounded-full cursor-pointer">
            <IoMdClose className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditCategory;
