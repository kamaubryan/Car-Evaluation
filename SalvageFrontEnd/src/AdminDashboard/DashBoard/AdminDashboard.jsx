import React, { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  CarOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Space,
  Typography,
  Tooltip,
} from "antd";
import { FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import CartContext from "../../context/contextProvider";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminDashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useContext(CartContext);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const items = [
    {
      key: "profile",
      icon: (
        <Tooltip
          title="Feature coming soon"
          placement="left"
          overlayInnerStyle={{
            backgroundColor: "#e0f2fe", // Light blue background
            color: "#0369a1", // Dark blue text
            borderRadius: "8px", // Rounded edges
            padding: "6px 12px", // Proper spacing
            fontWeight: "500", // Bold text for readability
          }}
        >
          <span className="cursor-not-allowed text-gray-400">
            <UserOutlined />
          </span>
        </Tooltip>
      ),
      label: (
        <Tooltip
          title="Feature coming soon"
          placement="left"
          overlayInnerStyle={{
            backgroundColor: "#e0f2fe",
            color: "#0369a1",
            borderRadius: "8px",
            padding: "6px 12px",
            fontWeight: "500",
          }}
        >
          <span className="cursor-not-allowed text-gray-400">Profile</span>
        </Tooltip>
      ),
      disabled: true,
    },
    { type: "divider" },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
      label: "Logout",
      onClick: () => {
        logout();
        navigate("/home");
      },
    },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === "profile") navigate("/dashboard/profile");
    else if (key === "logout") localStorage.removeItem("user");
  };

  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-gray-900"
      >
        <div className="" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="bg-gray-900 lg:pt-10 text-[18px] block gap-4"
          items={[
            {
              key: "1",
              icon: <CarOutlined />,
              label: "Cars",
              onClick: () => {
                console.log("Navigating to /dashboard/cars...");
                navigate("/dashboard/cars");
              },
            },
            {
              key: "2",
              icon: <PartitionOutlined />,
              label: "Parts",
              onClick: () => navigate("/dashboard/parts"),
            },
            {
              key: "3",
              icon: <FaUsers />,
              label: "Users",
              onClick: () => navigate("/dashboard/users"),
            },
            {
              key: "4",
              icon: <CiSettings />,
              label: (
                <Tooltip
                  title="Features coming soon"
                  placement="right"
                  overlayInnerStyle={{
                    backgroundColor: "#e0f2fe", // Light blue background
                    color: "#0369a1", // Dark blue text
                    borderRadius: "8px", // Rounded corners
                    padding: "6px 12px", // Padding for better spacing
                    fontWeight: "500", // Slightly bold text
                  }}
                >
                  <span className="cursor-not-allowed text-gray-400">
                    Settings
                  </span>
                </Tooltip>
              ),
              onClick: () => navigate("/dashboard/settings"),
              disabled: true,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="flex justify-between items-center bg-white px-4 shadow-md">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-xl w-16 h-16"
          />
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            placement="bottomRight"
            arrow
          >
            <Space className="cursor-pointer">
              <Avatar className="bg-blue-500">
                <UserOutlined />
              </Avatar>
              <Typography>{user?.FirstName}</Typography>
            </Space>
          </Dropdown>
        </Header>
        <Content className="m-6 p-6 min-h-[calc(100vh-112px)] bg-white rounded-lg shadow overflow-auto">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
