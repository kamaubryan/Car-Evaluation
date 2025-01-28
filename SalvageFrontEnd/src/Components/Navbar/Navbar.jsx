// // // // import  { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import "./Navbar.css";
// // // import { Button } from "antd";
// // // import { UserAddOutlined } from "@ant-design/icons";
// // // import { LogIn } from "lucide-react";

// // // function Navbar() {
// // //   // const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   const navigate = useNavigate();

// // //   return (
// // //     <header>
// // //       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
// // //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// // //           <h1 className="lg: text-[24px] dark:text-white font-[700]">
// // //             Salvaged Cars
// // //           </h1>
// // //           <div className="flex items-center lg:order-2 gap-3">
// // //             <Button
// // //               type="dashed"
// // //               icon={<LogIn />}
// // //               onClick={() => navigate("/login")}
// // //             >
// // //               Login
// // //             </Button>
// // //             <Button
// // //               icon={<UserAddOutlined />}
// // //               type="primary"
// // //               onClick={() => navigate("/signup")}
// // //             >
// // //               signup
// // //             </Button>

// // //             {/* <Avatar
// // //               style={{
// // //                 backgroundColor: "#87d068",
// // //                 color: "#fff",
// // //               }}
// // //             ></Avatar> */}
// // //             {/* <button
// // //               data-collapse-toggle="mobile-menu-2"
// // //               type="button"
// // //               className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// // //               aria-controls="mobile-menu-2"
// // //               aria-expanded="false"
// // //             >
// // //               <span className="sr-only">Open main menu</span>
// // //               <svg
// // //                 className="w-6 h-6"
// // //                 fill="currentColor"
// // //                 viewBox="0 0 20 20"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   fill-rule="evenodd"
// // //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// // //                   clip-rule="evenodd"
// // //                 ></path>
// // //               </svg>
// // //               <svg
// // //                 className="hidden w-6 h-6"
// // //                 fill="currentColor"
// // //                 viewBox="0 0 20 20"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   fill-rule="evenodd"
// // //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// // //                   clip-rule="evenodd"
// // //                 ></path>
// // //               </svg>
// // //             </button> */}
// // //           </div>
// // //           <div
// // //             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
// // //             id="mobile-menu-2"
// // //           >
// // //             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// // //               <Link
// // //                 to="/home"
// // //                 className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
// // //               >
// // //                 Home
// // //               </Link>

// // //               <Link
// // //                 to="/cars"
// // //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// // //               >
// // //                 Cars
// // //               </Link>

// // //               <Link
// // //                 to="/parts"
// // //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// // //               >
// // //                 Parts
// // //               </Link>
// // //               <Link
// // //                 to="/about "
// // //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// // //               >
// // //                 About Us
// // //               </Link>
// // //               <Link
// // //                 to="/contact"
// // //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// // //               >
// // //                 Contact Us
// // //               </Link>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // }

// // // export default Navbar;
// //  import { Link, useNavigate } from "react-router-dom";
// //  import { Button } from "antd";
// //  import { UserAddOutlined } from "@ant-design/icons";
// //  import { LogIn } from "lucide-react";
// //  import { ShoppingCartOutlined } from "@ant-design/icons";
// //  import useCartStore from "../../Zustand/Zustand"; // Zustand for authentication
// // // Zustand for cart management
// //  import { toast } from "react-toastify";
// //  import "./Navbar.css";

// //  function Navbar() {
// //    const navigate = useNavigate();
// //    const { isAuthenticated, login, logout } = useCartStore((state) => state); // Authentication state from Zustand
// //    const { cart } = useCartStore((state) => state); // Cart state from Zustand

// //    const handleCartClick = () => {
// //      if (!isAuthenticated) {
// //        toast.error("You need to log in first!");
// //        return;
// //      }
// //      navigate("/cart");
// //    };

// //    return (
// //      <header>
// //        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
// //          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// //            <h1 className="lg: text-[24px] dark:text-white font-[700]">
// //              Salvaged Cars
// //            </h1>
// //            <div className="flex items-center lg:order-2 gap-3">
// //              {isAuthenticated ? (
// //                <>
// //                  <Button type="dashed" onClick={logout}>
// //                    Logout
// //                  </Button>
// //                  <Button
// //                    type="dashed"
// //                    icon={<ShoppingCartOutlined />}
// //                    onClick={handleCartClick}
// //                  >
// //                    Cart ({cart.length})
// //                  </Button>
// //                </>
// //              ) : (
// //                <>
// //                  <Button
// //                    type="dashed"
// //                    icon={<LogIn />}
// //                    onClick={() => navigate("/login")}
// //                  >
// //                    Login
// //                  </Button>
// //                  <Button
// //                    icon={<UserAddOutlined />}
// //                    type="primary"
// //                    onClick={() => navigate("/signup")}
// //                  >
// //                    Signup
// //                  </Button>
// //                </>
// //              )}
// //            </div>

