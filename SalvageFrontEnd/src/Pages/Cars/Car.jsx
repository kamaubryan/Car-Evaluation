// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import ErrorPage from "../Error404Page";
// import Error500Page from "../Error500Page";
// import { ShoppingCart } from "lucide-react";

// function CarList() {
//   const [cars, setCars] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get("http://localhost:8085/api/v1/cars");
//         console.log("api response", response);
//         setCars(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchCars();
//   }, []);

//   const handleAddToCart = (carId) => {
//     navigate("/cart");
//   };

//   if (error) return <Error500Page />;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
//       {cars?.map((car) => (
//         <div
//           key={car.id}
//           className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 flex flex-col"
//         >
//           <div className="p-6 flex-grow">
//             <h3 className="text-xl font-bold mb-3 text-gray-800">
//               {car.title}
//             </h3>
//             <div className="space-y-1 text-sm text-gray-600">
//               <p>
//                 <strong className="inline-block w-20">Make:</strong>
//                 {car.make}
//               </p>
//               <p>
//                 <strong className="inline-block w-20">Model:</strong>
//                 {car.model}
//               </p>
//               <p>
//                 <strong className="inline-block w-20">Year:</strong>
//                 {car.year}
//               </p>
//               <p>
//                 <strong className="inline-block w-20">Mileage:</strong>
//                 {car.mileage} miles
//               </p>
//             </div>
//             <div className="mt-3 flex justify-between items-center">
//               <span className="text-lg font-semibold text-green-600">
//                 ${car.sellingPrice.toLocaleString()}
//               </span>
//               <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
//                 {car.vehicleCondition}
//               </span>
//             </div>
//             {car.damageDescription && (
//               <div className="mt-2 text-sm text-red-600">
//                 <strong>Damage:</strong> {car.damageDescription}
//               </div>
//             )}
//           </div>
//           <div className="px-6 pb-4">
//             <button
//               onClick={() => handleAddToCart(car.id)}
//               className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 w-32"
//             >
//               <ShoppingCart size={18} />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CarList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify"; // Import Toastify for notifications
import useCartStore from "../../Zustand/Zustand"; // Import Zustand cart store

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart); // Get addToCart action from Zustand store

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:8085/api/v1/cars");
        setCars(response.data);
        console.log(response);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCars();
  }, []);

  const handleAddToCart = (car) => {
    addToCart(car); // Add car to the cart
    toast.success(`${car.title} has been added to your cart!`); // Show success notification using Toastify
    navigate("/cart"); // Navigate to the cart page
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
      {cars?.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 flex flex-col"
        >
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {car.title}
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <strong className="inline-block w-20">Make:</strong>
                {car.make}
              </p>
              <p>
                <strong className="inline-block w-20">Model:</strong>
                {car.model}
              </p>
              <p>
                <strong className="inline-block w-20">Year:</strong>
                {car.year}
              </p>
              <p>
                <strong className="inline-block w-20">Mileage:</strong>
                {car.mileage} miles
              </p>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-lg font-semibold text-green-600">
                ${car.sellingPrice.toLocaleString()}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {car.vehicleCondition}
              </span>
            </div>
            {car.damageDescription && (
              <div className="mt-2 text-sm text-red-600">
                <strong>Damage:</strong> {car.damageDescription}
              </div>
            )}
          </div>
          <div className="px-6 pb-4">
            <button
              onClick={() => handleAddToCart(car)}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 w-32"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarList;
