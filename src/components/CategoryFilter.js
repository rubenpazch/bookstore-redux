import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function CategoryFilter() {
  return (
    <label htmlFor="book-title">
      Categorie
      <select name="category" id="category">
        <option>Choose a category</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </label>
  );
}

export default CategoryFilter;
