import { ConfigProvider } from "antd";
import Routes from "./Routes/Route";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/contextProvider"; // Make sure to update this import path

function App() {
  return (
    <CartProvider>
      <ConfigProvider
        cssVar
        true
        theme={{
          "primary-color": "#1890ff",
        }}
      >
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
        />
      </ConfigProvider>
    </CartProvider>
  );
}

export default App;
