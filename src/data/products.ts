// src/data/products.ts
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdDate: string; // Adding createdDate as a string
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Product One',
        description: 'This is a brief description of Product One.',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/400x250?text=Product+One',
        createdDate: '2024-01-15', // Example date
    },
    {
        id: 2,
        name: 'Product Two',
        description: 'This is a brief description of Product Two.',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/400x250?text=Product+Two',
        createdDate: '2024-02-22', // Example date
    },
    {
        id: 3,
        name: 'Product Three',
        description: 'This is a brief description of Product Three.',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/400x250?text=Product+Three',
        createdDate: '2024-03-10', // Example date
    },
];
