import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { onMessageListener } from "../firebase/messages";
// import getFCMToken from "../firebase/getFcmToken";
import Cookies from "js-cookie";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [updatePasswordSuccessfully, setUpdatePasswordSuccessfully] =
    useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(JSON.parse(Cookies.get("user")));

  const handleLogin = (data) => {
    Cookies.set("token", data?.token);
    Cookies.set("user", JSON.stringify(data?.user));
    setToken(data?.token);
    setUser(data?.user);
  };

  const hadleLogout = () => {
    setToken(null);
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/auth/login");
  };

  const getToken = () => {
    setToken(Cookies.get("token"));
    setUser(JSON.parse(Cookies.get("user")));
  };
  useEffect(() => {
    getToken();
  }, []);

console.log(user,"user11111111")
  // Send fcm to backend:
  // const fetchToken = async () => {
  //   const token = await getFCMToken();
  //   const authToken = Cookies.get("token");
  //   if (!authToken) {
  //     ErrorToast("Un authorized | Please relogin.");
  //     navigate("/login");
  //   } else if (authToken && token) {
  //     const response = await axios.post(`/auth/updateFCM`, {
  //       fcmToken: token,
  //     });
  //   }

  // You can send this token to your server or use it as needed

  // onMessageListener()
  //   .then((payload) => {
  //     const data = JSON.parse(payload?.data?.data);
  //     let route = null;
  //     if (data?.type == "booking") {
  //       route = `/rental-tracking/${data?.booking?._id}`;
  //     } else if (data?.type == "product") {
  //       route = `/products/${data?.product?._id}`;
  //     } else if (data?.type == "chat") {
  //       route = `/messages/${data?.chatUser?.chatId}`;
  //     } else {
  //       // WarningToast("Can't route. Something went wrong.");
  //       return;
  //     }
  //     NotificationToast({
  //       title: payload.notification.title,
  //       message: payload.notification.body,
  //       route: route,
  //     });
  //   })
  //   .catch((err) => console.log("failed: ", err));

  const dummyVar = null;

  return (
    <AppContext.Provider
      value={{
        dummyVar,
        setUpdatePasswordSuccessfully,
        updatePasswordSuccessfully,
        setLogOutModal,
        logOutModal,
        handleLogin,
        token,
        user,
        hadleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
