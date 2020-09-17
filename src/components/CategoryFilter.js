import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function CategoryFilter() {
  return (
    <label htmlFor="book-title">
      Categorie
      <select name="category" id="category">
        <option>All</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </label>
  );
}

export default CategoryFilter;

// class CategoryFilter extends Component {
//  render() {
//    return (
//      <label htmlFor="book-title">
//        Categorie
//        <select name="category" id="category" onChange={this.handleFilterChange}>
//          <option>All</option>
//          {categories.map(c => <option key={c} value={c}>{c}</option>)}
//        </select>
//      </label>
//    );
//  }
// }
