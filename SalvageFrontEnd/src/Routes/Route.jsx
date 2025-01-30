import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/ContactsPage/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";

import PageNotFound from "../Pages/Page_Not_Found/PageNotFound";
import AuthGuard from "../Components/Private/AuthGuard";
import AdminLayout from "../AdminDashboard/AdminLayout";
import AdminDashBoard from "../AdminDashboard/DashBoard/AdminDashboard";

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
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <AboutUs /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <AdminLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/dashboard",
        index: true,
        element: <AdminDashBoard />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
