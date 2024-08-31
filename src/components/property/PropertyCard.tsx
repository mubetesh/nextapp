"use client";
import React from 'react';
import Link from 'next/link';
import { Property } from '../../data/properties';
import Image from 'next/image';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <section>
    <div key={property.id} className="bg-white p-4 shadow-md rounded-lg">
     
      <Image src={property.image} alt={property.title} width={100} height={100} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{property.title}</h2>
      <p className="text-gray-600 mb-2">Location: {property.location}</p>
      <p className="text-lg font-bold">
        Price: { property.type === 'sale' ? `$${property.price.toLocaleString()}` : `$${property.price.toLocaleString()}/month`}
      </p>
      <Link href={`/properties/${property.id}`} className="text-blue-500 mt-2 inline-block">
        View Details
      </Link>
    </div>
    </section>
  );
};

export default PropertyCard;
