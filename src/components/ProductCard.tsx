"use client";

import React from 'react';
import { Product } from '../data/products';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Helper function to render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {Array(fullStars).fill(null).map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500">&#9733;</span>
        ))}
        {halfStar && <span className="text-yellow-500">&#9733;</span>}
        {Array(emptyStars).fill(null).map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">&#9733;</span>
        ))}
      </div>
    );
  };

  return (
    <div className="relative max-w-sm mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
        width={100}
        height={192}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="mt-2 text-gray-600 italic">Category: {product.category}</p> {/* Display category */}
        <div className="mt-2 flex items-center">
          {renderStars(product.rating)} {/* Display rating stars */}
        </div>
        <p className="mt-2 text-gray-500 text-sm">Added on: {new Date(product.date).toLocaleDateString()}</p> {/* Display date */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-violet-600">${product.price.toFixed(2)}</span>
          <button className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
