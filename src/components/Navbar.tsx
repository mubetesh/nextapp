// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg'; // Adjust the path to your logo file

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold">MyWebsite</span>
          </div>
        </Link>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" passHref>
              <div className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <div className="hover:text-gray-300 transition duration-300 cursor-pointer">About Us</div>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <div className="hover:text-gray-300 transition duration-300 cursor-pointer">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
