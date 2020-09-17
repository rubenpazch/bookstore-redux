import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterChange } from '../actions/index';


const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    console.log(event.target.value);
    const { filterChange } = this.props;
    filterChange(event.target.value);
  }

  render() {
    return (
      <label htmlFor="book-title">
        Categorie
        <select name="category" id="category" onChange={this.handleFilterChange}>
          <option>All</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterChange: category => dispatch(filterChange(category)),
  };
}

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CategoryFilter);

// function CategoryFilter() {
//  return (
//    <label htmlFor="book-title">
//      Categorie
//      <select name="category" id="category">
//        <option>All</option>
//        {categories.map(c => <option key={c} value={c}>{c}</option>)}
//      </select>
//    </label>
//  );
// }
