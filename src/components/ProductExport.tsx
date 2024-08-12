"use client"
import React, { useState } from 'react';
import { Product, products as productData } from '../data/products';
import ProductCard from './ProductCard';

const ProductExport: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [sortMethod, setSortMethod] = useState<string>('price-asc');

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

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortMethod = event.target.value;
    setSortMethod(newSortMethod);
    sortProducts(newSortMethod);
  };

  // Function to export products as CSV
  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Description', 'Price', 'Image URL'];
    const rows = filteredProducts.map(p => [
      p.id,
      p.name,
      p.description,
      p.price,
      p.imageUrl
    ]);

    let csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") 
      + "\n" 
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
  };

  // Function to share product information
  const shareProduct = (product: Product) => {
    const shareData = {
      title: product.name,
      text: `${product.name}\n${product.description}\nPrice: $${product.price.toFixed(2)}`,
      url: window.location.href
    };
    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      alert("Share functionality is not supported in this browser.");
    }
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
          <button 
            onClick={exportToCSV}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-150 ease-in-out"
          >
            Export to CSV
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => shareProduct(product)}
                className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded-lg shadow hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                Share
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default ProductExport;
