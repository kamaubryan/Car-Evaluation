import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  ModalForm,
  ProFormText,
  ProFormDigit,
} from "@ant-design/pro-components";
import { Button, Form, message, Row, Col } from "antd";
import { Postcars } from "../../Pages/Services/auth.api";

export default function VehicleModal() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await Postcars(
        values.title,
        values.sellingPrice,
        values.damageDescription,
        values.make,
        values.model,
        values.year,
        values.mileage,
        values.vehicleCondition,
        values.imgUrl
      );

      message.success("Car posted successfully!");
      form.resetFields();
      return true;
    } catch (error) {
      message.error(error.message || "Failed to post car");
      return false;
    }
  };

  return (
    <ModalForm
      title="Add Vehicle"
      trigger={
        <Button type="primary" icon={<PlusOutlined />}>
          Add Vehicle
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
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <ProFormText
            name="title"
            label="Title"
            placeholder="Enter vehicle title"
            rules={[{ required: true }]}
          />
        </Col>
        <Col xs={24} sm={12}>
          <ProFormDigit
            name="sellingPrice"
            label="Selling Price (KES)"
            placeholder="Enter price"
            min={0}
            rules={[{ required: true }]}
          />
        </Col>
        <Col xs={24}>
          <ProFormText
            name="damageDescription"
            label="Damage Description"
            placeholder="Describe any damage"
          />
        </Col>
        <Col xs={24} sm={12}>
          <ProFormText
            name="make"
            label="Make"
            placeholder="Enter vehicle make"
            rules={[{ required: true }]}
          />
        </Col>
        <Col xs={24} sm={12}>
          <ProFormText
            name="model"
            label="Model"
            placeholder="Enter vehicle model"
            rules={[{ required: true }]}
          />
        </Col>
        <Col xs={24} sm={12}>
          <ProFormDigit
            name="year"
            label="Year"
            placeholder="Enter vehicle year"
            min={1900}
            max={new Date().getFullYear()}
            rules={[{ required: true }]}
          />
        </Col>
        <Col xs={24} sm={12}>
          <ProFormDigit
            name="mileage"
            label="Mileage (KM)"
            placeholder="Enter mileage"
            min={0}
            rules={[{ required: true }]}
          />
        </Col>
        <Col xs={24}>
          <ProFormText
            name="vehicleCondition"
            label="Condition"
            placeholder="Enter vehicle condition"
          />
        </Col>
        <Col xs={24}>
          <ProFormText
            name="imgUrl"
            label="Image URL"
            placeholder="Enter image URL"
            rules={[{ type: "url", message: "Enter a valid URL" }]}
          />
        </Col>
      </Row>
    </ModalForm>
  );
}
