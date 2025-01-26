import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8085/api/v1/cars', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCars(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCars();
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cars.map(car => (
        <div 
          key={car.id} 
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{car.title}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p><strong>Make:</strong> {car.make}</p>
              <p><strong>Model:</strong> {car.model}</p>
              <p><strong>Year:</strong> {car.year}</p>
              <p><strong>Mileage:</strong> {car.mileage} miles</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold text-green-600">${car.sellingPrice.toLocaleString()}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {car.vehicleCondition}
              </span>
            </div>
            {car.damageDescription && (
              <div className="mt-4 text-sm text-red-600">
                <strong>Damage:</strong> {car.damageDescription}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarList;