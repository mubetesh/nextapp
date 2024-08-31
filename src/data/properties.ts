export interface Property {
    id: number;
    title: string;
    location: string;
    price: number;
    type: 'sale' | 'rent';
    image: string;
  }
  
  export const properties: Property[] = [
    {
      id: 1,
      title: 'Beautiful Family Home',
      location: 'New York, NY',
      price: 500000,
      type: 'sale',
      image: '/images/product-a.jpg',
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: 'San Francisco, CA',
      price: 3000,
      type: 'rent',
      image: '/images/product-a.jpg',
    },
    // Add more mock properties
  ];
  