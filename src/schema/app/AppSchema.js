import * as Yup from "yup";
export const notificationSchema = Yup.object({
  title: Yup.string().required("Notification title is required"),
  detail: Yup.string().required("Notification detail is required"),
});

export const categorySchema = Yup.object({
  name: Yup.string().required("Category Name is required"),
  pic: Yup.mixed()
    .required("Category Image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
      return value && supportedFormats.includes(value.type);
    })
    .test("fileSize", "File size is too large", (value) => {
      const maxSize = 5 * 1024 * 1024;
      return value && value.size <= maxSize;
    }),
});
