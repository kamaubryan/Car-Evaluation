
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";

// import About from "../pages/About/About";
// import Services from "../pages/Services/Services";
// import Home from "../pages/Home/Home";
import Contact from "../Pages/ContactsPage/Contact";
import LoginForm from "../Pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "",
      //   element: <Home />,
      // },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/services",
      //   element: <Services />,
      // },
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
