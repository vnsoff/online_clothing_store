//components/CategorySelection.js

import React from 'react';

function CategorySelection({ categories, onSelectCategory }) {
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