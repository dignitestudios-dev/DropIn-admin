import { useFormik } from "formik";
import Modal from "react-modal";
import { categorySchema, subCategorySchema } from "../../../schema/app/AppSchema";
import { IoMdClose } from "react-icons/io";
import { categoryValues, subCategoryValues } from "../../../init/app/App";
import { music, uploadIcon } from "../../../assets/export";
import { useState } from "react";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
const CreateSubCategory = ({ isOpen, setIsOpen, getCategoryData, data }) => {
  const [loading, setLoading] = useState(false);
  
 const [subCategoryInput, setSubCategoryInput] = useState("");

console.log(data, "data");
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    
    errors,
    touched,
  } = useFormik({
    initialValues: subCategoryValues,
    validationSchema: subCategorySchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      const data = new FormData();
      data.append("subcategoryName", values.subcategoryname);
      data.append ("categoryID", values.Categoryid);
     

      try {
        setLoading(true);
        const response = await axios.post(`/category/add-subcategory`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
setSubCategoryInput(response?.data)
        if (response.status === 200) {

          action.resetForm();
         
          setIsOpen(false);
          SuccessToast("Category created successfully");
          getCategoryData();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });


console.log(subCategoryInput, "subCategoryInput");
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
          <h3 className="font-[700] text-[24px]  text-white ">Add Category</h3>
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
          {/* Image Upload */}
      
       <div className="w-full mt-4 h-auto flex flex-col justify-start items-start gap-1">
  <label
    htmlFor="Categoryid"
    className="text-white font-medium text-sm leading-[21px]"
  >
    Select Category
  </label>
  <select
    id="Categoryid"
    name="Categoryid"
    value={values.Categoryid} // formik state
    onChange={handleChange}
    onBlur={handleBlur}
    className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
      errors.Categoryid && touched.Categoryid
        ? "border-red-500"
        : "border-[#F4F4F4]"
    }`}
  >
    <option className="bg-back" value="">Select Category</option>
    {data?.map((cat) => (

      <option className="bg-black" key={cat._id} value={cat.categoryID}>
        {cat.name}
      </option>
    ))}
  </select>

  {errors.Categoryid && touched.Categoryid && (
    <p className="text-red-700 text-sm font-medium">{errors.Categoryid}</p>
  )}
</div>

          <div className="w-full mt-4 h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor="subcategoryName"
              className="text-white font-medium  text-sm leading-[21px]"
            >
              Sub Category
            </label>
            <input
              type="text"
              id="subcategoryname"
              name="subcategoryname" // ✅ Don't use "subCategory" here
              value={values.subcategoryname}
                onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.subcategoryname && touched?.subcategoryname
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
              placeholder="Enter Subcategory"
            />

            {errors.subcategoryname && touched.subcategoryname ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.subcategoryname}
              </p>
            ) : null}
          </div>
          <div className="w-full mt-4 h-auto flex  justify-start items-start gap-1">
           

            <button
              type="submit"
              className="w-full h-[49px] mt-4 rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
            >
              {loading ? "Loading..." : "Add"}
            </button>
          </div>
        </form>
      
      </div>
    </Modal>
  );
};

export default CreateSubCategory;
