import { useState, useEffect } from "react";
import { Table, Input, Switch } from "antd";
import { FetchUsers } from "../../Pages/Services/auth.api";
import { SearchOutlined } from "@ant-design/icons";

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleColumns, setVisibleColumns] = useState({
    username: true,
    email: true,
    firstName: true,
    phoneNumber: true,
    role: true,
    createdat: true,
    updatedat: true,
  });

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        setLoading(true);
        const userData = await FetchUsers();
        console.log("API Response:", userData);

        const formattedUsers = userData.map((user, index) => ({
          key: user.id || index.toString(),
          username: user.username || "N/A",
          email: user.email || "N/A",
          firstName: user.firstName || "N/A",
          phoneNumber: user.phoneNumber || "N/A",
          role: user.role || "N/A",
          createdat: user.createdat || "N/A",
          updatedat: user.updatedat || "N/A",
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  const formatDateTime = (dateString) => {
    if (!dateString || dateString === "N/A") return "N/A";

    const date = new Date(dateString);
    const pad = (num, size = 2) => num.toString().padStart(size, "0");

    return (
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
        date.getDate()
      )} ` +
      `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
        date.getSeconds()
      )}.${date.getMilliseconds().toString().padStart(6, "0")}`
    );
  };

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
      title: "Username",
      dataIndex: "username",
      key: "username",
      ...getColumnSearchProps("username"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      ...getColumnSearchProps("phoneNumber"),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        { text: "Admin", value: "Admin" },
        { text: "User", value: "User" },
      ],
      onFilter: (value, record) => record.role === value,
    },
    {
      title: "Created At",
      dataIndex: "createdat",
      key: "createdat",
      render: (date) => (date !== "N/A" ? formatDateTime(date) : "N/A"),
      sorter: (a, b) => new Date(a.createdat) - new Date(b.createdat),
    },
    {
      title: "Updated At",
      dataIndex: "updatedat",
      key: "updatedat",
      render: (date) => (date !== "N/A" ? formatDateTime(date) : "N/A"),
      sorter: (a, b) => new Date(a.updatedat) - new Date(b.updatedat),
    },
  ];

  return (
    <div className="relative w-full h-screen p-4 overflow-x-auto">
      <Table
        columns={columns}
        dataSource={users}
        loading={loading}
        scroll={{ x: "100%", y: "calc(100vh - 100px)" }}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          position: ["bottomCenter"],
          pageSize: 10,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        size="middle"
        className="ant-table-responsive w-full h-full border border-gray-300 table-auto border-collapse"
        bordered
      />
    </div>
  );
};

export default UsersAdmin;
