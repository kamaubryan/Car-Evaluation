import React, { useState } from "react";
import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, } = Typography;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate;
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Please enter both username and password.");
        return;
      }
      const response = await axios.post(
        "http://localhost:8085/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);
      navigate("/landingPage");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      setError("Invalid username or password.");
    }
  };
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "70vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section} className="h-[40vh]">
      <div style={styles.container} className="h-[40vh]">
        <div style={styles.header}>
          <Title style={styles.title}>Sign in</Title>
          <Text style={styles.text}>
          Welcome to Car salvage vehicle Marketplace where you can buy and sell your vehicles.
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button
              block="true"
              type="primary"
              htmlType="submit"
              onClick={handleLogin}
            >
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>{" "}
              <Link to ="/signup">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
