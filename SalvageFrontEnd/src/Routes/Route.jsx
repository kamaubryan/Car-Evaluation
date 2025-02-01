import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/ContactsPage/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";

import PageNotFound from "../Pages/Page_Not_Found/PageNotFound";
import AuthGuard from "../Components/Private/AuthGuard";
import AdminLayout from "../AdminDashboard/AdminLayout";
import UserDashboard from "../UserDashboard/UserDashboard";
import PartModal from "../Components/Modals/AddPartsModal";
import { RoleSelection } from "../Pages/SignUp/RoleSelection";
import { SignUp } from "../Pages/SignUp/SIgnUp";
import { CarAdmin } from "../AdminDashboard/Components/CarAdmin";
import PartsAdminPage from "../AdminDashboard/PartsAdminPage/PartsAdminPage";
import CarsAdminPage from "../AdminDashboard/CarsAdminPage/CarsAdminPage";
import UsersAdminPage from "../AdminDashboard/UsersAdminPage.jsx/UsersAdminPage";
import Features from "../Pages/Features/Features";
import ContactUs from "../Pages/ContactsPage/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage />,
      },
      { path: "/home", element: <LandingPage /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "*", element: <PageNotFound /> },
      { path: "/features", element: <Features /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <RoleSelection /> },
  { path: "/signup/buyer", element: <SignUp role={"buyer"} /> },
  { path: "/signup/dealer", element: <SignUp role={"dealer"} /> },

  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <AdminLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/dashboard/parts",
        element: <PartsAdminPage />,
      },
      {
        path: "/dashboard/cars",
        element: <CarsAdminPage />,
      },
      {
        path: "/dashboard/users",
        element: <UsersAdminPage />,
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/userdashboard",
    element: (
      <AuthGuard>
        <UserDashboard />
      </AuthGuard>
    ),
    children: [],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
