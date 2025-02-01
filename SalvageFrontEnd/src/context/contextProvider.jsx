/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create context
export const CartContext = createContext(undefined);

// Create provider component
export function CartProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Export the context if needed
export default CartContext;
