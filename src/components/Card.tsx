import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface CardSliderProps {
  products: Product[];
}

const CardSlider: React.FC<CardSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-sm mx-auto">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        onClick={prevCard}
      >
        &lt;
      </button>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        onClick={nextCard}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
