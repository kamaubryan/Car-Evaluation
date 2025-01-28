// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card, Carousel, Typography, Tag, Spin, Result, Button } from "antd";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { ShoppingCart } from "lucide-react";

// const { Title, Text } = Typography;

// const PartCard = ({ part }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const carouselRef = React.useRef();
//   const navigate = useNavigate(); // Initialize navigate hook

//   // Static images array - replace with actual image URLs when available
//   const images = [
//     "/assets/part.png", // Replace with actual images from your local machine
//     "/assets/part.png",
//     "/assets/part.png",
//     "/assets/part.png",
//   ];

//   const carouselSettings = {
//     dots: true,
//     arrows: true,
//     prevArrow: <LeftOutlined />,
//     nextArrow: <RightOutlined />,
//     beforeChange: (current, next) => setCurrentSlide(next),
//   };

//   const handleAddToCart = () => {
//     // Navigate to the cart page when the button is clicked
//     navigate("/cart");
//   };

//   return (
//     <Card
//       hoverable
//       style={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//       }}
//       cover={
//         <div style={{ position: "relative" }}>
//           <Carousel
//             ref={carouselRef}
//             {...carouselSettings}
//             style={{ backgroundColor: "#f0f0f0" }}
//           >
//             {images.map((img, index) => (
//               <div key={index} style={{ height: "200px" }}>
//                 <img
//                   src={img}
//                   alt={`${part.name} - View ${index + 1}`}
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     objectFit: "cover",
//                   }}
//                   onError={(e) => {
//                     e.target.src = "/images/placeholder.jpg"; // Fallback image in case of error
//                   }}
//                 />
//               </div>
//             ))}
//           </Carousel>
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               width: "100%",
//               transform: "translateY(-50%)",
//               display: "flex",
//               justifyContent: "space-between",
//               padding: "0 10px",
//               pointerEvents: "none",
//             }}
//           >
//             <LeftOutlined
//               style={{
//                 fontSize: "24px",
//                 color: "white",
//                 cursor: "pointer",
//                 padding: "8px",
//                 backgroundColor: "rgba(0,0,0,0.3)",
//                 borderRadius: "50%",
//                 pointerEvents: "auto",
//               }}
//               onClick={() => carouselRef.current.prev()}
//             />
//             <RightOutlined
//               style={{
//                 fontSize: "24px",
//                 color: "white",
//                 cursor: "pointer",
//                 padding: "8px",
//                 backgroundColor: "rgba(0,0,0,0.3)",
//                 borderRadius: "50%",
//                 pointerEvents: "auto",
//               }}
//               onClick={() => carouselRef.current.next()}
//             />
//           </div>
//         </div>
//       }
//     >
//       <div style={{ flex: 1 }}>
//         <Title level={4} style={{ marginBottom: 16 }}>
//           {part?.name || "Part Name"}{" "}
//         </Title>

//         <div style={{ marginBottom: 12 }}>
//           <Text strong style={{ display: "inline-block", width: 100 }}>
//             Condition:
//           </Text>
//           <Text>{part?.conditionGrade || "N/A"}</Text>
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <Text strong style={{ display: "inline-block", width: 100 }}>
//             Quantity:
//           </Text>
//           <Text>{part?.quantity || 0}</Text>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: 16,
//           }}
//         >
//           <Title level={4} style={{ color: "#52c41a", margin: 0 }}>
//             ${part?.price?.toLocaleString() || "0.00"}
//           </Title>
//           <Tag color={part?.quantity > 0 ? "blue" : "red"}>
//             {part?.quantity > 0 ? "In Stock" : "Out of Stock"}
//           </Tag>
//         </div>

//         {part?.description && (
//           <div style={{ marginTop: 16 }}>
//             <Text strong>Description:</Text>
//             <Text style={{ display: "block", marginTop: 8 }}>
//               {part?.description || "No description available"}
//             </Text>
//           </div>
//         )}
//       </div>

//       {/* Add to Cart Button aligned at the bottom */}
//       <div style={{ marginTop: "auto" }}>
//         <Button
//           onClick={handleAddToCart}
//           type="primary"
//           icon={<ShoppingCart />}
//           style={{ width: "100%" }}
//         >
//           Add to Cart
//         </Button>
//       </div>
//     </Card>
//   );
// };

// const PartsGrid = () => {
//   const [parts, setParts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchParts = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/v1/parts");
//       setParts(response.data); // Store fetched parts in state
//       setLoading(false); // Turn off the loading spinner once data is fetched
//     } catch (err) {
//       setError(err.message); // If there's an error, store it in state
//       setLoading(false); // Also turn off the loading spinner
//       console.error("Error fetching parts:", err);
//     }
//   };

//   useEffect(() => {
//     fetchParts(); // Fetch parts when the component mounts
//   }, []); // Empty dependency array ensures this runs only once

//   if (loading)
//     return (
//       <Spin size="large" style={{ display: "block", margin: "40px auto" }} />
//     );
//   if (error)
//     return (
//       <Result
//         status="500"
//         title="500"
//         subTitle="Sorry, something went wrong."
//       />
//     );
//   if (!parts.length) return <Result status="info" title="No parts found" />;

//   return (
//     <div style={{ padding: 24 }}>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//           gap: 24,
//         }}
//       >
//         {parts.map((part) => (
//           <PartCard key={part.id} part={part} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartsGrid;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify"; // Import Toastify
import useCartStore from "../../Zustand/Zustand"; // Zustand store for cart


const Parts = () => {
  const [parts, setParts] = useState([]);
  const [error, setError] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart); // Zustand state for cart

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get("http://localhost:8085/api/v1/parts");
        setParts(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchParts();
  }, []);

  const handleAddToCart = (part) => {
    addToCart(part); // Add part to cart
    toast.success(`${part.name} added to cart!`); // Show success notification
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
      {parts?.map((part) => (
        <div
          key={part.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 flex flex-col"
        >
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {part.name}
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <strong className="inline-block w-20">Condition:</strong>
                {part.conditionGrade}
              </p>
              <p>
                <strong className="inline-block w-20">Quantity:</strong>
                {part.quantity}
              </p>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-lg font-semibold text-green-600">
                ${part.price?.toLocaleString()}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  part.quantity > 0
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {part.quantity > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
          <div className="px-6 pb-4">
            <button
              onClick={() => handleAddToCart(part)}
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
};

export default Parts;
