"use client";

import React, { useState } from 'react';
import { Product, products as productData } from '../data/products';
import ProductCard from './ProductCard';

const ITEMS_PER_PAGE = 4; // Number of items per page

const ProductExport : React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [sortMethod, setSortMethod] = useState<string>('price-asc');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Function to sort products
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
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        default:
          return 0;
      }
    });
    setFilteredProducts(sortedProducts);
    setCurrentPage(1); // Reset to first page on sorting
  };

  // Function to handle sort change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortMethod = event.target.value;
    setSortMethod(newSortMethod);
    sortProducts(newSortMethod);
  };

  // Function to handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Determine the products to display on the current page
  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to export products as CSV
  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Description', 'Price', 'Image URL', 'Date'];
    const rows = filteredProducts.map(p => [
      p.id,
      p.name,
      p.description,
      p.price,
      p.imageUrl,
      p.date
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

  // Determine the number of pages
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  return (
    <div className="relative p-4 bg-gray-100 min-h-screen">
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
              <option value="date-asc">Date: Oldest First</option>
              <option value="date-desc">Date: Newest First</option>
            </select>
          </div>
          <button 
            onClick={exportToCSV}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-150 ease-in-out"
          >
            Export to CSV
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {currentProducts.map(product => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <li key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg transition duration-150 ease-in-out ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default ProductExport;
