import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

function Book(props) {
  const { book } = props;
  const { idBook, title, category } = book;
  return (
    <tr>
      <td>{idBook}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => props.removeBook(idBook)}>Delete</button>
      </td>
    </tr>
  );
}

const mapDispatchToProps = dispatch => ({
  removeBook: idBook => dispatch(removeBook(idBook)),
});

Book.propTypes = {
  book: PropTypes.shape({
    idBook: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Book);
