import { LogoutOutlined, ProfileOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Space } from 'antd';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/contextProvider';

function Navbar1() {
     const { isAuthenticated, logout, cart } = useContext(CartContext);
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
    const navigate = useNavigate();
     const handleCartClick = () => {
       navigate("/cart");
     };
  return (
    <>
      <header>
        <navbar>
          <div className="flex justify-between px-6 bg-indigo-500 items-center py-4">
            <div className="flex space-x-4 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 cursor-pointer text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </div>
              <h1 className="text-white font-bold text-xl tracking-wide cursor-pointer">
                Tubemixza
              </h1>
            </div>
            <ul className="flex space-x-6">
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
            </ul>
          </div>
        </navbar>
        <navbar>
          <div className="absolute top-0 w-60 bg-white p-6">
            <div className="flex space-x-6 mb-6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </span>
              <h1>Dashboard</h1>
            </div>
            <ul className="flex flex-col space-y-6 mt-14 border-t py-6">
              <li className="hover:bg-red-500 transition duration-500">Home</li>
              <li className="">Products</li>
              <li className="">About</li>
              <li className="">Contact</li>
              <li className="">Logout</li>
            </ul>
          </div>
        </navbar>
      </header>
    </>
  );
}

export default Navbar1