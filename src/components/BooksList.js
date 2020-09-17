import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBook, filterChange } from '../actions/index';
import CategoryFilter from './CategoryFilter';

const mapStateToProps = state => ({
  books: state.booksReducer.books,
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

  handleFilterChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    const { filterChange } = this.props;
    filterChange(event.target.value);
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <CategoryFilter />
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Category</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {books.map(b => (<Book key={b.idBook} book={b} onClick={this.handleRemoveBook} />))}
          </tbody>
        </table>
      </div>

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
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
