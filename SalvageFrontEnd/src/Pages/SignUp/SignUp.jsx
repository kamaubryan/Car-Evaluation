import React, { useState } from "react";

import { Button, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from "antd-phone-input";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to manage error messages
  const history = useNavigate(); // Get the history object for redirection
  const [form] = Form.useForm();

  const handleSignup = async (values) => {
    try {
      // Check for empty fields
      // if (
      //   !firstName ||
      //   !secondName ||
      //   !email ||
      //   !password
      // ) {
      //   setError("Please fill in all fields.");
      //   return;
      // }

      console.log(values);

      history("/landingPage");
    } catch (error) {
      // Handle signup error
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data : error.message);
    }
  };
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = async (values) => {
    const response = await axios.post(
      "http://localhost:8085/api/v1/auth/register",
      {
        values,
      }
    );
    // Handle successful signup
    console.log(response.data);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.paddingXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>
            Join us! Create an account to get started.
          </Text>
        </div>
        <Form
          name="normal_signup"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
          form={form}
        >
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your  Second Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="FirstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="secondName"
            rules={[
              {
                required: true,
                message: "Please input your second Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Second Name"
              onChange={(e) => {
                setSecondName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          
          <Form.Item
            name="username"
            rules={[
              {
                type: "username",
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
            prefix
              placeholder="username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="phonenumber"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <PhoneInput enableSearch />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit">
              Sign up
            </Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link to="/login">Sign in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
