// src/app/about/page.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-700">
          Discover our story, mission, and the values that drive us.
        </p>
      </header>

      <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At MyWebsite, our mission is to empower businesses and individuals by providing top-notch solutions and services. We aim to bridge the gap between innovation and execution, ensuring that our clients achieve their goals with efficiency and excellence.
        </p>
      </div>

      <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
          <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our dealings.</li>
          <li><strong>Innovation:</strong> We continuously seek out new ideas and approaches to solve complex problems.</li>
          <li><strong>Customer Focus:</strong> We prioritize the needs and satisfaction of our clients above all else.</li>
          <li><strong>Excellence:</strong> We strive for excellence in every project, ensuring high-quality results and client satisfaction.</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
        <p className="text-lg text-gray-600 mb-4">
          Our team is composed of highly skilled professionals who are passionate about what they do. With a diverse range of expertise and a shared commitment to excellence, we work collaboratively to deliver outstanding results.
        </p>
        <p className="text-lg text-gray-600">
          We believe in the power of teamwork and continuous learning, which helps us stay ahead in a rapidly evolving industry.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
