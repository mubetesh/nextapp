// src/app/contact/page.tsx
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">We’d love to hear from you! Reach out to us using the form below.</p>
      </header>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
