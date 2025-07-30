import Category from "../../pages/app/category/Category";
import Chat from "../../pages/app/chat/Chat";
import Dashboard from "../../pages/app/dashboard/Dashboard";
import EventDetail from "../../pages/app/event/EventDetail";
import Event from "../../pages/app/event/Events";
import Help from "../../pages/app/help/Help";
import PushNotification from "../../pages/app/pushNotification/PushNotification";
import Report from "../../pages/app/report/Report";
import User from "../../pages/app/user/User";
import UserDetail from "../../pages/app/user/UserDetail";
import InAppChangedPassword from "../../pages/authentication/InAppChangedPassword";

const appRoutes = [
    {
      url: "dashboard",
      page: Dashboard,
      name: "Dashboard"
    },
    {
      url: "users",
      page: User,
      name: "Users"
    },
    {
      url: "users/:id",
      page: UserDetail,
      name: "Users Detail"
    },
    {
      url: "updatePassword",
      page: InAppChangedPassword,
      name: "Update Password"
    },
    {
      url: "pushNotification",
      page: PushNotification,
      name: "Push Notification"
    },
    {
      url: "category",
      page: Category,
      name: "Category"
    },
    {
      url: "events",
      page: Event,
      name: "Events"
    },
    {
      url: "events/:id",
      page: EventDetail,
      name: "Events Detail"
    },
    {
      url: "report",
      page: Report,
      name: "Report"
    },
    {
      url: "help",
      page: Help,
      name: "Help"
    },
    {
      url: "chat",
      page: Chat,
      name: "Chat"
    }
  ];

  export default appRoutes;