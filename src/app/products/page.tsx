// src/app/contact/page.tsx
import BackToTop from '@/components/BackToTop';
import HelloCard from '@/components/Hello';
import SampleCard from '@/components/SampleCard';
import React from 'react';
import { products } from '@/data/pro';

const ContactPage: React.FC = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-6">
      <header className="mb-4 text-center">
       <h1 className="text-4xl font-bold mb-4">Products</h1>
        <p className="text-lg text-gray-600">We’d like to share you our products here.</p>
      </header>
      <HelloCard />
      <BackToTop />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <SampleCard key={product.id} product={product} />
      ))}
    </div>
    </section>
  );
};

export default ContactPage;
