import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email"),
  password: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(8, "Password must contain atleast 8 alphanumeric characters.")
    .required("Please enter your password"),
});

export const ForgotSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email"),
});

export const ChangedSchema = Yup.object({
  password: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(8, "Password must contain atleast 8 alphanumeric characters.")
    .required("Please enter your password"),
  confirmpassword: Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please enter your password"),
});

export const UpdateSchema = Yup.object({
  oldPassword: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(8, "Password must contain atleast 8 alphanumeric characters.")
    .required("Please enter your password"),
  newPassword: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(8, "Password must contain atleast 8 alphanumeric characters.")
    .required("Please enter your password"),
  reEnterPassword: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(8, "Password must contain atleast 8 alphanumeric characters.")
    .required("Please enter your password"),
});
