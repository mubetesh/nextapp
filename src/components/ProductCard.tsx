// components/ProductCard.tsx

import React from 'react';
import { Product } from '../data/products';
import Image from 'next/image';
import { customLoader } from '../utils/customLoader';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    const starDecimal = rating-fullStars
    const gradientTextStyle: React.CSSProperties = {
      background: `linear-gradient(to right, #eab308 ${starDecimal*100}%, #d1d5db ${starDecimal*100}%)`,
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text'
  };
    return (
      <div key={product.id} className="flex items-center">
        {Array(fullStars).fill(<span key={product.id} className="text-yellow-500">&#9733;</span>)}
        {halfStar && <span key={product.id} style={gradientTextStyle}>&#9733;</span>}
        {Array(emptyStars).fill(<span key={product.id} className="text-gray-300">&#9733;</span>)}
      </div>
    );
  };

  return (
    <div key={product.id}  className="relative max-w-sm mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Sale Flag */}
      {product.isOnSale ? (
        <div key={product.id} className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          On Sale
        </div>
      ) : (
        <div key={product.id} className="absolute top-2 left-2 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-full">
          Sold
        </div>
      )}

      <Image
        key={product.id}
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
        width={400}
        height={300}
      />
      <div key={product.id} className="p-4">
        <h2 key={product.id} className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p key={product.id} className="mt-2 text-gray-700">{product.description}</p>
        <p key={product.id} className="mt-2 text-gray-600 italic">Category: {product.category}</p>
        <div key={product.id} className="mt-2 flex items-center justify-center text-slate-300"><h3>Rating&nbsp;&nbsp; </h3><span>{renderStars(product.rating)}</span>
        </div>
        <p key={product.id} className="mt-2 text-gray-500 text-sm">Added on: {new Date(product.date).toLocaleDateString()}</p>
        <div key={product.id} className="mt-4 flex items-center justify-between">
          <span key={product.id} className="text-2xl font-bold text-violet-600">${product.price.toFixed(2)}</span>
          {product.isOnSale && (<button key={product.id} className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 transition duration-200">
            Buy Now
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
