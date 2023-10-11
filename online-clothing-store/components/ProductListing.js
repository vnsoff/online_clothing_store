import React from 'react';
import axios from 'axios';

function ProductListing({ selectedCategory }) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Define an async function to fetch products.
    const fetchProducts = async () => {
      try {
        // Make an HTTP request to fetch products based on the selected category.
        const response = await axios.get(`/api/products?category=${selectedCategory}`);
        // Assuming the response contains an array of products.
        const products = response.data;
  
        // Update the products state with the fetched data.
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    // Call the fetchProducts function.
    fetchProducts();
  }, [selectedCategory]);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListing;