import { useFormik } from "formik";
import Modal from "react-modal";
import { categorySchema } from "../../../schema/app/AppSchema";
import { IoMdClose } from "react-icons/io";
import { categoryValues } from "../../../init/app/App";
import { music, uploadIcon } from "../../../assets/export";
import { useState } from "react";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
const CreateCategory = ({ isOpen, setIsOpen, getCategoryData }) => {
  const [imagePreview, setImagePreview] = useState(uploadIcon); // State for image preview
  const [loading, setLoading] = useState(false);
  const [subCategory, setSubCategory] = useState([]);
  const [subCategoryInput, setSubCategoryInput] = useState(""); // 🔁 this is new

  console.log(subCategory, "subCategory");
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: categoryValues,
    validationSchema: categorySchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      const data = new FormData();
      data.append("categoryName", values.name);
      data.append("icon", values.pic);

      subCategory.forEach((item) => {
        data.append("subcategoryNames[]", item);
      });

      try {
        setLoading(true);
        const response = await axios.post(`/category/create-category`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.status === 200) {
          action.resetForm();
          setSubCategory([]); // 🔁 reset subcategories
          setImagePreview(uploadIcon); // 🔁 reset image
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("pic", file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
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
          <div className="flex flex-col gap-1">
            <label
              htmlFor="pic"
              className="text-white flex items-center gap-3 text-sm font-medium"
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
              onChange={handleFileChange}
              onBlur={handleBlur}
              className="hidden"
            />
            {errors.pic && touched.pic && (
              <p className="text-red-700 text-sm font-medium">{errors.pic}</p>
            )}
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
              id="subCategory"
              name="subCategoryInput" // ✅ Don't use "subCategory" here
              value={subCategoryInput}
              onChange={(e) => setSubCategoryInput(e.target.value)}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none rounded-[14px] placeholder:text-[#FFFFFF] text-white px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.subCategory && touched?.subCategory
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
              placeholder="Enter Subcategory"
            />

            {errors.subCategory && touched.subCategory ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.subCategory}
              </p>
            ) : null}
          </div>
          <div className="w-full mt-4 h-auto flex  justify-start items-start gap-1">
            <button
              className="w-full h-[49px] mt-4 rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
              type="button"
              onClick={() => {
                if (subCategoryInput.trim()) {
                  const updated = [...subCategory, subCategoryInput.trim()];
                  setSubCategory(updated);
                  setSubCategoryInput(""); // clear input box
                  setFieldValue("subCategory", updated); // update Formik value
                }
              }}
            >
              Add Subcategory
            </button>

            <button
              type="submit"
              className="w-full h-[49px] mt-4 rounded-[14px] bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91] text-white flex gap-2 items-center justify-center text-md font-medium"
            >
              {loading ? "Loading..." : "Save"}
            </button>
          </div>
        </form>
        <div className="inline-flex flex-col mt-3 w-full sm:w-auto flex-nowrap items-center   rounded-full p-1.5">
          <div className="flex flex-col gap-2 mt-3">
            {subCategory.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-[#434343] rounded-full px-3 py-1 text-white text-sm"
              >
                {item}
                <button
                  type="button"
                  className="ml-2"
                  onClick={() =>
                    setSubCategory(subCategory.filter((_, i) => i !== index))
                  }
                >
                  <IoMdClose className="text-white text-base" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCategory;
