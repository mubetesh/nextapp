// src/app/about/page.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto p-6 bg-slate-400 rounded-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">Learn more about our mission and values.</p>
      </header>
      <div className= "shadow-lg rounded-lg p-6 bg-slate-500">
        <p className="text-lg mb-4">
          At MyWebsite, we are committed to delivering high-quality services with professionalism and elegance. Our team of experts is dedicated to providing exceptional experiences and results.
        </p>
        <p className="text-lg">
          We believe in the power of innovation and strive to stay ahead of the curve to bring you the best solutions. Thank you for choosing us as your trusted partner.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
