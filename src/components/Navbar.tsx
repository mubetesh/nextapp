import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg'; // Adjust the path to your logo file

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/10 text-white shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold">MyWebsite</span>
          </div>
        </Link>
        {/* Navigation Links */}
        <ul className="flex space-x-2">
          <li className="hover:bg-slate-700 rounded-md">
            <Link href="/" passHref>
              <div className="transition-colors duration-300 cursor-pointer hover:bg-slate-700 px-4 py-2 rounded-md text-center">Home</div>
            </Link>
          </li>
          <li className="hover:bg-slate-700 rounded-md">
            <Link href="/products" passHref>
              <div className="transition-colors duration-300 cursor-pointer hover:bg-slate-700 px-4 py-2 rounded-md text-center">Products</div>
            </Link>
          </li>
          <li className="hover:bg-slate-700 rounded-md">
            <Link href="/about" passHref>
              <div className="transition-colors duration-300 cursor-pointer hover:bg-slate-700 px-4 py-2 rounded-md text-center">About Us</div>
            </Link>
          </li>
          <li className="hover:bg-slate-700 rounded-md">
            <Link href="/contact" passHref>
              <div className="transition-colors duration-300 cursor-pointer hover:bg-slate-700 px-4 py-2 rounded-md text-center">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
