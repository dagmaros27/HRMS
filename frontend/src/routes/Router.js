import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/full/shared/loadable/Loadable";
import { exact } from "prop-types";

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import("../layouts/full/FullLayout")));
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank/BlankLayout"))
);
const ProtectedRoute = Loadable(
  lazy(() => import("../layouts/protected/ProtectedRoute.js"))
);

/* ****Pages***** */
// const Dashboard = Loadable(lazy(() => import("../views/dashboard/Dashboard")));
// const SamplePage = Loadable(
//   lazy(() => import("../views/sample-page/SamplePage"))
// );
// const Icons = Loadable(lazy(() => import("../views/icons/Icons")));
// const TypographyPage = Loadable(
//   lazy(() => import("../views/utilities/TypographyPage"))
// );
// const Shadow = Loadable(lazy(() => import("../views/utilities/Shadow")));
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

const Attendance = Loadable(
  lazy(() => import("../views/attendance/attendance"))
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
const MyTrainings = Loadable(
  lazy(() => import("../views/training/myTrainings"))
);

//report routes
const Report = Loadable(lazy(() => import("../views/report/report")));
const ReportDetails = Loadable(
  lazy(() => import("../views/report/reportDetails"))
);

//user routes
const UserProfile = Loadable(
  lazy(() => import("../views/profile/userProfile"))
);

const Router = (userRole) => {
  return [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Navigate to="/news" /> },
        {
          path: "/employees",
          exact: true,
          element: (
            <ProtectedRoute
              element={<Employees />}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/employees/attendance",
          exact: true,
          element: (
            <ProtectedRoute
              element={<Attendance />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/add-employee",
          exact: true,
          element: (
            <ProtectedRoute
              element={<AddEmployee />}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/edit-employee/:id",
          exact: true,
          element: (
            <ProtectedRoute
              element={<EditEmployee />}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/profile",
          exact: true,
          element: (
            <ProtectedRoute
              element={<UserProfile />}
              allowedRoles={["ANY"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/vacancy",
          exact: true,
          element: (
            <ProtectedRoute
              element={<Vacancy />}
              allowedRoles={["ANY"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/vacancy/apply/:id",
          exact: true,
          element: (
            <ProtectedRoute
              element={<VacancyApply />}
              allowedRoles={["ANY"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/vacancy/add",
          exact: true,
          element: (
            <ProtectedRoute
              element={<AddVacancy />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/news",
          exact: true,
          element: (
            <ProtectedRoute
              element={<News />}
              allowedRoles={["ANY"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/news/:id",
          exact: true,
          element: (
            <ProtectedRoute
              element={<NewsDescription />}
              allowedRoles={["ANY"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/news/post",
          exact: true,
          element: (
            <ProtectedRoute
              element={<PostNews />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/vacancy/:vacancyId/applicants",
          exact: true,
          element: (
            <ProtectedRoute
              element={<Applicants />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/vacancy/:vacancyId/applicants/:id",
          exact: true,
          element: (
            <ProtectedRoute
              element={<ApplicantDetails />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/leave-requests",
          exact: true,
          element: (
            <ProtectedRoute
              element={<LeaveRequests />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/leave-requests/add",
          exact: true,
          element: (
            <ProtectedRoute
              element={<AddLeaveRequest />}
              allowedRoles={["ADMIN", "HR_MANAGER", "EMPLOYEE"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/leave-requests/history",
          exact: true,
          element: (
            <ProtectedRoute
              element={<LeaveRequestHistory />}
              allowedRoles={["ADMIN", "HR_MANAGER", "EMPLOYEE"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/leave-requests/:id",
          exact: true,
          element: (
            <ProtectedRoute
              element={<LeaveRequestDescription />}
              allowedRoles={[" ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/training",
          exact: true,
          element: (
            <ProtectedRoute
              element={<Training />}
              allowedRoles={["ANY"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/training/add",
          exact: true,
          element: (
            <ProtectedRoute
              element={<AddTraining />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/training/:id/my-trainings",
          exact: true,
          element: (
            <ProtectedRoute
              element={<MyTrainings />}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/reports",
          exact: true,
          element: (
            <ProtectedRoute
              element={<Report />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
        },
        {
          path: "/reports/:id",
          exact: true,
          element: (
            <ProtectedRoute
              element={<ReportDetails />}
              allowedRoles={["ADMIN", "HR_MANAGER"]}
              userRole={userRole}
            />
          ),
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
};

export default Router;
