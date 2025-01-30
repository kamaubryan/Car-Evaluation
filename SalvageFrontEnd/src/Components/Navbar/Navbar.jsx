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
          <Link
            to="/home"
            className="lg: text-[24px] dark:text-white font-[700]"
          >
            Salvaged Cars
          </Link>
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
                to="/features"
                className="block py-2 pr-4 pl-3 text-black  hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Features
              </Link>

              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700   lg:hover:text-white lg:p-0 dark:text-gray-400 lg:dark:hover:text-whitedark:hover:text-white "
              >
                Why Choose Us
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