// //            {/* Desktop Navbar Links */}
// //            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
// //              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// //                <Link
// //                  to="/home"
// //                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
// //                >
// //                  Home
// //                </Link>

// //                <Link
// //                  to="/cars"
// //                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// //                >
// //                  Cars
// //                </Link>

// //                <Link
// //                  to="/parts"
// //                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// //                >
// //                  Parts
// //                </Link>
// //                <Link
// //                  to="/about"
// //                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// //                >
// //                  About Us
// //                </Link>
// //                <Link
// //                  to="/contact"
// //                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
// //                >
// //                  Contact Us
// //                </Link>
// //              </ul>
// //            </div>
// //          </div>
// //        </nav>
// //      </header>
// //    );
// //  }

// //  export default Navbar;
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "antd";
// import { UserAddOutlined } from "@ant-design/icons";
// import { LogIn } from "lucide-react";
// import { ShoppingCartOutlined } from "@ant-design/icons";

// import useCartStore from "../../Zustand/Zustand"; // Cart store
// import { toast } from "react-toastify";
// import "./Navbar.css";

// function Navbar() {
//   const navigate = useNavigate();

//   // Authentication and cart states from Zustand
//   const { isAuthenticated, login, logout } = useCartStore((state) => state);
//   const { cart } = useCartStore((state) => state);

//   // Handle cart button click, ensure the user is logged in
//   const handleCartClick = () => {
//     if (!isAuthenticated) {
//       toast.error("You need to log in first!");
//       return;
//     }
//     navigate("/cart");
//   };

//   return (
//     <header>
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <h1 className="lg: text-[24px] dark:text-white font-[700]">
//             Salvaged Cars
//           </h1>
//           <div className="flex items-center lg:order-2 gap-3">
//             {isAuthenticated ? (
//               <>
//                 {/* Show Logout and Cart button when authenticated */}
//                 <Button type="dashed" onClick={logout}>
//                   Logout
//                 </Button>
//                 <Button
//                   type="dashed"
//                   icon={<ShoppingCartOutlined />}
//                   onClick={handleCartClick}
//                 >
//                   Cart ({cart.length})
//                 </Button>
//               </>
//             ) : (
//               <>
//                 {/* Show Login and Signup when not authenticated */}
//                 <Button
//                   type="dashed"
//                   icon={<LogIn />}
//                   onClick={() => navigate("/login")}
//                 >
//                   Login
//                 </Button>
//                 <Button
//                   icon={<UserAddOutlined />}
//                   type="primary"
//                   onClick={() => navigate("/signup")}
//                 >
//                   Signup
//                 </Button>
//               </>
//             )}
//           </div>

//           {/* Desktop Navbar Links */}
//           <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <Link
//                 to="/home"
//                 className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/cars"
//                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Cars
//               </Link>

//               <Link
//                 to="/parts"
//                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Parts
//               </Link>
//               <Link
//                 to="/about"
//                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/contact"
//                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Contact Us
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown, Avatar, Space } from "antd";
import {
  UserAddOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { LogIn } from "lucide-react";
import useCartStore from "../../Zustand/Zustand";
import { toast } from "react-toastify";
import "./Navbar.css";
import { useContext } from "react";
import CartContext from "../../context/contextProvider";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout, cart } = useContext(CartContext);

  const handleCartClick = () => {
    navigate("/cart");
  };

  // Profile menu items
  const profileMenuItems = [
    {
      key: "profile",
      label: "Profile",
      icon: <ProfileOutlined />,
      onClick: () => navigate("/profile"),
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: () => {
        logout();
        navigate("/home");
      },
    },
  ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1 className="lg: text-[24px] dark:text-white font-[700]">
            Salvaged Cars
          </h1>
          <div className="flex items-center lg:order-2 gap-3">
            {isAuthenticated ? (
              <>
                <Button
                  type="dashed"
                  icon={<ShoppingCartOutlined />}
                  onClick={handleCartClick}
                >
                  Cart ({cart.length})
                </Button>
                <Dropdown
                  menu={{ items: profileMenuItems }}
                  placement="bottomRight"
                  arrow
                >
                  <Space>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{
                        backgroundColor: "#1890ff",
                        cursor: "pointer",
                      }}
                    />
                  </Space>
                </Dropdown>
              </>
            ) : (
              <>
                <Button
                  type="dashed"
                  icon={<LogIn />}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  icon={<UserAddOutlined />}
                  type="primary"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
              </>
            )}
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Link
                to="/home"
                className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
              >
                Home
              </Link>

              <Link
                to="/cars"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cars
              </Link>

              <Link
                to="/parts"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Parts
              </Link>
              <Link
                to="/about"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
