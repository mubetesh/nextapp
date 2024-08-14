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
      imageUrl: '../assets/Orange_Sport_Car_Wallpaper.jpg',
    },
    {
      id: 2,
      name: 'Product Two',
      description: 'This is a brief description of Product Two.',
      price: 39.99,
      imageUrl: '../assets/Green_Sport_Car_Black_Wallpaper.jpg',
    },
    {
      id: 3,
      name: 'Product Three',
      description: 'This is a brief description of Product Three.',
      price: 49.99,
      imageUrl: '../assets/Green_Sport_Car_Black_Wallpaper.jpg',
    },
    {
      id: 3,
      name: 'Product TFour',
      description: 'This is a brief description of Product Four.',
      price: 59.99,
      imageUrl: '../assets/Green_Sport_Car_Black_Wallpaper.jpg',
    },
  ];
  