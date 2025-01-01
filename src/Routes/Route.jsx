
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";

// import About from "../pages/About/About";
// import Services from "../pages/Services/Services";
import Home from "../Pages/LandingPage/LandingPage";
import Contact from "../Pages/ContactsPage/Contact";
import LoginForm from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
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
      // {
      //   path: "*",
      //   element: <Services />,
      // },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
