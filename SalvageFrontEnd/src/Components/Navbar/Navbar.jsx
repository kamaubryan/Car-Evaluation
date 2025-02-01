import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown, Avatar, Space, Typography, Badge } from "antd";
import {
  UserAddOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { LogIn, Menu } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../context/contextProvider";

function Navbar() {
  const navigate = useNavigate();
  const { logout, cart } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

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
      danger: true,
      onClick: () => {
        logout();
        localStorage.removeItem("user");
        navigate("/home");
      },
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wrecked Car
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {["Home", "Features", "About Us", "Contact Us"].map((item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/home"
                    : `/${item.toLowerCase().replace(/ /g, "")}`
                }
                className="relative group py-2"
              >
                <span className="text-gray-700 hover:text-blue-600 transition-colors">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-6">
            {user ? (
              <div className="flex items-center space-x-6">
                {/* Cart */}
                <button
                  onClick={handleCartClick}
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Badge
                    count={cart?.length || 0}
                    className="absolute -top-1 -right-1"
                  >
                    <ShoppingCartOutlined className="text-gray-700 text-xl" />
                  </Badge>
                </button>

                {/* User Menu */}
                <Dropdown
                  menu={{ items: profileMenuItems }}
                  placement="bottomRight"
                  arrow
                  trigger={["click"]}
                >
                  <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 px-3 py-1.5 rounded-full transition-colors">
                    <Avatar
                      icon={<UserOutlined />}
                      className="bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                    <span className="text-gray-700 font-medium">
                      {user?.FirstName}
                    </span>
                  </div>
                </Dropdown>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Button
                  icon={<LogIn className="w-4 h-4" />}
                  className="flex items-center space-x-2 hover:bg-gray-100 border-none shadow-none"
                  onClick={() => navigate("/login")}
                >
                  <span>Login</span>
                </Button>
                <Button
                  icon={<UserAddOutlined />}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 border-none hover:opacity-90 text-white"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-2">
          {["Home", "Features", "Why Choose Us", "About Us", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/home"
                    : `/${item.toLowerCase().replace(/ /g, "")}`
                }
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
