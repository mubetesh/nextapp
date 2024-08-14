// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../data/products';
import Image from 'next/image';
import { customLoader } from '../utils/customLoader';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="relative max-w-sm mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <image
        loader = {customLoader}
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="mt-2 text-gray-700">{product.description}</p>
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
