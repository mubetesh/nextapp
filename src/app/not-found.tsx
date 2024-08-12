// src/app/not-found.tsx
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">Go Back to Home</a>
    </section>
  );
};

export default NotFoundPage;
