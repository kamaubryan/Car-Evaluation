import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";

// import About from "../pages/About/About";
// import Services from "../pages/Services/Services";
// import Home from "../Pages/LandingPage/LandingPage";
import Contact from "../Pages/ContactsPage/Contact";
import LoginForm from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Settings from "../Pages/Settings/Settings";
import Evaluation from "../Pages/Evaluation/Evaluation";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LandingPage from "../Pages/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/evaluation",
        element: <Evaluation />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <LandingPage />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
