export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  date: string;
  category: string;
  rating: number;
  isOnSale?: boolean; // Add the isOnSale property
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling wireless headphones with Bluetooth 5.0.',
    price: 89.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-07-01',
    category: 'Electronics',
    rating: 4.8,
    isOnSale: true  // Example flag
  },
  {
    id: 2,
    name: 'Smartphone',
    description: 'Latest model smartphone with a 6.7-inch display and 128GB storage.',
    price: 699.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-07-15',
    category: 'Electronics',
    rating: 4.6,
    isOnSale: false  // Example flag
  },
  {
    id: 3,
    name: 'Portable Charger',
    description: 'High-capacity portable charger with fast charging capability.',
    price: 24.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-06-20',
    category: 'Accessories',
    rating: 4.4,
    isOnSale: true  // Example flag
  },
  {
    id: 4,
    name: 'Organic Coffee Beans',
    description: 'Premium organic coffee beans sourced from the best farms.',
    price: 15.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-08-01',
    category: 'Food & Beverage',
    rating: 4.7,
    isOnSale: false  // Example flag
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitor and GPS.',
    price: 59.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-08-10',
    category: 'Health & Wellness',
    rating: 4.5,
    isOnSale: true  // Example flag
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    description: 'Water-resistant Bluetooth speaker with up to 12 hours of playtime.',
    price: 49.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-05-25',
    category: 'Electronics',
    rating: 4.3,
    isOnSale: false  // Example flag
  },
  {
    id: 7,
    name: 'Gaming Mouse',
    description: 'Ergonomic gaming mouse with customizable RGB lighting.',
    price: 39.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-07-30',
    category: 'Accessories',
    rating: 4.6,
    isOnSale: false  // Example flag
  },
  {
    id: 8,
    name: 'Blender',
    description: 'High-power blender with multiple speed settings for smoothies and more.',
    price: 89.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-06-15',
    category: 'Home Appliances',
    rating: 4.7,
    isOnSale: true  // Example flag
  },
  {
    id: 9,
    name: 'Yoga Mat',
    description: 'Durable and non-slip yoga mat perfect for home workouts.',
    price: 29.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-08-05',
    category: 'Fitness',
    rating: 4.8,
    isOnSale: false  // Example flag
  },
  {
    id: 10,
    name: 'Digital Camera',
    description: 'Compact digital camera with high-resolution image capture.',
    price: 499.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-08-12',
    category: 'Electronics',
    rating: 4.4,
    isOnSale: true  // Example flag
  },
  {
    id: 11,
    name: 'Leather Wallet',
    description: 'Genuine leather wallet with multiple card slots and a coin pocket.',
    price: 39.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-07-25',
    category: 'Accessories',
    rating: 4.6,
    isOnSale: false  // Example flag
  },
  {
    id: 12,
    name: 'Electric Kettle',
    description: 'Fast-boiling electric kettle with automatic shut-off feature.',
    price: 34.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-06-30',
    category: 'Home Appliances',
    rating: 4.5,
    isOnSale: false  // Example flag
  },
  {
    id: 13,
    name: 'Cookbook',
    description: 'Collection of easy-to-make recipes for all occasions.',
    price: 19.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-08-07',
    category: 'Books',
    rating: 4.7,
    isOnSale: true  // Example flag
  },
  {
    id: 14,
    name: 'T-shirt',
    description: 'Comfortable cotton T-shirt available in various colors.',
    price: 14.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-07-10',
    category: 'Clothing',
    rating: 4.3,
    isOnSale: false  // Example flag
  },
  {
    id: 15,
    name: 'Desk Chair',
    description: 'Ergonomic desk chair with adjustable height and lumbar support.',
    price: 149.99,
    imageUrl: '/images/product-a.jpg',
    date: '2024-07-20',
    category: 'Furniture',
    rating: 4.6,
    isOnSale: false  // Example flag
  }
<<<<<<< HEAD
  
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
  
=======
];
>>>>>>> 6ff071ab85eecfc9e1b115bddc454af6df2f4e22
