import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/full/shared/loadable/Loadable";
import { exact } from "prop-types";

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import("../layouts/full/FullLayout")));
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank/BlankLayout"))
);

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import("../views/dashboard/Dashboard")));
const SamplePage = Loadable(
  lazy(() => import("../views/sample-page/SamplePage"))
);
const Icons = Loadable(lazy(() => import("../views/icons/Icons")));
const TypographyPage = Loadable(
  lazy(() => import("../views/utilities/TypographyPage"))
);
const Shadow = Loadable(lazy(() => import("../views/utilities/Shadow")));
const Error = Loadable(lazy(() => import("../views/authentication/Error")));
const Register = Loadable(
  lazy(() => import("../views/authentication/Register"))
);
const Login = Loadable(lazy(() => import("../views/authentication/Login")));

const Employees = Loadable(lazy(() => import("../views/employees/employees")));
const AddEmployee = Loadable(
  lazy(() => import("../views/employees/addEmployee"))
);
const EditEmployee = Loadable(
  lazy(() => import("../views/employees/editEmployee"))
);

const Vacancy = Loadable(lazy(() => import("../views/vacancy/vacancy")));
const VacancyApply = Loadable(
  lazy(() => import("../views/vacancy/vacancyApply"))
);
const AddVacancy = Loadable(lazy(() => import("../views/vacancy/addVacancy")));

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/sample-page", exact: true, element: <SamplePage /> },
      { path: "/icons", exact: true, element: <Icons /> },
      { path: "/ui/typography", exact: true, element: <TypographyPage /> },
      { path: "/ui/shadow", exact: true, element: <Shadow /> },
      { path: "/employees", exact: true, element: <Employees /> },
      { path: "/add-employee", exact: true, element: <AddEmployee /> },
      { path: "/edit-employee/:id", exact: true, element: <EditEmployee /> },
      { path: "/vacancy", exact: true, element: <Vacancy /> },
      {
        path: "/vacancy/apply/:id",
        exact: true,
        element: <VacancyApply />,
      },
      {
        path: "/vacancy/add",
        exact: true,
        element: <AddVacancy />,
      },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      { path: "404", element: <Error /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/login", element: <Login /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
