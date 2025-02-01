import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { EditOutlined } from "@ant-design/icons";
import {
  ModalForm,
  ProForm,
  ProFormDigit,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form, message } from "antd";
import { UpdateParts } from "../../Pages/Services/auth.api";

const UpdatePartModal = ({ part, onUpdateSuccess = () => {} }) => {
  const [form] = Form.useForm();

  // Pre-fill form fields when `part` changes
  useEffect(() => {
    if (part) {
      form.setFieldsValue({
        id: part.id,
        name: part.name,
        description: part.description,
        conditionGrade: part.conditionGrade,
        price: part.price,
        quantity: part.quantity,
        imageUrl: part.imageUrl,
      });
    }
  }, [part, form]);

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      await UpdateParts(
        values.id,
        values.name,
        values.description,
        values.conditionGrade,
        values.price,
        values.quantity,
        values.imageUrl
      );
      message.success("Part updated successfully");
      onUpdateSuccess(); // Callback function after success
      return true;
    } catch (error) {
      message.error(error.message || "Failed to update part");
      return false;
    }
  };

  return (
    <ModalForm
      title="Update Vehicle Part"
      trigger={
        <Button type="primary" icon={<EditOutlined />}>
          Edit Part
        </Button>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log("Update modal closed"),
        cancelText: "Cancel",
        okText: "Update",
      }}
      onFinish={handleSubmit}
    >
      <ProForm.Group>
        <ProFormText
          name="id"
          label="Part ID"
          placeholder="Enter Part ID"
          rules={[{ required: true, message: "Part ID is required" }]}
        />
        <ProFormText
          name="name"
          label="Part Name"
          placeholder="Enter part name"
          rules={[{ required: true, message: "Please enter the part name" }]}
        />
        <ProFormText
          name="description"
          label="Description"
          placeholder="Enter part description"
          rules={[{ required: true, message: "Please enter the description" }]}
        />
        <ProFormText
          name="conditionGrade"
          label="Condition Grade"
          placeholder="Enter condition grade (e.g., New, Used)"
          rules={[
            { required: true, message: "Please enter the condition grade" },
          ]}
        />
        <ProFormText
          name="imageUrl"
          label="Image URL"
          placeholder="Enter image URL"
          rules={[
            { required: true, message: "Please enter the image URL" },
            { type: "url", message: "Please enter a valid URL" },
          ]}
        />
        <ProFormDigit
          name="quantity"
          label="Quantity"
          placeholder="Enter quantity"
          min={1}
          fieldProps={{ precision: 0 }}
          rules={[{ required: true, message: "Please enter quantity" }]}
        />
        <ProFormDigit
          name="price"
          label="Selling Price (KES)"
          placeholder="Enter price in KES"
          min={0}
          fieldProps={{ precision: 2 }}
          rules={[{ required: true, message: "Please enter the price" }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

// ✅ Add Prop Validation
UpdatePartModal.propTypes = {
  part: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    conditionGrade: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
  onUpdateSuccess: PropTypes.func, // Now optional with default value
};

export default UpdatePartModal;
