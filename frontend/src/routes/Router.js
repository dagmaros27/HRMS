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

//employee routes
const Employees = Loadable(lazy(() => import("../views/employees/employees")));
const AddEmployee = Loadable(
  lazy(() => import("../views/employees/addEmployee"))
);
const EditEmployee = Loadable(
  lazy(() => import("../views/employees/editEmployee"))
);

//vacancy routes
const Vacancy = Loadable(lazy(() => import("../views/vacancy/vacancy")));
const VacancyApply = Loadable(
  lazy(() => import("../views/vacancy/vacancyApply"))
);
const AddVacancy = Loadable(lazy(() => import("../views/vacancy/addVacancy")));

//news routes
const News = Loadable(lazy(() => import("../views/news/news")));
const NewsDescription = Loadable(
  lazy(() => import("../views/news/newsDescription"))
);
const PostNews = Loadable(lazy(() => import("../views/news/addNews")));

//application routes
const Applicants = Loadable(
  lazy(() => import("../views/application/applications"))
);
const ApplicantDetails = Loadable(
  lazy(() => import("../views/application/applicationDescription"))
);

//leave request routes
const LeaveRequests = Loadable(
  lazy(() => import("../views/leave-request/leaveRequests"))
);

const LeaveRequestHistory = Loadable(
  lazy(() => import("../views/leave-request/leaveRequestHistory"))
);

const AddLeaveRequest = Loadable(
  lazy(() => import("../views/leave-request/addLeaveRequest"))
);

const LeaveRequestDescription = Loadable(
  lazy(() => import("../views/leave-request/leaveRequestDescription"))
);

//training routes
const Training = Loadable(lazy(() => import("../views/training/training")));
const AddTraining = Loadable(
  lazy(() => import("../views/training/addTraining"))
);

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
      {
        path: "/news",
        exact: true,
        element: <News />,
      },
      {
        path: "/news/:id",
        exact: true,
        element: <NewsDescription />,
      },
      {
        path: "/news/post",
        exact: true,
        element: <PostNews />,
      },
      {
        path: "/vacancy/applicants",
        exact: true,
        element: <Applicants />,
      },
      {
        path: "/vacancy/applicants/:id",
        exact: true,
        element: <ApplicantDetails />,
      },
      {
        path: "/leave-requests",
        exact: true,
        element: <LeaveRequests />,
      },
      {
        path: "/leave-requests/add",
        exact: true,
        element: <AddLeaveRequest />,
      },
      {
        path: "/leave-requests/history",
        exact: true,
        element: <LeaveRequestHistory />,
      },
      {
        path: "/leave-requests/:id",
        exact: true,
        element: <LeaveRequestDescription />,
      },
      {
        path: "/training",
        exact: true,
        element: <Training />,
      },
      {
        path: "/training/add",
        exact: true,
        element: <AddTraining />,
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
