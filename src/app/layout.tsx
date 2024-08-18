// src/app/layout.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Footer from '../components/Footer'

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
        <footer>
          <Footer />
        </footer> 
        
      </body>
    </html>
  );
};

export default Layout;
