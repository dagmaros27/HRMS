import {
  IconCopy,
  IconLayoutDashboard,
  IconUsers,
  IconBriefcase,
  IconNews,
  IconUsersPlus,
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
];

export default Menuitems;
