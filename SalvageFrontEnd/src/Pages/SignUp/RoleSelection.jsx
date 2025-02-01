import { CarFilled, UserOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center justify-center">
        <img
          src="/assets/heroCar.jpeg" // Replace with your actual image
          alt="Car Selection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Role Selection */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 bg-white">
        <div className="max-w-md mx-auto text-center">
          <Title level={2} className="text-gray-800">
            Welcome to Car Salvage Marketplace
          </Title>
          <Text className="text-gray-500 block mb-6">
            Select whether you are a Buyer or a Car Dealer to continue.
          </Text>

          <div className="space-y-4">
            <Button
              icon={<UserOutlined />}
              type="primary"
              block
              onClick={() => navigate("/signup/buyer")}
              className="h-12 text-lg bg-blue-500 hover:bg-blue-600"
            >
              Buyer
            </Button>
            <Button
              icon={<CarFilled />}
              type="default"
              block
              onClick={() => navigate("/signup/dealer")}
              className="h-12 text-lg border-gray-400"
            >
              Car Dealer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
