// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import UserForm from '../components/UserForm';
import {products} from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductList from '../components/ProductsList';

const HomePage: React.FC = () => {
  return (
    <section className="text-center min-h-full p-6">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to MyWebsite</h1>
      <p className="text-lg mb-8">We provide professional services with a touch of elegance.</p>
      <div className="flex justify-center space-x-6">
        <Link href="/about" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">Learn More About Us
        </Link>
        <Link href="/contact" className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700">Contact Us
        </Link>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
        <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ProductList />
      <UserForm/>
    </section>
  );
};

export default HomePage;
