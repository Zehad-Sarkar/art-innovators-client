import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/SignUp/SignUp";
import Instructors from "../Pages/AllInstructors/Instructors";
import Classes from "../Pages/AllClasses/Classes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyClass from "../Shared/DashBoards/Students/MyClasses/MyClass";
import EnrolledClass from "../Shared/DashBoards/Students/EnrollCLasses/EnrolledClass";
import PaymentHistory from "../Shared/DashBoards/Students/PaymentHistory/PaymentHistory";
import AddClass from "../Shared/DashBoards/Instructors/AddClass/AddClass";
import InsMyClass from "../Shared/DashBoards/Instructors/InsMyClass/InsMyClass";
import TotalEnrolled from "../Shared/DashBoards/Instructors/TotalEnrolled/TotalEnrolled";
import ProtectedRoute from "./ProtectedRoute";
import ManageUsers from "../Shared/DashBoards/Admin/ManageUser/ManageUsers";
import ManageClass from "../Shared/DashBoards/Admin/ManageClass/ManageClass";
import Feedback from "../Shared/DashBoards/Admin/ManageClass/Feedback";
import Payment from "../Shared/Payment/Payment";
import UpdateClass from "../Shared/DashBoards/Instructors/InsMyClass/UpdateClass/UpdateClass";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />,
      </ProtectedRoute>
    ),
    children: [
      {
        path: "myclasses",
        element: <MyClass />,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClass />,
      },
      {
        path: "history",
        element: <PaymentHistory />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "/dashboard/updateClass/:id",
        element: <UpdateClass />,
      },
      {
        path: "insmyclass",
        element: <InsMyClass />,
      },
      {
        path: "totalenrolled",
        element: <TotalEnrolled />,
      },
      {
        path: "manageclass",
        element: <ManageClass />,
      },
      {
        path: "manageuser",
        element: <ManageUsers />,
      },
      {
        path: "feedback/:id",
        element: <Feedback />,
      },
    ],
  },
]);
