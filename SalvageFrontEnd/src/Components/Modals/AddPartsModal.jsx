import { PlusOutlined } from "@ant-design/icons";
import {
  ModalForm,
  ProForm,
  ProFormDigit,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form, message } from "antd";
import { PostParts } from "../../Pages/Services/auth.api";

export default function PartModal() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log("Submitting values:", values); // Debugging log

    try {
      await PostParts(
        values.name,
        values.description,
        values.conditionGrade,
        values.price,
        values.quantity,
        values.imageUrl
      );
      message.success("Part added successfully");
      return true;
    } catch (error) {
      message.error(error.message);
      return false;
    }
  };

  return (
    <ModalForm
      title="Add Vehicle Part"
      trigger={
        <Button type="primary">
          <PlusOutlined /> Add Part
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
          name="name"
          label="Part Name"
          placeholder="Enter the part name"
          rules={[{ required: true, message: "Please enter the part name" }]}
        />
        <ProFormText
          name="description"
          label="Description"
          placeholder="Enter the part description"
          rules={[{ required: true, message: "Please enter the description" }]}
        />
        <ProFormText
          name="conditionGrade"
          label="Condition Grade"
          placeholder="Enter the part's condition grade"
          rules={[
            { required: true, message: "Please enter the condition grade" },
          ]}
        />
        <ProFormText
          name="imageUrl"
          label="Image URL"
          placeholder="Enter the image URL"
          rules={[{ type: "url", message: "Please enter a valid URL" }]}
        />
        <ProFormDigit
          name="quantity"
          label="Quantity"
          min={1}
          fieldProps={{ precision: 0 }}
          placeholder="Enter the number of items available"
          rules={[{ required: true, message: "Please enter the quantity" }]}
        />
        <ProFormDigit
          name="price"
          label="Selling Price (KES)"
          min={0}
          fieldProps={{ precision: 2 }}
          placeholder="Enter the selling price in KES"
          rules={[{ required: true, message: "Please enter the price" }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
}
