//components/Brands.js

import React from 'react';
import Link from 'next/link';

const brandsData = [
  { id: 1, name: 'Brand 1', image: '/images/product_image_2.svg' },
  { id: 2, name: 'Brand 2', image: '/images/product_image_2.svg' },
  { id: 3, name: 'Brand 3', image: '/images/product_image_2.svg' },
  { id: 4, name: 'Brand 4', image: '/images/product_image_2.svg' },
  { id: 5, name: 'Brand 5', image: '/images/product_image_2.svg' },
  { id: 6, name: 'Brand 6', image: '/images/product_image_2.svg' },
];

function Brands() {
  return (
    <div className="flex flex-wrap">
      {brandsData.map((brand) => (
        <div key={brand.id} className="w-1/2 p-4">
          <Link href={`/products/${brand.name}`}>
            <div className="bg-white p-4 rounded shadow">
              <img src={brand.image} alt={brand.name} className="w-32 h-32 mx-auto" />
              <h3 className="text-center text-lg mt-2">{brand.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Brands;
