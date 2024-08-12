// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <section className="text-center min-h-screen">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to MyWebsite</h1>
      <p className="text-lg mb-8">We provide professional services with a touch of elegance.</p>
      <div className="flex justify-center space-x-6">
        <Link href="/about" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">Learn More About Us
        </Link>
        <Link href="/contact" className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700">Contact Us
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
