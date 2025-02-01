import React, { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  HomeOutlined,
  CarOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Avatar, Dropdown } from "antd";

import { useNavigate } from "react-router-dom";
import CartContext from "../context/contextProvider";

const { Header, Sider, Content } = Layout;

const UserDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { logout } = useContext(CartContext);
  const navigate = useNavigate();
  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: () => {
        logout(), navigate("/home");
      },
    },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === "profile") {
      // Handle profile navigation
      console.log("Navigate to profile");
    } else if (key === "logout") {
      // Handle logout
      console.log("Logout user");
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <CarOutlined />,
              label: "Cars",
            },
            {
              key: "3",
              icon: <PartitionOutlined />,
              label: "Parts",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            placement="bottomRight"
            arrow
            trigger={["hover"]}
          >
            <Avatar
              style={{
                marginRight: "24px",
                cursor: "pointer",
                backgroundColor: "#1890ff",
              }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "calc(100vh - 112px)", // Subtracting header height and margins
            overflow: "auto",
          }}
        ></Content>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
