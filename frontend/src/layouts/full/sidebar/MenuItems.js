import {
  IconLayoutDashboard,
  IconUsers,
  IconBriefcase,
  IconNews,
  IconUsersPlus,
  IconDoorExit,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: "User Control",
  },
  {
    id: uniqueId(),
    title: "Employees",
    icon: IconUsers,
    href: "/employees",
  },
  {
    id: uniqueId(),
    title: "Vacancy",
    icon: IconBriefcase,
    href: "/vacancy",
  },
  {
    id: uniqueId(),
    title: "News",
    icon: IconNews,
    href: "/news",
  },
  {
    id: uniqueId(),
    title: "Applicants",
    icon: IconUsersPlus,
    href: "/vacancy/applicants",
  },
  {
    id: uniqueId(),
    title: "Leave Requests",
    icon: IconDoorExit,
    href: "/leave-requests",
  },
  {
    id: uniqueId(),
    title: "Leave Requests History",
    icon: IconDoorExit,
    href: "/leave-requests/history",
  },
];

export default Menuitems;
