import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBook } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    removeBook: idBook => dispatch(removeBook(idBook)),
  };
}

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
        {books.map(b => (<Book key={b.idBook} book={b} onclick={removeBook} />))}
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

export default connect(null, mapDispatchToProps)(BooksList);
