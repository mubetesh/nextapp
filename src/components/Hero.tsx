// src/components/Hero.tsx

import React from 'react';
import Image from 'next/image';
import heroImage from '../../public/images/product-b.jpg'; // Replace with an appropriate hero image for a car dealership or rental

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-800 text-white h-screen flex items-center p-4 justify-center -mt-16 -z-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Car Showroom"
          layout="fill"
          objectFit="cover"
          className="object-cover brightness-50"
        />
        <div className="absolute p-4 inset-0 bg-black opacity-40"></div> {/* Overlay */}
        <h1>Hello World</h1>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Car</h1>
        <p className="text-lg md:text-2xl mb-6">Browse our extensive collection of premium cars for sale and rent. Quality and reliability guaranteed.</p>
        <div className="flex justify-center gap-4">
          <a href="#inventory" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition-colors duration-300">
            Browse Inventory
          </a>
          <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
