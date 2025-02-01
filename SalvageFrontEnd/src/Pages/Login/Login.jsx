import React, { useContext, useState, useCallback } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import { LeftOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import CartContext from "../../context/contextProvider";
import { loginUser } from "../Services/auth.api";

const { Text, Title } = Typography;

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(CartContext);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        const response = await loginUser(values.email, values.password);
        if (response) {
          const userData = response?.data;
          const firstName = userData?.FirstName || "User"; // Extract FirstName from response

          // Check if the user exists in localStorage
          const existingUser = localStorage.getItem(`user_${userData?.Email}`);

          if (existingUser) {
            message.success(`Welcome back, ${firstName}! 🎉`);
            localStorage.setItem(`user_${userData?.Email}`, "exists");
          } else {
            message.success(`Welcome back, ${firstName}! 😊`);
          }

          localStorage.setItem("user", JSON.stringify(userData));
          login();

          if (userData?.Role === "ADMIN") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }
      } catch (err) {
        message.error(
          err.response?.data?.message || "Invalid email or password"
        );
        setError(err.response?.data?.message || "Invalid email or password");
      }
    },
    [login, navigate]
  );
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center justify-center">
        <img
          src="/assets/heroCar.jpeg"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 bg-white">
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <Title level={3} className="text-gray-800">
              Login to your account
            </Title>
            <Text className="text-gray-500">
              Welcome to Car Salvage Marketplace. Buy and sell vehicles easily.
            </Text>
          </div>

          {error && (
            <Text type="danger" className="block mb-4 text-red-500">
              {error}
            </Text>
          )}

          <Form
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                className="w-full"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Enter your password" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                className="w-full"
              />
            </Form.Item>

            <Form.Item>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <Button
                block
                type="primary"
                htmlType="submit"
                className="h-12 text-lg bg-blue-500 hover:bg-blue-600"
              >
                Log in
              </Button>

              {/* add a back button to home */}
              <Button
                block
                type="default"
                onClick={() => navigate("/")}
                className="h-12 text-lg border-gray-400"
              >
                Back to Home
              </Button>
            </Space>
            <div className="mt-4 text-center">
              <Text className="text-gray-500">Don't have an account? </Text>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
