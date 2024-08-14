"use client";

import Image from 'next/image';
import React from 'react';
import { Product } from '../data/pro';

const SampleCard: React.FC<{ product: Product }> = ({ product }) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {Array(fullStars).fill(<span key={`full-${fullStars}`} className="text-yellow-500">&#9733;</span>)}
        {halfStar && <span key="half" className="text-yellow-500">&#9733;</span>}
        {Array(emptyStars).fill(<span key={`empty-${emptyStars}`} className="text-gray-300">&#9733;</span>)}
      </div>
    );
  };

  // Fallback image URL
  const imageUrl = product.imageUrl || '/../images/default.jpg'; // Ensure this path is correct

  return (
    <div className="relative max-w-md mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Image
        src={imageUrl}  // Ensure this path is correct
        alt={product.name}
        className="w-full h-48 object-fill"
        width={400}
        height={240}
        layout="responsive"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="mt-2 text-gray-600 italic">Category: {product.category}</p>
        <div className="mt-2 flex items-center">
          {renderStars(product.rating)}
        </div>
        <p className="mt-2 text-gray-500 text-sm">Added on: {new Date(product.date).toLocaleDateString()}</p>
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

export default SampleCard;
