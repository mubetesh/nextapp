// components/TestimonialList.tsx
import React from 'react';
import { testimonials } from '../data/testimonials';

const TestimonialList = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold p-4">Welcome to Our Website</h1>
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-6 border rounded-lg shadow-lg bg-white max-w-md mx-auto">
                    {testimonial.imageUrl && (
                        <img
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mb-4 mx-auto border-2 border-gray-300"
                        />
                    )}
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">{testimonial.name}</h3>
                    <p className="text-lg text-gray-500 text-center mb-2">{testimonial.position}, {testimonial.company}</p>
                    <p className="text-base text-gray-700 leading-relaxed">{testimonial.message}</p>
                </div>
                
                ))}
            </div>
        </div>
        </div>
    );
};

export default TestimonialList;
