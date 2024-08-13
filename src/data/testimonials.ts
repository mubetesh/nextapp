// data/testimonial.ts

// Define the TypeScript interface for a Testimonial
export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    message: string;
    imageUrl?: string; // Optional field for the testimonial's image
}

// Sample testimonials data
export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Jane Doe',
        position: 'CEO',
        company: 'Tech Innovations',
        message: 'This is a fantastic product! It has really helped our team work more efficiently.',
        imageUrl: 'https://via.placeholder.com/100x100?text=Jane+Doe', // Optional
    },
    {
        id: 2,
        name: 'John Smith',
        position: 'CTO',
        company: 'Creative Solutions',
        message: 'Highly recommend this to anyone looking to improve their workflow. It’s a game changer!',
        imageUrl: 'https://via.placeholder.com/100x100?text=John+Smith', // Optional
    },
    {
        id: 3,
        name: 'Alice Johnson',
        position: 'Product Manager',
        company: 'NextGen Tech',
        message: 'An amazing tool with a user-friendly interface. Our productivity has skyrocketed!',
        imageUrl: 'https://via.placeholder.com/100x100?text=Alice+Johnson', // Optional
    },
];
