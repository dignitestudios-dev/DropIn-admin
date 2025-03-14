import { category, categoryWhite, dashboard, dashboardWhite, event, eventWhite, help, helpWhite, notification, notificationWhite, report, reportWhite, user, userWhite } from "../assets/export";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: dashboard,
    whiteIcon:dashboardWhite,
    link: "/dashboard",
  },
  {
    title: "Users",
    icon: user,
    whiteIcon:userWhite,
    link: "/users",
  },
  {
    title: "Events",
    icon: event,
    whiteIcon:eventWhite,
    link: "/events",
  },
  {
    title: "Reports",
    icon: report,
    whiteIcon:reportWhite,
    link: "/report",
  },
  {
    title: "Push Notification",
    icon: notification,
    whiteIcon:notificationWhite,
    link: "/pushNotification",
  },
  {
    title: "Category",
    icon: category,
    whiteIcon:categoryWhite,
    link: "/category",
  },
  {
    title: "Help & Feedback",
    icon: help,
    whiteIcon:helpWhite,
    link: "/help",
  },
];
