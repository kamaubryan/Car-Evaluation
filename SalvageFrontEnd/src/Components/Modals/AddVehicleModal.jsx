import { PlusOutlined } from "@ant-design/icons";
import {
  ModalForm,
  ProForm,
  ProFormMoney,
  ProFormSwitch,
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

export default function VehicleModal() {
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
          cancelText:"Cancel",
          okText:"Save"
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
            name="title"
            label="Title"
            placeholder="Please enter the name"
          />
          <ProFormText
            width="sm"
            name="make"
            label="Make"
            placeholder="Please enter the car make"
          />
          <ProFormText
            width="sm"
            name="model"
            label="Model"
            placeholder="Please enter the model"
          />
          <ProFormMoney
            label="Year of Make"
            name="amount0"
            fieldProps={{
              moneySymbol: false,
            }}
            locale="en-US"
            initialValue={2019}
            min={0}
            width="sm"
          />
          <ProFormText
            width="sm"
            name="mileage"
            label="Mileage"
            placeholder="Please enter the company name"
          />
          <ProFormText
            width="sm"
            name="vehicleCondition"
            label=" Vehicle Condition"
            placeholder="Please enter the vehicle condition"
          />
          <ProFormText
            width="sm"
            name="imageUrl"
            label="Image URL"
            placeholder="Please enter the Image url"
          />
          <ProFormText
            width="sm"
            name="damageDescription"
            label="Damage Description"
            placeholder="Please enter the description"
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
