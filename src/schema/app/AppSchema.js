import * as Yup from "yup";
export const notificationSchema = Yup.object({
  title: Yup.string().required("Notification title is required"),
  detail: Yup.string().required("Notification detail is required"),
});
const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
export const categorySchema = Yup.object({
  name: Yup.string().required("Category Name is required"),
  pic: Yup.mixed()
    .required("Category Image is required")
    .test("fileType", "Only JPG, JPEG, PNG files are allowed", (value) => {
      return value && value.type && supportedFormats.includes(value.type);
    })
    .test("fileSize", "File size should be under 5MB", (value) => {
      const maxSize = 5 * 1024 * 1024;
      return value && value.size <= maxSize;
    }),
});
export const editCategorySchema = Yup.object({
  newName: Yup.string().required("Category Name is required"),
});

export const subCategorySchema = Yup.object({
  subcategoryname: Yup.string().required("SubCategory Name is required"),
  Categoryid: Yup.string().required("SubCategory Name is required"),
});
