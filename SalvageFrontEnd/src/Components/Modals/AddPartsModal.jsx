import { PlusOutlined } from "@ant-design/icons";
import {
  ModalForm,
  ProForm,
  ProFormMoney,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form, message } from "antd";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default function PartModal() {
  const [form] = Form.useForm();

  return (
    <>
      <ModalForm
        title="Add Vehicle"
        trigger={
          <Button type="primary">
            <PlusOutlined />
            Add
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
        submitTimeout={2000}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values.name);
          message.success("Submission successful");
          return true;
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="sm"
            name="name"
            label="Name"
            placeholder="Please enter the name"
          />
          <ProFormText
            width="sm"
            name="description"
            label="Part Description"
            placeholder="Please enter the part description"
          />
          <ProFormText
            width="sm"
            name="conditionGrade"
            label="Condition Grade"
            placeholder="Please enter the condition Grade"
          />
          <ProFormText
            width="sm"
            name="imageUrl"
            label="Image URL"
            placeholder="Please enter the Image url"
          />
          <ProFormMoney
            label="Quantity"
            name="quantity"
            fieldProps={{
              moneySymbol: false,
            }}
            locale="en-US"
            initialValue={2019}
            min={0}
            width="sm"
          />
          <ProFormMoney
            label="Selling Price"
            name="sellingPrice"
            locale="en-Ke" // Kenyan Shilling locale
            initialValue={22.22}
            min={0}
            trigger="onBlur"
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}
