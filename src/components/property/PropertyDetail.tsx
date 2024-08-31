"use client";
import React from 'react';
import { Property } from '../../data/properties';

const PropertyDetail: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <img src={ property.image} alt={property.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg mb-2">Location: {property.location}</p>
      <p className="text-xl font-bold">
        Price: { property.type === 'sale' ? `$${property.price.toLocaleString()}` : `$${property.price.toLocaleString()}/month`}
      </p>
    </div>
  );
};

export default PropertyDetail;
