import { useState, useEffect } from "react";
import { Table, Input } from "antd";
import { FetchCars } from "../../Pages/Services/auth.api";
import { SearchOutlined } from "@ant-design/icons";

export function CarAdmin() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        setLoading(true);
        const carData = await FetchCars();
        const formattedCars = carData.map((car, index) => ({
          ...car,
          key: car.id || index.toString(),
        }));
        setCars(formattedCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCars();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
      width: "15%",
      className: "font-medium border border-gray-300",
    },
    {
      title: "Price",
      dataIndex: "sellingPrice",
      key: "sellingPrice",
      width: "10%",
      responsive: ["md"],
      className: "text-right border border-gray-300",
      render: (price) => `$${Number(price).toLocaleString()}`,
    },
    {
      title: "Damage",
      dataIndex: "damageDescription",
      key: "damageDescription",
      ellipsis: true,
      width: "15%",
      responsive: ["lg"],
      className: "border border-gray-300",
    },
    {
      title: "Make",
      dataIndex: "make",
      key: "make",
      width: "10%",
      className: "border border-gray-300",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      width: "10%",
      responsive: ["sm"],
      className: "border border-gray-300",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      width: "8%",
      sorter: (a, b) => a.year - b.year,
      className: "border border-gray-300",
    },
    {
      title: "Mileage",
      dataIndex: "mileage",
      key: "mileage",
      width: "10%",
      responsive: ["md"],
      sorter: (a, b) => a.mileage - b.mileage,
      render: (mileage) => `${Number(mileage).toLocaleString()} mi`,
      className: "border border-gray-300",
    },
    {
      title: "Condition",
      dataIndex: "vehicleCondition",
      key: "vehicleCondition",
      width: "12%",
      responsive: ["lg"],
      filters: [
        { text: "New", value: "New" },
        { text: "Used", value: "Used" },
        { text: "Damaged", value: "Damaged" },
      ],
      onFilter: (value, record) => record.vehicleCondition === value,
      className: "border border-gray-300",
    },
    {
      title: "Image URL",
      dataIndex: "imageUrl",
      key: "imageUrl",
      width: "10%",
      responsive: ["xl"],
      className: "border border-gray-300",
    },
  ];

  return (
    <div className="relative w-full">
      <Table
        columns={columns}
        dataSource={cars}
        loading={loading}
        pagination={{ pageSize: 10 }}
        size="middle"
        className="border border-gray-300"
      />
    </div>
  );
}

export default CarAdmin;
