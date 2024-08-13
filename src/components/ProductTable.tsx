"use client";

import React, { useState } from 'react';
import { Product, products as initialProducts } from '../data/products';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Sorting function
const sortProducts = (products: Product[], sortKey: keyof Product, sortOrder: 'asc' | 'desc') => {
    return [...products].sort((a, b) => {
        if (sortKey === 'date') {
            const dateA = new Date(a[sortKey]);
            const dateB = new Date(b[sortKey]);
            return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
        }
        if (typeof a[sortKey] === 'string') {
            const strA = a[sortKey].toLowerCase();
            const strB = b[sortKey].toLowerCase();
            return sortOrder === 'asc' ? strA.localeCompare(strB) : strB.localeCompare(strA);
        }
        if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });
};

// Filtering function
const filterProducts = (products: Product[], filterText: string, startDate?: Date, endDate?: Date) => {
    return products.filter(product => {
        const matchesText = product.name.toLowerCase().includes(filterText.toLowerCase()) ||
                            product.description.toLowerCase().includes(filterText.toLowerCase());
        const productDate = new Date(product.date);
        const matchesDate = (!startDate || productDate >= startDate) && (!endDate || productDate <= endDate);
        return matchesText && matchesDate;
    });
};

const ProductTable: React.FC = () => {
    const [sortKey, setSortKey] = useState<keyof Product>('id');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [filterText, setFilterText] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [itemsPerPage, setItemsPerPage] = useState<number>(5); // Default number of items per page
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filteredProducts = filterProducts(initialProducts, filterText, startDate ?? undefined, endDate ?? undefined);
    const sortedProducts = sortProducts(filteredProducts, sortKey, sortOrder);

    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    const handleSort = (key: keyof Product) => {
        setSortKey(key);
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
        setCurrentPage(1); // Reset to first page on filter change
    };

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page on page size change
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Pagination logic
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="p-4">
            <h1 className="font-bold text-4xl mb-4">Product List</h1>
            
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Filter products..."
                    value={filterText}
                    onChange={handleFilterChange}
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-gray-700">Start Date</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className="p-2 border border-gray-300 rounded w-full"
                    placeholderText="Select start date"
                />
            </div>
            
            <div className="mb-4">
                <label className="block mb-2 text-gray-700">End Date</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className="p-2 border border-gray-300 rounded w-full"
                    placeholderText="Select end date"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-gray-700">Rows per page</label>
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="p-2 border border-gray-300 rounded w-full"
                >
                    {[5, 10, 15, 20].map(num => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            </div>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th onClick={() => handleSort('id')} className="cursor-pointer px-4 py-2">ID {sortKey === 'id' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('name')} className="cursor-pointer px-4 py-2">Name {sortKey === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('description')} className="cursor-pointer px-4 py-2">Description {sortKey === 'description' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('price')} className="cursor-pointer px-4 py-2">Price {sortKey === 'price' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('date')} className="cursor-pointer px-4 py-2">Date {sortKey === 'date' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product, index) => (
                        <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="px-4 py-2">{product.id}</td>
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.description}</td>
                            <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                            <td className="px-4 py-2">{new Date(product.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
                <div>
                    <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
                </div>
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 rounded-lg transition duration-150 ease-in-out ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductTable;
