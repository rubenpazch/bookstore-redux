import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function CategoryFilter({ handleFilterChange }) {
  return (
    <label htmlFor="book-title">
      Categorie
      <select name="category" id="category" onChange={e => handleFilterChange(e.target.value)}>
        <option>All</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </label>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
