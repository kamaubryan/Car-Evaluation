import React, { useState, useEffect } from "react";
import axios from "axios";

function Parts() {
  const [parts, setParts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8085/api/v1/parts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setParts(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchParts();
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {parts.map((part) => (
        <div
          key={part.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {part.title}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p>
                <strong>Category:</strong> {part.category}
              </p>
              <p>
                <strong>Manufacturer:</strong> {part.manufacturer}
              </p>
              <p>
                <strong>Condition:</strong> {part.condition}
              </p>
              <p>
                <strong>Compatibility:</strong> {part.compatibility}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold text-green-600">
                ${part.price.toLocaleString()}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {part.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            {part.description && (
              <div className="mt-4 text-sm text-gray-700">
                <strong>Description:</strong> {part.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Parts;
