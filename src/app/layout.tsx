// src/app/layout.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-400 text-gray-900 min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>  
        <footer className="bg-gray-900 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
