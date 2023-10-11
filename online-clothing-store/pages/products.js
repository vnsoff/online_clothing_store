// pages/products.js

import Header from '../components/Header';
import Product from '../components/ProductCard';

// Sample product data (replace with actual data)
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
  },
  // Add more products as needed
];

function ProductsPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Products</h1>
        <Product products={products} />
      </div>
    </div>
  );
}
console.log(products); // Add this line to check the contents of the 'products' array

export default ProductsPage;