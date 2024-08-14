// data.ts

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl?: string; // Optional field
    category: string;
    rating: number; // For the star rating
    date: string; // ISO date string
  }
  
  // Sample data
  export const products: Product[] = [
    {
      id: 1,
      name: 'Premium Coffee Maker',
      description: 'A top-of-the-line coffee maker with a sleek design and advanced brewing technology.',
      price: 129.99,
      imageUrl: '/images/product-b.jpg', // Update this path as necessary
      category: 'Appliances',
      rating: 4.5,
      date: '2024-01-01',
    },
    {
      id: 2,
      name: 'Ergonomic Office Chair',
      description: 'An ergonomic office chair designed for comfort and productivity, with adjustable settings.',
      price: 299.99,
      imageUrl: '/images/product-a.jpg', // Update this path as necessary
      category: 'Furniture',
      rating: 4.8,
      date: '2024-02-15',
    },
    {
      id: 3,
      name: 'Noise-Canceling Headphones',
      description: 'High-quality noise-canceling headphones with superior sound quality and long battery life.',
      price: 199.99,
      imageUrl: '/images/headphones.jpg', // Update this path as necessary
      category: 'Electronics',
      rating: 4.7,
      date: '2024-03-10',
    },
    {
      id: 4,
      name: 'Smartwatch Series 7',
      description: 'The latest smartwatch with fitness tracking, notifications, and a sleek design.',
      price: 399.99,
      imageUrl: '/images/smartwatch.jpg', // Update this path as necessary
      category: 'Wearables',
      rating: 4.6,
      date: '2024-04-20',
    },
  ];
  