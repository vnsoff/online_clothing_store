import React from 'react';

function CategorySelection({ onSelectCategory }) {
  const categories = ['Trends', 'Women', 'Men', 'Plus Size', 'Brands']; // Add your categories

  return (
    <div>
      <h3>Select a category:</h3>
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySelection;