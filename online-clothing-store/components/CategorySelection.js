function CategorySelection({ selectedCategory, onSelectCategory }) {
    const categories = ['Men', 'Women', 'Plus Size', 'Brands','New','Trends']; // Define your categories
    return (
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            } px-4 py-2 rounded-md transition-colors hover:bg-blue-500 hover:text-white`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }