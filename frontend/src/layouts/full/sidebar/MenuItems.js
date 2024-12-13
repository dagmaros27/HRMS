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
  {
    id: uniqueId(),
    title: "Training Programs",
    icon: IconRun,
    href: "/training",
  },
  {
    id: uniqueId(),
    title: "My Trainings",
    icon: IconRun,
    href: "/trainings/my-trainings",
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconReport,
    href: "/reports",
  },
];

export default Menuitems;
