const express = require('express');
const app = express();

// Define a simple in-memory product database. Replace this with your actual data source.
const productsDatabase = {
  Men: [
    { id: 1, name: 'Men Product 1', price: 29.99 },
    { id: 2, name: 'Men Product 2', price: 39.99 },
    // Add more men's products as needed.
  ],
  Women: [
    { id: 3, name: 'Women Product 1', price: 19.99 },
    { id: 4, name: 'Women Product 2', price: 24.99 },
    // Add more women's products as needed.
  ],
  // Define other categories and their products.
};

app.get('/api/products', (req, res) => {
  const category = req.query.category;

  // Check if the category is valid and exists in the database.
  if (productsDatabase[category]) {
    // If the category exists, send the products for that category as the response.
    res.json(productsDatabase[category]);
  } else {
    // If the category is not found, send an error response with a 404 status code.
    res.status(404).json({ error: 'Category not found' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
