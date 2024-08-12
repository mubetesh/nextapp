// src/components/SaleCard.tsx
import React from 'react';

const SaleCard: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden my-6">
      {/* Product Image */}
      <img
        src="https://via.placeholder.com/400x250?text=Product+Image"
        alt="Sample Product Image"
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Product Name */}
        <h2 className="text-xl font-semibold text-gray-900">Product Name</h2>

        {/* Product Description */}
        <p className="mt-2 text-gray-700">
          A brief description of the product goes here. It highlights the key features and benefits of the product.
        </p>

        {/* Pricing and CTA */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-violet-600">$29.99</span>
            <button className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 transition duration-200">
              Buy Now
            </button>
          </div>

          {/* For Sale and For Rent Buttons */}
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 transition duration-200">
              For Sale
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200">
              For Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
