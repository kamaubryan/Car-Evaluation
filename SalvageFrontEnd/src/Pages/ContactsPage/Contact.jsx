import React, { useState } from "react";
import {
  SendOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Form,
  Alert,
  Card,
  Typography,
  Space,
  Row,
  Col,
} from "antd";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    setSubmitted(true);
    form.resetFields();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <Title
        level={1}
        className="text-center text-gray-800 font-semibold mb-12"
      >
        Contact Us
      </Title>
      <Row gutter={[32, 32]} justify="center">
        {/* Contact Information */}
        <Col xs={24} md={10}>
          <Card className="p-8 rounded-xl shadow-md border border-gray-200">
            <Title level={2} className="text-gray-800 font-semibold">
              Let's Connect
            </Title>
            <Paragraph className="text-gray-600 mb-8">
              Get in touch with us for any inquiries or support. We're here to
              help you succeed.
            </Paragraph>
            <Space direction="vertical" size="large">
              {[
                {
                  icon: <PhoneOutlined className="text-xl text-gray-600" />,
                  title: "Phone Number",
                  text: "+1 (555) 123-4567",
                },
                {
                  icon: <MailOutlined className="text-xl text-gray-600" />,
                  title: "Email Address",
                  text: "contact@company.com",
                },
                {
                  icon: (
                    <ClockCircleOutlined className="text-xl text-gray-600" />
                  ),
                  title: "Business Hours",
                  text: "Mon - Fri: 9:00 AM - 6:00 PM",
                },
              ].map((info, index) => (
                <Space key={index} align="start">
                  {info.icon}
                  <div>
                    <Title level={5} className="text-gray-800">
                      {info.title}
                    </Title>
                    <Paragraph className="text-gray-600">{info.text}</Paragraph>
                  </div>
                </Space>
              ))}
            </Space>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col xs={24} md={14}>
          <Card className="p-8 rounded-xl shadow-lg border border-gray-200">
            <Title level={2} className="text-gray-800">
              Send us a Message
            </Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="mt-4"
            >
              {[
                {
                  name: "name",
                  label: "Full Name",
                  placeholder: "John Doe",
                  rules: [
                    { required: true, message: "Please enter your name" },
                  ],
                },
                {
                  name: "email",
                  label: "Email Address",
                  placeholder: "john@example.com",
                  rules: [
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ],
                },
                {
                  name: "subject",
                  label: "Subject",
                  placeholder: "How can we help?",
                  rules: [
                    { required: true, message: "Please enter a subject" },
                  ],
                },
              ].map((field, index) => (
                <Form.Item
                  key={index}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                >
                  <Input
                    placeholder={field.placeholder}
                    className="border-gray-300"
                  />
                </Form.Item>
              ))}

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Your message here..."
                  className="border-gray-300"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                block
                icon={<SendOutlined />}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send Message
              </Button>
            </Form>

            {submitted && (
              <Alert
                className="mt-4"
                message="Success!"
                description="Your message has been sent successfully. We'll get back to you soon."
                type="success"
                showIcon
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
