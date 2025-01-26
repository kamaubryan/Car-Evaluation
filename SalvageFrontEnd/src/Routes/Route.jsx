import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthGuard from "../AuthGuard";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/ContactsPage/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Layout from "../Layout/Layout";
import Services from "../Pages/Services/Services";
import CarList from "../Pages/Cars/Car";
import Parts from "../Pages/Parts/Parts";
import PageNotFound from "../Pages/Page_Not_Found/PageNotFound";

// ... other imports

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/home", element: <LandingPage /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <Services /> },

      // Protected routes
      // {
      //   path: "/evaluation",
      //   element: (
      //     <AuthGuard>
      //       <Evaluation />
      //     </AuthGuard>
      //   ),
      // },
      {
        path: "/cars",
        element: (
          <AuthGuard>
            <CarList />
          </AuthGuard>
        ),
      },
      {
        path: "/parts",
        element: (
          <AuthGuard>
            <Parts />
          </AuthGuard>
        ),
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
