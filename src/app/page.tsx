"use client"
import React from 'react';
import Link from 'next/link';
import UserForm from '../components/UserForm';
import ProductCard from '../components/ProductCard';
import ProductList from '../components/ProductsList';
import ProductExport from '@/components/ProductExport';
import ProductTable from '@/components/ProductTable';
import CardSlider from '@/components/Card';
import TestimonialList from "@/components/TestimonialList"
import { products  } from '../data/products';
import Image from 'next/image';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/Hero';


const HomePage: React.FC = () => {

  return (
    <section className="text-center min-h-full px-6">
      <div>
      <Hero />
      <ProductExport />
      <ProductTable />
      <CardSlider products={products} />
      <TestimonialList />
      <BackToTop />
      </div>
      
    </section>
  );
};


export default HomePage;
