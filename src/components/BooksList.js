import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ books: state.booksReducer.books });

function BooksList(props) {
  const { books } = props;
  return (
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
        {books.map(b => (<Book key={b.idBook} book={b} />))}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      idBook: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(BooksList);
