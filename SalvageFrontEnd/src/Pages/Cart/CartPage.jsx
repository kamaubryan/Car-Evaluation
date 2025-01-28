import React from "react";
import { Button, List, Typography } from "antd";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../Zustand/Zustand"; // Zustand store to manage cart
import { toast } from "react-toastify"; // Import Toastify for notifications

const { Title, Text } = Typography;

function CartPage() {
  const { cart, removeFromCart } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
  }));
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    // Handle checkout logic here
    toast.info("Proceeding to checkout...");
  };

  return (
    <div className="p-6">
      <Title level={2}>Your Cart</Title>
      {cart.length === 0 ? (
        <Text>No items in the cart</Text>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(car) => (
            <List.Item
              actions={[
                <Button
                  key="remove"
                  onClick={() => {
                    removeFromCart(car.id); // Remove car from the cart
                    toast.success(`${car.title} removed from cart`); // Show removal notification
                  }}
                  danger
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={car.title}
                description={`$${car.sellingPrice.toLocaleString()}`}
              />
            </List.Item>
          )}
        />
      )}
      {cart.length > 0 && (
        <Button
          type="primary"
          icon={<ShoppingCart />}
          onClick={handleProceedToCheckout}
          style={{ marginTop: "20px", width: "100%" }}
        >
          Proceed to Checkout
        </Button>
      )}
    </div>
  );
}

export default CartPage;
