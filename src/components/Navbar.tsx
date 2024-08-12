// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about"className="text-white hover:underline">About Us</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
