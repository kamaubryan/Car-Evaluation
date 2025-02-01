import axios from "axios";

// const API_URL = `${BASE_URL}auth/`;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const LOGIN_API_URL = `${BASE_URL}/auth/login`;
const REGISTER_API_URL = `${BASE_URL}/auth/register`;
const FECTH_CARS_API_URL = `${BASE_URL}/cars`;
const POST_CARS_API_URL = `${BASE_URL}/cars`;
const UPDATE_CARS_API_URL = `${BASE_URL}/cars`;
const GET_PARTS_API_URL = `${BASE_URL}/parts`;
const POST_PARTS_API_URL = `${BASE_URL}/parts`;
const UPDATE_PARTS_API_URL = `${BASE_URL}/parts`;
const GET_USERS_API_URL = `${BASE_URL}/users`;
const POST_USERS_API_URL = `${BASE_URL}/users`;
const UPDATE_USERS_API_URL = `${BASE_URL}/users`;
export const loginUser = async (email, password) => {
  try {
    console.log("crtrfuygyh", LOGIN_API_URL);
    const response = await axios.post(LOGIN_API_URL, { email, password });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};

export const registerUser = async (
  username: string,
  email: string,
  password: string,
  firstName: string,
  role: string,
  phoneNumber: string
) => {
  try {
    const response = await axios.post(REGISTER_API_URL, {
      username,
      email,
      password,
      firstName,
      role,
      phoneNumber,
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

export const FetchCars = async (
  title: string,
  sellingPrice: number,
  damageDescription: string,
  make: string,
  model: string,
  year: number,
  mileage: number,
  vehicleCondition: string,
  imgUrl: string
) => {
  try {
    const response = await axios.get(FECTH_CARS_API_URL, {
      params: {
        title,
        sellingPrice,
        damageDescription,
        make,
        model,
        year,
        mileage,
        vehicleCondition,
        imgUrl,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error(error.response?.data?.message || "error fetching Cars");
  }
};

export const Postcars = async (
  title: string,
  sellingPrice: number,
  damageDescription: string,
  make: string,
  model: string,
  year: number,
  mileage: number,
  vehicleCondition: string,
  imageUrl: string
) => {
  try {
    const response = await axios.post(POST_CARS_API_URL, {
      title,
      sellingPrice,
      damageDescription,
      make,
      model,
      year,
      mileage,
      vehicleCondition,
      imageUrl,
    }); // Remove the `params` wrapper

    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error(error.response?.data?.message || "Error posting car");
  }
};

// updating cars

export const UpdateCars = async (
  id: number,
  title: string,
  sellingPrice: number,
  damageDescription: string,
  make: string,
  model: string,
  year: number,
  mileage: number,
  vehicleCondition: string,
  imgUrl: string
) => {
  try {
    const response = await axios.put(`${POST_CARS_API_URL}/${id}`, {
      title,
      sellingPrice,
      damageDescription,
      make,
      model,
      year,
      mileage,
      vehicleCondition,
      imgUrl,
    });
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error(error.response?.data?.message || "Error updating Cars");
  }
};

// fetching parts
export const FetchParts = async (
  name: string,
  description: string,
  conditionGrade: string,
  price: number,
  quantity: number,
  imageUrl: string
) => {
  try {
    const response = await axios.get(GET_PARTS_API_URL, {
      params: {
        name,
        description,
        conditionGrade,
        price,
        quantity,
        imageUrl,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error(error.response?.data?.message || "error fetching Parts");
  }
};
// posting parts

export const PostParts = async (
  name,
  description,
  conditionGrade,
  price,
  quantity,
  imageUrl
) => {
  try {
    const response = await axios.post(
      POST_PARTS_API_URL,
      {
        name,
        description,
        conditionGrade,
        price,
        quantity,
        imageUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error posting parts:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Error posting parts");
  }
};

// updatting parts
export const UpdateParts = async (
  id: number | string,
  name: string,
  description: string,
  conditionGrade: string,
  price: number,
  quantity: number,
  imageUrl: string
) => {
  try {
    const response = await axios.put(
      `${UPDATE_PARTS_API_URL}/${id}`,
      {
        name,
        description,
        conditionGrade,
        price,
        quantity,
        imageUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating parts:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Error updating parts");
  }
};

// fetching users
export const FetchUsers = async () => {
  try {
    const response = await axios.get(GET_USERS_API_URL);
    console.log("Fetched Users:", response.data); // Log the response to debug
    return response.data.users || response.data; // Return users list
  } catch (error) {
    console.error("Error fetching users:", error.response?.data?.message);
    throw new Error(error.response?.data?.message || "Error fetching users");
  }
};

// posting users
export const PostUsers = async (userData) => {
  try {
    const response = await axios.post(POST_USERS_API_URL, userData);
    console.log("API Response (User Created):", response.data); // Log API response
    return response.data;
  } catch (error) {
    console.error("Error posting user:", error.response?.data?.message);
    throw new Error(error.response?.data?.message || "Error posting user");
  }
};

// updating users
export const PutUsers = async (
  id: number,
  email: string,
  password: string,
  username: string,
  firstName: string,
  phoneNumber: string,
  role: string,
  createdat: Date,
  updatedat: Date
) => {
  try {
    const response = await axios.put(`${UPDATE_USERS_API_URL}/${id}`, {
      email,
      password,
      username,
      firstName,
      phoneNumber,
      role,
      createdat,
      updatedat,
    });
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error(error.response?.data?.message || "Error updating Users");
  }
};
