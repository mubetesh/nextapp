// components/ProductCard.tsx

import React from 'react';
import Image from 'next/image';
import { Product } from '../data/products';
import Image from 'next/image';
import { customLoader } from '../utils/customLoader';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {Array(fullStars).fill(<span className="text-yellow-500">&#9733;</span>)}
        {halfStar && <span className="text-yellow-500">&#9733;</span>}
        {Array(emptyStars).fill(<span className="text-gray-300">&#9733;</span>)}
      </div>
    );
  };

  return (
    <div className="relative max-w-sm mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
<<<<<<< HEAD
      <image
        loader = {customLoader}
=======
      {/* Sale Flag */}
      {product.isOnSale ? (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          On Sale
        </div>
      ) : (
        <div className="absolute top-2 left-2 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-full">
          Sold
        </div>
      )}

      <Image
>>>>>>> 6ff071ab85eecfc9e1b115bddc454af6df2f4e22
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
        width={400}
        height={300}
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
          {product.isOnSale && (<button className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 transition duration-200">
            Buy Now
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
