"use client"
import React from 'react';
import Link from 'next/link';

const Navbar : React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Real Estate</Link>
        <div>
          <Link href="/search" className="mr-4">Search</Link>
          <Link href="/auth/login" className="mr-4">Login</Link>
          <Link href="/auth/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
