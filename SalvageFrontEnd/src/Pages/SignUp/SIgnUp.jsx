import { Form, Input, Typography, Button, Space } from "antd";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Services/auth.api";
import { useState } from "react";

const { Title, Text } = Typography;

export function SignUp({ role }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const roleType = role === "buyer" ? "USER" : "ADMIN";
      await registerUser(
        values.username,
        values.email,
        values.password,
        values.firstName,
        roleType,
        values.phoneNumber
      );
      navigate("/login");
    } catch (error) {
      setError(error.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center justify-center">
        <img
          src="/assets/heroCar.jpeg" // Replace with actual image
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 bg-white">
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <Title level={2} className="text-gray-800">
              Register
            </Title>
            <Text className="text-gray-500">
              Join Car Salvage Marketplace. Buy and sell vehicles with ease.
            </Text>
          </div>

          {error && (
            <Text type="danger" className="block mb-4 text-red-500">
              {error}
            </Text>
          )}

          <Form
            form={form}
            name="signup"
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="First Name" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input a valid email!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your Phone Number!" },
              ]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <Button
                  key="submit"
                  type="primary"
                  block
                  htmlType="submit"
                  className="h-12 text-lg bg-blue-500 hover:bg-blue-600"
                >
                  Sign Up
                </Button>
                <Button
                  block
                  type="default"
                  onClick={() => navigate("/")}
                  className="h-12 text-lg border-gray-400"
                >
                  Back to Home
                </Button>
              </Space>
            </Form.Item>

            <div className="text-center">
              <Text>Already have an account?</Text>{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
