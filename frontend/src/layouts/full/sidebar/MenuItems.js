import {
  IconLayoutDashboard,
  IconUsers,
  IconBriefcase,
  IconNews,
  IconUsersPlus,
  IconDoorExit,
  IconRun,
  IconReport,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
    access: ["ANY"],
  },
  {
    id: uniqueId(),
    title: "Employees",
    icon: IconUsers,
    href: "/employees",
    access: ["ADMIN"],
  },
  {
    id: uniqueId(),
    title: "Vacancy",
    icon: IconBriefcase,
    href: "/vacancy",
    access: ["ANY"],
  },
  {
    id: uniqueId(),
    title: "News",
    icon: IconNews,
    href: "/news",
    access: ["ANY"],
  },
  {
    id: uniqueId(),
    title: "Applicants",
    icon: IconUsersPlus,
    href: "/vacancy/applicants",
    access: ["ADMIN", "HR_MANAGER"],
  },
  {
    id: uniqueId(),
    title: "Leave Requests",
    icon: IconDoorExit,
    href: "/leave-requests",
    access: ["ADMIN", "HR_MANAGER"],
  },
  {
    id: uniqueId(),
    title: "Leave Requests History",
    icon: IconDoorExit,
    href: "/leave-requests/history",
    access: ["EMPLOYEE"],
  },
  {
    id: uniqueId(),
    title: "Training Programs",
    icon: IconRun,
    href: "/training",
    access: ["ADMIN", "HR_MANAGER", "EMPLOYEE"],
  },
  // {
  //   id: uniqueId(),
  //   title: "My Trainings",
  //   icon: IconRun,
  //   href: "/trainings/my-trainings",
  // },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconReport,
    href: "/reports",
    access: ["ADMIN", "HR_MANAGER"],
  },
];

export default Menuitems;
