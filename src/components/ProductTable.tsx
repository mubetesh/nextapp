import React, { useState } from 'react';
import { Product, products as initialProducts } from '../data/products';

const sortProducts = (products: Product[], sortKey: keyof Product, sortOrder: 'asc' | 'desc') => {
    return [...products].sort((a, b) => {
        if (sortKey === 'createdDate') {
            const dateA = new Date(a[sortKey]);
            const dateB = new Date(b[sortKey]);
            return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
        }
        if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });
};

const filterProducts = (products: Product[], filterText: string) => {
    return products.filter(product =>
        product.name.toLowerCase().includes(filterText.toLowerCase()) ||
        product.description.toLowerCase().includes(filterText.toLowerCase())
    );
};

const ProductTable: React.FC = () => {
    const [sortKey, setSortKey] = useState<keyof Product>('id');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [filterText, setFilterText] = useState('');

    const filteredProducts = filterProducts(initialProducts, filterText);
    const sortedProducts = sortProducts(filteredProducts, sortKey, sortOrder);

    const handleSort = (key: keyof Product) => {
        setSortKey(key);
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
    };

    return (
        <div>
            <h1>Product List</h1>
            <input
                type="text"
                placeholder="Filter products..."
                value={filterText}
                onChange={handleFilterChange}
                style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
            />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>ID {sortKey === 'id' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('name')}>Name {sortKey === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('description')}>Description {sortKey === 'description' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('price')}>Price {sortKey === 'price' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                        <th onClick={() => handleSort('createdDate')}>Created Date {sortKey === 'createdDate' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((product, index) => (
                        <tr key={product.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{new Date(product.createdDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx>{`
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    cursor: pointer;
                }
                th {
                    background-color: #f4f4f4;
                }
                th:hover {
                    background-color: #e0e0e0;
                }
                tr.even {
                    background-color: #7c7c7c; /* Light gray */
                    color: #ffffff;
                }
                tr.odd {
                    background-color: #ffffff; /* White */
                }
                input[type="text"] {
                    margin-bottom: 10px;
                    padding: 8px;
                    width: 100%;
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
};

export default ProductTable;
