import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function ProductListing({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let newProducts;
/*     const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products/${selectedCategory}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
 */
    //placeholder
    if (selectedCategory === 'men') {
      newProducts = [
        { id: 1, name: "Men's Shirt 1", price: 34.99, image: '/images/product_image.svg' },
        { id: 2, name: "Men's Shirt 2", price: 44.99, image: '/images/product_image.svg' },
        { id: 3, name: "Men's Jeans 3", price: 49.99, image: '/images/product_image.svg' },
        { id: 4, name: "Men's Jeans 4", price: 54.99, image: '/images/product_image.svg' },
        { id: 5, name: "Men's Jeans 5", price: 23.99, image: '/images/product_image.svg' },
        { id: 6, name: "Men's Jeans 6", price: 12.99, image: '/images/product_image.svg' },
        { id: 7, name: "Men's Jeans 7", price: 43.99, image: '/images/product_image.svg' },
        { id: 8, name: "Men's Jeans 8", price: 256.99, image: '/images/product_image.svg' },
        { id: 9, name: "Men's Jeans 9", price: 34.99, image: '/images/product_image.svg' },
        { id: 10, name: "Men's Jeans 10", price: 56.99, image: '/images/product_image.svg' },
        { id: 11, name: "Men's Jeans 11", price: 67.99, image: '/images/product_image.svg' },
        { id: 12, name: "Men's Jeans 12", price: 67.99, image: '/images/product_image.svg' },
      ];
    } else if (selectedCategory === 'women') {
      newProducts = [
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_2.svg' },
        { id: 23, name: "Women's Dress 2", price: 59.99, image: '/images/product_image_2.svg' },
        { id: 1343, name: "Women's Shirt 1", price: 29.99, image: '/images/product_image_2.svg' },
        { id: 144, name: "Women's Shirt 2", price: 3.99, image: '/images/product_image_2.svg' },
        { id: 14344, name: "Women's Shirt 2", price: 349.99, image: '/images/product_image_2.svg' },
        { id: 1444, name: "Women's Shirt 2", price: 394.99, image: '/images/product_image_2.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_2.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_2.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_2.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_2.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_2.svg' },
      ];
    } else if (selectedCategory === 'new') {
      newProducts = [
        { id: 143, name: "Dress 1", price: 49.99, image: '/images/product_image_3.svg' },
        { id: 23, name: "Dress 2", price: 59.99, image: '/images/product_image_3.svg' },
        { id: 1343, name: "Shirt 1", price: 29.99, image: '/images/product_image_3.svg' },
        { id: 144, name: " Shirt 2", price: 3.99, image: '/images/product_image_3.svg' },
        { id: 14344, name: "Shirt 2", price: 349.99, image: '/images/product_image_3.svg' },
        { id: 1444, name: "Women's Shirt 2", price: 394.99, image: '/images/product_image_3.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_3.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_3.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_3.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_3.svg' },
        { id: 1544, name: "Women's Shirt 2", price: 393.99, image: '/images/product_image_3.svg' },
      ];
    } else if (selectedCategory === 'plus_size') {
      newProducts = [
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_4.svg' },
      ];
    }
    else if (selectedCategory === 'trends') {
      newProducts = [
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
        { id: 143, name: "Women's Dress 1", price: 49.99, image: '/images/product_image_5.svg' },
      ];
    }
    setProducts(newProducts);
  }, [selectedCategory]);

  return (
    <div className="flex mt-4">
      {/* Left side component (e.g., filters or categories) with margin */}
      <div className="w-1/5 p-4 ml-16">
        <div className="bg-gray-100 p-4 rounded shadow">
          Filters
        </div>
      </div>

      {/* Right side grid of products with margin */}
      <div className="w-4/5 p-4 mr-16">
        <div className="text-left text-4xl font-bold py-4 mb-8">
          {selectedCategory === 'men'
            ? "Men's Clothing"
            : selectedCategory === 'women'
            ? "Women's Clothing"
            : selectedCategory === 'new'
            ? "New Products"
            : selectedCategory === 'plus_size'
            ? "Plus Size Clothing"
            : selectedCategory === 'trends'
            ? "Trending"
            : "Other Categories"
            }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
