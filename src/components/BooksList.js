import { connect } from 'react-redux';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBook, filterChange } from '../actions/index';
import CategoryFilter from './CategoryFilter';

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  category: state.filterReducer.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: idBook => dispatch(removeBook(idBook)),
  filterChange: category => dispatch(filterChange(category)),
});

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(idBook) {
    const { removeBook } = this.props;
    removeBook(idBook);
  }

  handleFilterChange(category) {
    const { filterChange } = this.props;
    filterChange(category);
  }

  render() {
    const { books, category } = this.props;
    console.log(books);
    let filterBooks = null;
    if (category === 'All') {
      filterBooks = books;
    } else {
      filterBooks = books.filter(b => b.category === category);
    }

    return (

      <Row className="listBookStore">
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
        {filterBooks.map(b => (
          <Book
            key={b.idBook}
            book={b}
            onClick={this.handleRemoveBook}
          />
        ))}
      </Row>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      idBook: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
