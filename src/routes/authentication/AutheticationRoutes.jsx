import ForgotPassword from "../../pages/authentication/ForgotPassword";
import VerifyOtp from "../../pages/authentication/VerifyOtp";
import ChangePassword from "../../pages/authentication/ChangePassword";
import Login from "../../pages/authentication/Login";

export const authRoutes = [
  {
    url: "login",
    page: Login,
    name: "Login",
    isPublic: true,
  },
  {
    url: "forgotpassword",
    page: ForgotPassword,
    name: "Forgot Password",
    isPublic: true,
  },
  {
    url: "verifyOtp",
    page: VerifyOtp,
    name: "Verify OTP",
    isPublic: true,
  },
  {
    url: "changePassword",
    page: ChangePassword,
    name: "Change Password",
    isPublic: true,
  },
];
