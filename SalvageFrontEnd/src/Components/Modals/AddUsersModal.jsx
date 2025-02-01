import { PlusOutlined } from "@ant-design/icons";
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormDigit,
} from "@ant-design/pro-components";
import { Button, Form, message } from "antd";
import { PostUsers } from "../../Pages/Services/auth.api";

export default function UserModal() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    console.log("Submitting values:", values);

    try {
      await PostUsers(
        values.email,
        values.password,
        values.username,
        values.firstName,
        values.phoneNumber,
        values.role,
        new Date(), // createdAt
        new Date() // updatedAt
      );
      message.success("User added successfully");
      return true;
    } catch (error) {
      message.error(error.message);
      return false;
    }
  };

  return (
    <ModalForm
      title="Add New User"
      trigger={
        <Button type="primary">
          <PlusOutlined /> Add User
        </Button>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log("Modal closed"),
        cancelText: "Cancel",
        okText: "Save",
      }}
      onFinish={handleSubmit}
    >
      <ProForm.Group>
        <ProFormText
          name="username"
          label="Username"
          placeholder="Enter username"
          rules={[{ required: true, message: "Please enter the username" }]}
        />
        <ProFormText
          name="email"
          label="Email"
          placeholder="Enter email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          label="Password"
          placeholder="Enter password"
          rules={[{ required: true, message: "Please enter a password" }]}
        />
        <ProFormText
          name="firstName"
          label="First Name"
          placeholder="Enter first name"
          rules={[{ required: true, message: "Please enter the first name" }]}
        />
        <ProFormText
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter phone number"
          rules={[{ required: true, message: "Please enter a phone number" }]}
        />
        <ProFormText
          name="role"
          label="Role"
          placeholder="Enter user role (e.g., Admin, User)"
          rules={[{ required: true, message: "Please enter the user role" }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
}
