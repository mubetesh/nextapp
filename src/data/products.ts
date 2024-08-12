// src/data/products.ts
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Product One',
      description: 'This is a brief description of Product One.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/400x250?text=Product+One',
    },
    {
      id: 2,
      name: 'Product Two',
      description: 'This is a brief description of Product Two.',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/400x250?text=Product+Two',
    },
    {
      id: 3,
      name: 'Product Three',
      description: 'This is a brief description of Product Three.',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/400x250?text=Product+Three',
    },
  ];
  