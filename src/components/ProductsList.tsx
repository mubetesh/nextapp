"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Product, products as productData } from '../data/products';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [sortMethod, setSortMethod] = useState<string>('price-asc');

  // Sorting function
  const sortProducts = (method: string) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (method) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  // Handle sorting change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortMethod = event.target.value;
    setSortMethod(newSortMethod);
    sortProducts(newSortMethod);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product List</h1>
        <div className="flex justify-between items-center mb-6">
          <div>
            <label htmlFor="sort" className="text-lg font-medium text-gray-700 mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortMethod}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-lg py-2 px-4"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </header>
    </div>
  );
};

export default ProductList;
