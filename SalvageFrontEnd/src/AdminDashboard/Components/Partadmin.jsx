import { useState, useEffect } from "react";
import { Table, Input } from "antd";
import { FetchParts } from "../../Pages/Services/auth.api";
import { SearchOutlined } from "@ant-design/icons";

const PartAdmin = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllParts = async () => {
      try {
        setLoading(true);
        const partData = await FetchParts();
        const formattedParts = partData.map((part, index) => ({
          ...part,
          key: part.id || index.toString(),
          imageUrl: part.imageUrl || "", // Store image URL as a string
        }));
        setParts(formattedParts);
      } catch (error) {
        console.error("Error fetching parts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllParts();
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          className="mb-3 w-full"
        />
        <div className="flex justify-between space-x-2">
          <button
            onClick={() => {
              clearFilters();
              confirm();
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
          >
            Reset
          </button>
          <button
            onClick={() => confirm()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Filter
          </button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        className={filtered ? "text-blue-500" : "text-gray-400"}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ?.toString()
        .toLowerCase()
        .includes(value.toLowerCase()) ?? false,
  });

  const columns = [
    {
      title: "Image URL",
      dataIndex: "imageUrl",
      key: "imageUrl",
      width: "20%",
      ellipsis: true, // Display as text (URL string)
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
      ...getColumnSearchProps("name"),
      className: "font-medium",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "20%",
      ellipsis: true,
      responsive: ["md"],
    },
    {
      title: "Condition Grade",
      dataIndex: "conditionGrade",
      key: "conditionGrade",
      width: "15%",
      responsive: ["lg"],
      filters: [
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
      onFilter: (value, record) => record.conditionGrade === value,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "10%",
      responsive: ["sm"],
      className: "text-right",
      render: (price) => `Ksh ${Number(price).toLocaleString()}`,
      sorter: (a, b) => a.price - b.price,
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
      responsive: ["md"],
      sorter: (a, b) => a.quantity - b.quantity,
    },
  ];

  return (
    <div className="relative w-full h-screen p-4">
      <Table
        bordered
        columns={columns}
        dataSource={parts}
        loading={loading}
        scroll={{
          x: "max-content",
          y: "calc(100vh - 100px)",
        }}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          responsive: true,
          position: ["bottomCenter"],
          pageSize: 10,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        size="middle"
        className="ant-table-responsive w-full h-full"
      />
    </div>
  );
};

export default PartAdmin;
