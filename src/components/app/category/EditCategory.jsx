import { useFormik } from "formik";
import Modal from "react-modal";
import { categorySchema, editCategorySchema } from "../../../schema/app/AppSchema";
import { IoMdClose } from "react-icons/io";
import { editCategoryValues } from "../../../init/app/App";
import { music, uploadIcon } from "../../../assets/export";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
const EditCategory = ({ isOpen, setIsOpen, getCategoryData,editdata }) => {
  const [imagePreview, setImagePreview] = useState(uploadIcon); // State for image preview
  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, setFieldValue, errors, touched } =
    useFormik({
      initialValues: editCategoryValues,
      validationSchema: editCategorySchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        console.log("values", values);
        const data = {
          categoryID: editdata._id,
          newName: values.newName,
        };
    
        try {
          setLoading(true);
          const response = await axios.post(`/category/rename-category`, data);
    
          if (response.status === 200) {
            setIsOpen(false); // close modal
            action.resetForm(); // reset form
            SuccessToast("Category renamed successfully");
            getCategoryData();
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
    });

    useEffect(() => {
      if (editdata) {
        setFieldValue("newName", editdata.name);
      }
    }, [editdata]);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]; // Get the selected file
  //   if (file) {
  //     // Log file path (or use the file object if needed)
  //     console.log("Selected file:", file);
  //     // Set image preview if the file is an image
  //     const fileReader = new FileReader();
  //     fileReader.onloadend = () => {
  //       setImagePreview(fileReader.result); // Set preview URL
  //     };
  //     fileReader.readAsDataURL(file);
  //   }
  // };

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
          onSubmit={handleSubmit}
          className="w-full mt-3 flex flex-col justify-start items-start "
        >
          {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
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
          </div> */}
          <div className="w-full mt-4 h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Category name
            </label>
            <input
              type="text"
              id="newName"
              name="newName"
              value={values.newName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none  rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.newName && touched?.newName
                  ? "border-red-500"
                  : "border-[#F4F4F4] "
              }`}
              placeholder="Enter Category name"
            />
            {errors.newName && touched.newName ? (
              <p className="text-red-700 text-sm font-medium">{errors.newName}</p>
            ) : null}
          </div>
         
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[49px] mt-4 rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
        
      </div>
    </Modal>
  );
};

export default EditCategory;
