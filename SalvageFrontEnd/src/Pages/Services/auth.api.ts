import axios from "axios";
import { BASE_URL } from "../../Utils/BaseUrlUtil";

// const API_URL = `${BASE_URL}auth/`;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_URL = `${BASE_URL}/auth/login`;

export const loginUser = async (email, password) => {
  try {
    console.log("crtrfuygyh", API_URL);
    const response = await axios.post(API_URL, { email, password });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${API_URL}register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};

export const logout = async () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};
