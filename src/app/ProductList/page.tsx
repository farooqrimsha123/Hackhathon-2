"use client"

import { url } from "inspector";
import React, { useState } from "react";

const ProductList: React.FC = () => {
  // Full list of cars
  const allCars = [
    { id: 1, name: "Kia Sportage", image: "https://via.placeholder.com/150", price: 50 },
    { id: 2, name: "Toyota Corolla", image: "https://via.placeholder.com/150", price: 40 },
    { id: 3, name: "Honda Civic", image: "https://via.placeholder.com/150", price: 45 },
    { id: 4, name: "Ford Mustang", image: "https://via.placeholder.com/150", price: 70 },
    { id: 5, name: "Chevrolet Malibu", image: "https://via.placeholder.com/150", price: 55 },
    { id: 6, name: "Tesla Model 3", image: "https://via.placeholder.com/150", price: 80 },
    { id: 7, name: "BMW X5", image: "https://via.placeholder.com/150", price: 90 },
    { id: 8, name: "Audi Q7", image: "https://via.placeholder.com/150", price: 85 },
    { id: 9, name: "Mercedes-Benz C-Class", image: "https://via.placeholder.com/150", price: 100 },
    { id: 10, name: "Hyundai Sonata", image: "https://via.placeholder.com/150", price: 60 },
    { id: 11, name: "Volkswagen Passat", image: "https://via.placeholder.com/150", price: 65 },
    { id: 12, name: "Porsche Cayenne", image: "https://via.placeholder.com/150", price: 120 },
  ];

  // State to handle visible cars
  const [visibleCars, setVisibleCars] = useState(8);

  const handleShowMore = () => {
    setVisibleCars(allCars.length); // Show all cars
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 py-10 px-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div
            className="p-6 bg-white rounded-lg shadow-md text-blue-500"
            style={{
              backgroundImage: url('/bg 2.jpg'),
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-xl font-bold mb-4">The Best Platform for Car Rental</h2>
            <p className="text-sm mb-6">
              Ease of doing car rental safely and reliably. Of course, at a low price.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Rental Car
            </button>
          </div>

          {/* Right Card */}
          <div className="p-6 bg-white rounded-lg shadow-md text-blue-500">
            <h2 className="text-xl font-bold mb-4">Easy way to rent a car at a low price</h2>
            <p className="text-sm mb-6">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Rental Car
            </button>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pick-Up Location</label>
              <input
                type="text"
                placeholder="Select your city"
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-10 px-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCars.slice(0, visibleCars).map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Car Details */}
              <h3 className="text-lg font-medium text-gray-800 mb-2">{car.name}</h3>
              <p className="text-sm text-gray-500 mb-4">${car.price}/Day</p>

              {/* Rent Button */}
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Rent Now
              </button>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCars < allCars.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Show More Cars
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;