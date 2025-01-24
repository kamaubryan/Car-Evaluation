import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";

// import About from "../pages/About/About";
// import Services from "../pages/Services/Services";
// import Home from "../Pages/LandingPage/LandingPage";
import Contact from "../Pages/ContactsPage/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import Settings from "../Pages/Settings/Settings";
import Evaluation from "../Pages/Evaluation/Evaluation";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LandingPage from "../Pages/LandingPage/LandingPage";
import PageNotFound from "../Pages/Page_Not_Found/PageNotFound";
import Login from "../Pages/Login/Login";

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
        element: <Login />,
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
        element: <PageNotFound />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
